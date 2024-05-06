import { Carousel, Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { carouselListImage } from "../../../assets/carouselListImage";
import InformationInput from "../../../components/InfomationInput";

const Login: React.FC = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-8">
        <div className="flex-1 w-96">
          <h3 className="font-bold text-3xl">
            Trip<span className="text-green-400">Finder</span>
          </h3>
          <h2 className="text-2xl font-bold text-start">Login</h2>
          <p className="text-start">Login to access your account</p>
          <div className="my-2 flex flex-col gap-5">
            <InformationInput labelName="Email" />
            <InformationInput labelName="Password" isPassword={true} />
            <button className="bg-green-400 text-xl p-2 w-full border-none focus:outline-none hover:border-none text-white font-bold">
              Login
            </button>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <button className="border-green-400 text-xl bg-transparent py-2 w-full hover:border-green-400 focus:outline-none text-green-400 font-semibold">
                Continue as guest
              </button>
            </Link>
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
            {carouselListImage.map((imageLink: string) => {
              return (
                <Image
                  width={500}
                  height={600}
                  preview={false}
                  className="rounded-lg"
                  src={imageLink}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Login;
