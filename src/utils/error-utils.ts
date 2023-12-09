import { AppError, RouterError } from "app/types";

export const checkAppError = (error: any): error is AppError => {
  return (error as AppError).message !== undefined;
};

export const checkLanguageError = (error: any): error is Error => {
  return (error as Error).message !== undefined;
};

export const checkRouterError = (error: any) => {
  return (error as RouterError).statusText !== undefined;
};

export const parseError = (error: any) => {
  if (checkAppError(error)) {
    return error.message;
  }

  if (checkLanguageError(error)) {
    return error.message;
  }

  if (checkRouterError(error)) {
    return `${error.statusText}: ${error.data}`;
  }

  return JSON.stringify(error);
};
