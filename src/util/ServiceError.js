class ServiceError extends Error {
  constructor(status, ...args) {
    super(args);
    this.status = status;
    Error.captureStackTrace(this, ServiceError);
  }
}

export default ServiceError;
