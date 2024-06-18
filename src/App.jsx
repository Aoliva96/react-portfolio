import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./components/Page";
import { useLocation } from "react-router-dom";

function App() {
  // Get the current page from the URL
  const currentPage = useLocation().pathname;

  // JSX for the App component
  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
