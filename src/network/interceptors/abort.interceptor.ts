// abort API requests when needed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const abortRequestInterceptor = (config: any): any => {
  const abortController = new AbortController();
  config.signal = abortController.signal;
  setTimeout(() => {
    if (!abortController.signal.aborted) {
      abortController.abort();
    }
  }, Number(90000));
  return config;
};

export default abortRequestInterceptor;
