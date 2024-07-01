import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center mt-8 rubik-font rubik-400">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden w-10/11 md:w-10/11 mb-8 ml-4 mr-4">
        {/* Left Column */}
        <div className="md:w-1/2 p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
            At Jaxun, we understand that every dog has unique needs and
            personalities. That's why we specialise in{" "}
            <span className="accent-text">small pack walks</span>, ensuring that
            each dog receives the individualised attention and care they
            deserve. Our commitment is to create a{" "}
            <span className="primary-text">safe</span>,{" "}
            <span className="primary-text">fun</span>, and{" "}
            <span className="primary-text">enriching </span>
            experience for your beloved pet, making every walk an adventure they
            look forward to.
          </h2>
          <p className="text-sm md:text-lg">
            Our small pack walks are designed to foster a sense of community and
            companionship among the dogs, while also allowing our experienced
            walkers to focus on each dog's specific needs. Whether it's ensuring
            they get the right amount of exercise, socializing them with other
            dogs, or simply spending quality time with them, our small pack
            approach maximizes the benefits for your dog. We believe that by
            keeping our packs small, we can provide a more controlled and
            attentive environment, where safety and enjoyment go hand in hand.
          </p>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2">
          <img
            src="/public/images/dog-nose.png"
            alt="Dog"
            className="object-cover w-full h-48 md:h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
