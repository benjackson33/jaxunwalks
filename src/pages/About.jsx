import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Jaxun dog walking</title>
        <meta
          name="description"
          content="About Jaxun dog walking. Specialising in small pack walks, ensuring each dog receives the individualised attention they deserve. Our aim is to create a safe, fun, and enriching experience, turning every walk into an adventure."
        />
        <meta
          name="keywords"
          content="Pack walks, insured, first-aid, safe, fun, outdoors"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us - Jaxun dog walking" />
        <meta
          property="og:description"
          content="About Jaxun dog walking. Specialising in small pack walks, ensuring each dog receives the individualised attention they deserve. Our aim is to create a safe, fun, and enriching experience, turning every walk into an adventure."
        />
        <meta property="og:image" content="/images/about-image.jpg" />
        <meta
          property="og:url"
          content="http://www.jaxundogs.co.uk/about-jaxun"
        />
        <link rel="canonical" href="http://www.jaxundogs.co.uk/about-jaxun" />
      </Helmet>
      <div className="flex items-center justify-center mt-8 rubik-font rubik-400">
        <div className="flex flex-col md:flex-row rounded-xl overflow-hidden w-10/11 md:w-10/11 mb-8 ml-4 mr-4">
          {/* Left Column */}
          <div className="md:w-1/2 p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
              At Jaxun, we recognise that every dog is unique. That's why we
              specialise in{" "}
              <span className="accent-text">small pack walks</span>, ensuring
              each dog receives the individualised attention they deserve. Our
              aim is to create a <span className="primary-text">safe</span>,{" "}
              <span className="primary-text">fun</span>, and{" "}
              <span className="primary-text">enriching </span>
              experience, turning every walk into an adventure.
            </h2>
            <p className="text-sm md:text-lg">
              Our small pack walks foster a sense of community among the dogs,
              allowing me to cater to each dog's needs. This approach ensures
              the right amount of exercise, socialisation, and quality time for
              your pet. By keeping our packs small, we provide a controlled,
              attentive, and enjoyable environment.
            </p>
          </div>
          {/* Right Column */}
          <div className="md:w-3/4">
            <img
              src="./images/dog-nose.png"
              alt="Dog"
              className="object-cover w-full h-48 md:h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8 rubik-font rubik-400">
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden w-10/11 md:w-10/11 mb-8 ml-4 mr-4">
          {/* Left Column */}
          <div className="md:w-1/3 p-4 md:p-6 mr-8">
            <img
              src="/public/images/IMG_3135copy.jpeg"
              alt="Dog"
              className="object-cover w-full h-20 md:h-full rounded-lg"
              loading="lazy"
            />
          </div>
          {/* Right Column */}
          <div className="md:w-2/3 mt-7">
            <h2
              className="text-xl md:text-2xl font-semibold mb-2 md:mb-4"
              style={{ textDecoration: "underline" }}
            >
              A bit about me
            </h2>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 pr-4">
                <p className="text-sm md:text-lg">
                  Hi there! I'm <span className="accent-text">Ben</span>, and
                  welcome to{" "}
                  <span className="primary-text">Jaxun Dog Care</span>. After
                  spending years working outdoors, I realised combining my love
                  for the great outdoors and dogs was a no-brainer. So, I made
                  the leap into dog walking. My aim is to build a genuine bond
                  with every dog I meet, making each walk an exciting adventure
                  for them. I'm fully{" "}
                  <span className="primary-text">insured</span> and{" "}
                  <span className="accent-text">
                    trained in canine first aid
                  </span>
                  , so you can rest easy knowing your pup is in safe hands. I
                  operate in Winchester and the surrounding areas, bringing joy
                  and fun to every walk.
                </p>
              </div>
              <div className="md:w-1/2 pl-4">
                <p className="text-sm md:text-lg">
                  What I love most about this job is the pure, contagious
                  happiness that dogs bring. Their enthusiasm for life is
                  unmatched, and it’s a joy to be a part of their world. Whether
                  you need regular walks or just an occasional helping hand, I’m
                  here to make sure your dog has a great time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
