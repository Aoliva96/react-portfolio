import { useRouteError } from "react-router-dom";

export default function Error() {
  // Get the error object from the route and log to console
  const error = useRouteError();
  console.error(error);

  // JSX for Error component
  return (
    <div id="error-page" style={{ height: "100vh" }}>
      <div className="container">
        <h1>Sorry!</h1>
        <p>There was an unexpected error delivering the requested content.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
