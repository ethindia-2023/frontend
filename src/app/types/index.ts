export interface AppError {
  message: string;
}

export interface RouterError {
  statusText: string;
  data: string;
  error: AppError | Error | {};
}
