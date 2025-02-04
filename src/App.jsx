import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Listen to hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setCurrentPage(hash);
    };

    // Set initial page based on hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Function to render the current page
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "resume":
        return <Resume />;
      case "projects":
        return <Projects />;
      case "blog":
        return (
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <p>Blog content coming soon...</p>
          </div>
        );
      case "journal":
        return (
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-4">Journal</h1>
            <p>Journal content coming soon...</p>
          </div>
        );
      case "gallery":
        return (
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h1 className="text-3xl font-bold mb-4">Gallery</h1>
            <p>Gallery content coming soon...</p>
          </div>
        );
      default:
        return <Home />;
    }
  };

  return <Layout currentPage={currentPage}>{renderPage()}</Layout>;
}

export default App;
