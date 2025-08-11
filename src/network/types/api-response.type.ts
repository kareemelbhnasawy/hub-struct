// TODO: To modifed as Default Api Response Type
type ApiResponse = {
  status: {
    code: string;
    description: string | null;
  };
  trackingInformation: {
    requestId: string | null;
    trackingId: string | null;
  };
  [key: string]: unknown;
};

export default ApiResponse;
