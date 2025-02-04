import PropTypes from "prop-types";

const Resume = ({ className }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header/Introduction */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">Professional Resume</h1>
        <div className="text-gray-600 dark:text-gray-300">
          <p className="text-lg">Your Name</p>
          <p>Your Title • Location</p>
          <p>email@example.com</p>
        </div>
      </section>

      {/* Experience */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Company Name</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Position • Date Range
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
              <li>Achievement or responsibility</li>
              <li>Achievement or responsibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">University Name</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Degree • Date Range
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Relevant coursework or achievements
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
          <div>
            <h3 className="font-semibold">Technical Skills</h3>
            <ul className="list-disc list-inside">
              <li>Skill 1</li>
              <li>Skill 2</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Soft Skills</h3>
            <ul className="list-disc list-inside">
              <li>Skill 1</li>
              <li>Skill 2</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

Resume.propTypes = {
  className: PropTypes.string,
};

export default Resume;
