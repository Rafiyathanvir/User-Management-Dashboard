import { Link, useLocation } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="relative top-0 border-b-2 bg-blue-500 dark:bg-boxdark dark:border-gray-600 w-full drop-shadow-md">
        <div className="flex flex-col-2 sm:flex-row items-center justify-between py-4 px-4 md:px-6 2xl:px-11">
          <div className="flex items-center gap-3">
            <h1 className="text-sm md:text-[20px] font-bold text-gray-800 dark:text-white">
              User Management
            </h1>
          </div>

          
          <div className="flex items-center gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14c4 0 6-3 6-6s-2-6-6-6-6 3-6 6 2 6 6 6zm0 0v4m0 0c-4 0-6 3-6 6h12c0-3-2-6-6-6z"
                />
              </svg>
              Admin
            </button>

          </div>
        </div>
      </header>

      
    </>
  );
};

export default Header;
