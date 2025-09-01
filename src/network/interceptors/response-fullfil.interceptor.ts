import { ToastService } from '@/components/molecules';
import { AxiosResponse } from 'axios';

const onResponseFulfilled = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: AxiosResponse<any, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): AxiosResponse<any, any> => {
  if (
    response.config?.showSuccessToast &&
    response.config.showSuccessToast(response)
  ) {
    ToastService.success({
      props: {
        messageProps: response.config?.showSuccessToast(response),
        testId: 'api-success',
      },
      duration: 4000,
    });
  }
  return response;
};

export default onResponseFulfilled;
