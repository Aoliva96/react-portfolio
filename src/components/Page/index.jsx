import { useEffect } from "react";
import PageContent from "../PageContent";
import { capitalizeFirst } from "../../utils/helpers";
import { Outlet } from "react-router-dom";

function Page({ currentPage }) {
  // Remove the leading slash for the current page URL
  currentPage = currentPage.substring(1);

  // Set the document title for the current page
  useEffect(() => {
    document.title = capitalizeFirst(currentPage);
  }, [currentPage]);

  // JSX for the Page component
  return (
    <section>
      <h2>{capitalizeFirst(currentPage)}</h2>
      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}

export default Page;
