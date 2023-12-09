import { useRouteError } from "react-router-dom";
import { parseError } from "utils/error-utils";

const ErrorLayout: React.FC = () => {
  const error = useRouteError();

  return <div>{parseError(error)}</div>;
};

export default ErrorLayout;
