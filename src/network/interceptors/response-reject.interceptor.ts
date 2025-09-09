import { API_UNAUTHORIZED_STATUS } from '../constants';
import refreshToken from '../services/auth/refresh-token/refresh-token.service';
import clientSetToken from '../utilities/client-set-token.util';
import RetryQueueManager from '../utilities/retry-queue.util';
import client from '../utilities/client.util';
import { ToastService } from '@/components/molecules/toast/toast-service';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onResponseReject = async (error: any): Promise<any> => {
  const originalRequest = error.config;
  if (!(originalRequest.hideErrorToast && error.config.hideErrorToast(error))) {
    ToastService.error({
      props: {
        messageProps: {
          text: error?.response?.data?.message || 'common.errorMsg',
        },
        testId: 'api-error',
      },
      duration: 4000,
    });

    if (
      error?.response?.status === API_UNAUTHORIZED_STATUS &&
      !originalRequest._retry
    ) {
      if (RetryQueueManager.getIsRefreshing()) {
        return new Promise((resolve, reject) => {
          RetryQueueManager.addToQueue({
            resolve,
            reject,
            config: originalRequest,
          });
        });
      }

      originalRequest._retry = true;
      RetryQueueManager.setIsRefreshing(true);

      try {
        const { accessToken } = await refreshToken();
        clientSetToken(accessToken);

        RetryQueueManager.processQueue(null);
        return client(originalRequest);
      } catch (refreshError) {
        RetryQueueManager.processQueue(refreshError);
        ToastService.error({
          props: {
            messageProps: { text: 'Session expired. Please login again.' },
            testId: 'refresh-token-error',
          },
          duration: 4000,
        });
        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
        return Promise.reject(refreshError);
      } finally {
        RetryQueueManager.setIsRefreshing(false);
      }
    }
    // Show toast for non-401 errors

    return Promise.reject(
      error instanceof Error ? error : new Error(JSON.stringify(error)),
    );
  }
};

export default onResponseReject;
