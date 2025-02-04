import { useState } from "react";
import { Menu, Sun, Moon, LayoutGrid } from "lucide-react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [layout, setLayout] = useState("single"); // single, two-column, grid
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const getLayoutClass = () => {
    switch (layout) {
      case "two-column":
        return "grid grid-cols-1 md:grid-cols-2 gap-6";
      case "grid":
        return "grid grid-cols-1 md:grid-cols-3 gap-6";
      default:
        return "max-w-4xl mx-auto";
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 py-3 lg:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Menu className="h-6 w-6" />
                </button>
                <span className="ml-4 text-xl font-semibold">Your Name</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    setLayout(
                      layout === "single"
                        ? "two-column"
                        : layout === "two-column"
                        ? "grid"
                        : "single"
                    )
                  }
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  title="Switch Layout"
                >
                  <LayoutGrid className="h-6 w-6" />
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {isDark ? (
                    <Sun className="h-6 w-6" />
                  ) : (
                    <Moon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-0 z-40 h-screen pt-16 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700`}
        >
          <div className="h-full px-4 py-6 overflow-y-auto">
            <ul className="space-y-2">
              {[
                { text: "Home", path: "#home" },
                { text: "Resume", path: "#resume" },
                { text: "Projects", path: "#projects" },
                { text: "Blog", path: "#blog" },
                { text: "Journal", path: "#journal" },
                { text: "Gallery", path: "#gallery" },
              ].map((item) => (
                <li key={item.text}>
                  <a
                    href={item.path}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className="p-4 pt-20 lg:p-6 lg:pt-20">
          <div className={getLayoutClass()}>{children}</div>
        </main>

        {/* Footer */}
        <footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
