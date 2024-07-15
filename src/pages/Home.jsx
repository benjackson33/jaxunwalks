import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Nav.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Jaxun Dog Walking</title>
        <meta
          name="description"
          content="Friendly dog walking in Winchester, Hampshire"
        />
        <meta
          name="keywords"
          content="Dog, Walking, Pet, Sitting, Winchester"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jaxun Dog Walking" />
        <meta
          property="og:description"
          content="Friendly dog walking in Winchester, Hampshire"
        />
        <meta property="og:image" content="/public/images/vizsla.jpeg" />
        <meta property="og:url" content="http://www.jaxundogs.co.uk/" />
        <link rel="canonical" href="http://www.jaxundogs.co.uk/" />
      </Helmet>
      <div className="flex items-start ml-20 mt-16 space-x-4">
        <div className="w-80 text-4xl rubik-font rubik-400 mt-4 ">
          <h1>
            Welcome to
            <span className="primary-text"> Jaxun Dog Walking</span>, where your
            furry friend's <span className="accent-text">happiness </span> and{" "}
            <span className="accent-text">well-being</span> are my top
            priorities.
          </h1>
          <p className="mt-3 text-base">
            Hello I'm Ben, Winchester based{" "}
            <span className="accent-text">insured</span> and{" "}
            <span className="primary-text">canine first aid </span>
            trained dog walker.
          </p>
        </div>
        <div>
          <img
            src="/public/images/vizsla.jpeg"
            alt="dog"
            className="h-96 rounded-lg ml-16"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
