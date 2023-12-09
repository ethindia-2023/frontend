import { useContext, createContext, useState } from "react";
import { AppState, ChildrenProp } from "app/context/types";
import { parseError } from "utils/error-utils";

const defaultAppState: AppState = {
  isLoading: false,
  isError: false,
  handleError: (error: any) => {},
  handleLoading: (isLoading: boolean) => {},
};

const AppStateContext = createContext<AppState>(defaultAppState);

export const useAppState = () => {
  return useContext(AppStateContext);
};

const AppStateProvider = (props: ChildrenProp) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  // const onSubmit = (): void => {
  //   setIsError(false);
  // };

  const handleError = (error: any) => {
    setIsError(true);
    setErrorMessage(parseError(error));
  };

  const handleLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  const currentAppState: AppState = {
    isError,
    errorMessage,
    isLoading,
    handleError,
    handleLoading,
  };

  return (
    <AppStateContext.Provider value={currentAppState}>
      {
        // isError && (
        //   <ErrorPopup
        //     // onClose={() => setIsPopupOpen(false)}
        //     // title={error}
        //     // description={errorMessage}
        //     // onSubmit={onSubmit}
        //     // submit="Okay"
        //     errorMessage={errorMessage!}
        //   />
        // )}
      }
      {props.children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
