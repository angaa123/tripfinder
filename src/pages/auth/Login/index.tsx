import React from "react";

const Login: React.FC<{}> = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex-1">
          <h3 className="font-bold text-2xl">
            Trip<span className="text-green-400">Finder</span>
          </h3>
          <h2 className="text-3xl font-bold text-start">Login</h2>
          <p className="text-start">Login to access your account</p>
          <div className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Floating outlined
            </label>
          </div>
        </div>
        <div className="flex-1 bg-green-100 rounded">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quod,
            eveniet debitis magnam dicta voluptatem quos? Ratione quae
            laudantium ad modi necessitatibus earum reprehenderit incidunt
            adipisci ipsa voluptatem. Hic, omnis!
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
