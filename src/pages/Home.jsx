/**
 * Home page component
 * @param {{ className?: string }} props
 * @returns {JSX.Element}
 */
// eslint-disable-next-line react/prop-types
const Home = ({ className = "" }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h1 className="text-4xl font-bold mb-4">Your Name</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Welcome to my personal website. I&apos;m a [Your Role] passionate
          about [Your Interests].
        </p>
      </section>

      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        {/* Project preview cards will go here */}
      </section>

      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Recent Blog Posts</h2>
        {/* Blog post previews will go here */}
      </section>
    </div>
  );
};

export default Home;
