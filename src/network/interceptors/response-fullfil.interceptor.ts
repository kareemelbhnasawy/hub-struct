import { ToastService } from '@/components/molecules';
import { AnalyticEvent } from '@/constants';
import { logAppEvent } from '@/utilities';
import { AxiosResponse } from 'axios';
import { Config } from '../types/api-method-args-with-extras.type';

const onResponseFulfilled = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: AxiosResponse<any, any> & { config: Config },
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
  if (
    response.config?.analyticEvent &&
    response.config?.analyticEvent.eventName
  ) {
    logAppEvent({
      eventName: response.config.analyticEvent?.eventName,
      eventType: response.config.analyticEvent?.eventType ?? AnalyticEvent.user,
      eventParams: response.config.analyticEvent?.eventParams,
      options: response.config.analyticEvent?.options,
    });
  }
  return response;
};

export default onResponseFulfilled;
