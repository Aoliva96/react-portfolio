import { useEffect } from "react";
import PageContent from "../PageContent";
import { capitalizeFirst } from "../../utils/helpers";
import { Outlet } from "react-router-dom";

function Page({ currentPage }) {
  // Remove the leading slash for the current page URL
  currentPage = currentPage.substring(1);

  // Set title behavior for About page
  if (!currentPage) {
    currentPage = "About";
  }

  // Set page header text
  let pageTitle;
  let headerDisplay;
  if (currentPage === "About") {
    pageTitle = "";
    headerDisplay = "none";
  } else if (currentPage === "portfolio") {
    pageTitle = "Project Gallery";
    headerDisplay = "flex";
  } else {
    pageTitle = capitalizeFirst(currentPage);
    headerDisplay = "flex";
  }

  // Set the document title for the current page
  useEffect(() => {
    document.title = `${capitalizeFirst(currentPage)} | Aster Oliva`;
  }, [currentPage]);

  // JSX for the Page component
  return (
    <section>
      <h2
        style={{
          display: `${headerDisplay}`,
          backgroundColor: "var(--alpha-dark)",
          borderRadius: "48px",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          alignItems: "center",
        }}
      >
        {pageTitle}
      </h2>
      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}

export default Page;
