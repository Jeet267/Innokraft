import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1E231E] text-white py-8">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-2">Abhyanjana</h2>
            <p className="text-sm">
              Crafting organic care products inspired by tradition and love. 
              Every product is a testament to nurturing self-care.
            </p>
          </div>


          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E6E3D2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.878v-6.988H7.897v-2.89h2.541v-2.196c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.459h-1.26c-1.243 0-1.63.773-1.63 1.564v1.869h2.773l-.443 2.89h-2.33v6.988C18.344 21.128 22 16.99 22 12z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E6E3D2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851 0 3.204-.012 3.584-.07 4.85-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.851.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.585 2.163 15.205 2.163 12c0-3.204.012-3.584.07-4.85.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.012 7.052.072 5.675.13 4.524.396 3.615 1.306c-.909.91-1.176 2.061-1.234 3.437C2.012 5.916 2 6.32 2 9.583v4.834c0 3.263.012 3.667.071 4.947.058 1.376.325 2.527 1.234 3.437.91.909 2.061 1.176 3.437 1.234 1.28.06 1.684.072 4.947.072h4.834c3.263 0 3.667-.012 4.947-.071 1.376-.058 2.527-.325 3.437-1.234.909-.91 1.176-2.061 1.234-3.437.06-1.28.072-1.684.072-4.947v-4.834c0-3.263-.012-3.667-.071-4.947-.058-1.376-.325-2.527-1.234-3.437-.91-.909-2.061-1.176-3.437-1.234C15.667.012 15.263 0 12 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E6E3D2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.643 4.937c-.835.37-1.73.617-2.675.732a4.804 4.804 0 002.116-2.601c-.935.555-1.97.959-3.073 1.184a4.77 4.77 0 00-8.143 4.355 13.576 13.576 0 01-9.845-4.993 4.774 4.774 0 001.477 6.378 4.733 4.733 0 01-2.165-.597v.06c0 2.245 1.596 4.117 3.712 4.548a4.818 4.818 0 01-2.158.082 4.785 4.785 0 004.463 3.317A9.593 9.593 0 010 20.13a13.529 13.529 0 007.29 2.13c8.746 0 13.534-7.242 13.534-13.534 0-.206-.006-.412-.016-.617A9.655 9.655 0 0024 4.557c-.877.389-1.818.651-2.8.765a4.764 4.764 0 002.106-2.601z" />
              </svg>
            </a>
          </div>
        </div>


        <hr className="my-6 border-t border-gray-500" />


        <div className="text-center">
          <p className="text-sm">&copy; 2024 Abhyanjana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
