import wall from "../waller_.jpg";

const Home = () => {
  return (
    <div className="relative">

     


      <div className="w-full h-screen hidden sm:block bg-contain bg-bottom bg-no-repeat" style={{ backgroundImage: `url(${wall})` }}>
      </div>


      <div className="sm:hidden flex items-center justify-center bg-black bg-opacity-50 h-screen">
       
        <h1 className="text-white text-xl font-bold text-center px-4 absolute bottom-10 w-full">
          Welcome to Abhyanjana
        </h1>
      </div>


      <div className="absolute top-4 right-4 z-10">
        <button className="bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
          Order Now
        </button>
      </div>


     
    </div>
  );
};

export default Home;
