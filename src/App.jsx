import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-gray-600 dark:text-gray-300">
            This is a test page to verify the layout component is working
            correctly.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Testing Features</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Try the dark mode toggle in the top right</li>
            <li>Click the layout icon to switch between layouts</li>
            <li>Use the menu button to toggle the sidebar</li>
            <li>Test responsiveness by resizing the window</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default App;
