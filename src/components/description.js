import React from "react";

const Description = () => {
  return (
    <div className="bg-gradient-to-r from-teal-100 to-teal-50 py-12">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">

        <h1 className="text-4xl font-bold text-center text-teal-800 mb-8">
          Abhyanjana: Crafting Care
        </h1>


        <div className="w-20 h-1 mx-auto bg-teal-600 mb-6"></div>


        <p className="text-lg text-gray-800 leading-relaxed tracking-wide">
          Abhyanjana emerged from a tradition of natural remedies, starting with
          a grandmother’s handcrafted hair oil made from homegrown ingredients.
          This recipe was perfected by a devoted mother for her son’s self-care
          needs. Each product of Abhyanjana is organically made and free from
          harmful chemicals, embodying love, tradition, and a nurturing spirit.
          <br />
          <br />
          With organically sourced ingredients, Abhyanjana continues its legacy
          of high-quality, organic hair care rooted in love, tradition, and a
          nurturing spirit passed down through generations.
        </p>


        <div className="mt-10 text-center">
          <button className="px-6 py-3 text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-lg transition-all duration-300">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;


