import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return <div>ERRORRRR!!!!</div>;
}

export default ErrorPage;
