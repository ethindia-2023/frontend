import { ReactNode } from "react";

export type AppState = {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  handleError: (error: any) => void;
  handleLoading: (isLoading: boolean) => void;
};

export type ChildrenProp = {
  children: ReactNode;
};
