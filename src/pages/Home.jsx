import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex items-start ml-20 mt-16 space-x-4">
        <div className="w-80 text-4xl rubik-font rubik-400 mt-4">
          <h1>
            Welcome to
            <span className="primary-text"> Jaxun Dog Walking</span>, where your
            furry friend's <span className="accent-text">happiness </span> and{" "}
            <span className="accent-text">well-being</span> are my top
            priorities.
          </h1>
        </div>
        <div>
          <img
            src="/public/images/dog-3277416_1280.jpeg"
            alt="dog"
            className="h-96 h-auto rounded-lg ml-16"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
