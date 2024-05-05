import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Carousel, Image } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC<{}> = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="flex flex-row items-center gap-8">
        <div className="flex-1 w-96">
          <h3 className="font-bold text-3xl">
            Trip<span className="text-green-400">Finder</span>
          </h3>
          <h2 className="text-2xl font-bold text-start">Login</h2>
          <p className="text-start">Login to access your account</p>
          <div className="my-2 flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                type={isVisible ? "text" : "password"}
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-400 peer"
                placeholder=" "
              />
              <button
                className="end-2.5 bottom-2.5 absolute bg-transparent border-none p-0 focus:outline-none"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </button>
              <label
                htmlFor="floating_outlined"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-green-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Password
              </label>
            </div>
            <button className="bg-green-400 text-xl p-2 border-none focus:outline-none hover:border-none text-white font-bold">
              Login
            </button>
            <div>
              Don't have an account ?{" "}
              <Link
                to={"/signup"}
                className="text-green-400 hover:text-green-600"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-lg">
          <Carousel autoplay>
            <Image
              width={500}
              height={600}
              preview={false}
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1652255432402-4c58931f8ade"
            />
            <Image
              width={500}
              height={600}
              preview={false}
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1545172538-171a802bd867"
            />
            <Image
              width={500}
              height={600}
              preview={false}
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1604323990536-e5452c0507c1"
            />
            <Image
              width={500}
              height={600}
              preview={false}
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1588411393236-d2524cca1196"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Login;
