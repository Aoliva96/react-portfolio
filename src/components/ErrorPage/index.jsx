import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // Get the error object from the route and log to console
  const error = useRouteError();
  console.error(error);

  // JSX for ErrorPage component
  return (
    <div id="error-page">
      <h1>Sorry!</h1>
      <p>There was an unexpected error delivering the requested content.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
