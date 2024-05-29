const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-green-800 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
