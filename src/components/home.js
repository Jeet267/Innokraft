import wall from "../waller_.jpg";

const Home = () => {
  return (
    <div className="relative">
      {/* Background for larger screens */}
      <div
        className="hidden sm:block w-full min-h-screen bg-contain bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url(${wall})`,
        }}
      >
        {/* Content specific to larger screens */}
      </div>

      {/* Content for smaller screens */}
      <div className="sm:hidden flex items-center justify-center bg-black bg-opacity-50 py-8">
  <h1 className="text-white text-lg font-bold text-center px-4">
    Welcome to Abhyanjana
  </h1>
</div>


      {/* Floating button */}
      <div className="absolute top-7 right-4 z-10">
        <button className="bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Home;
