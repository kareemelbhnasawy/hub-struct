import client from './client.util';

interface QueueItem {
  resolve: (value: unknown) => void;
  reject: (error: unknown) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: any;
}

class RetryQueueManager {
  private static isRefreshing = false;
  private static failedQueue: QueueItem[] = [];

  static setIsRefreshing(value: boolean) {
    this.isRefreshing = value;
  }

  static getIsRefreshing() {
    return this.isRefreshing;
  }

  static addToQueue(item: QueueItem) {
    this.failedQueue.push(item);
  }

  static processQueue(error: unknown = null) {
    this.failedQueue.forEach((request) => {
      if (error) {
        request.reject(error);
      } else {
        request.resolve(client(request.config));
      }
    });
    this.failedQueue = [];
  }
}

export default RetryQueueManager;
