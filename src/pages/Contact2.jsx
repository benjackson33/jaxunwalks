import { useState } from "react";

const Contact2 = () => {
  const [form, setForm] = useState(false);

  const handleClick = () => {
    setForm(!form);
  };

  return (
    <div className="flex items-center justify-center mt-8 rubik-font rubik-400">
      <div
        className={`flex flex-col md:flex-row rounded-xl overflow-hidden w-10/11 md:w-10/11 mb-8 ml-4 mr-4 ${
          form ? "form-expanded" : "form-collapsed"
        }`}
      >
        {/* Left Column */}
        {!form && (
          <div className="md:w-96">
            <img
              src="/images/pexels-amalsanthosh-662417.jpeg"
              alt="Dog"
              className="object-cover w-full h-48 md:h-full rounded-lg"
            />
          </div>
        )}
        {/* Right Column */}
        <div className="md:w-1/2 p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold md:mb-12">
            Get in touch!
          </h2>
          <h3>07311269724</h3>
          <h3>
            <a className="accent-text" href="mailto:jaxundogs@gmail.com">
              jaxundogs@gmail.com
            </a>
          </h3>
          <p className="mt-6">
            To arrange a meeting and a trial walk, please feel free to contact
            me via email or phone, or fill in the enquiry form.
          </p>
          <div className="mt-12">
            <h3
              className="hover:cursor-pointer accent-text"
              onClick={handleClick}
              aria-expanded={form}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleClick();
              }}
            >
              New client enquiry form
            </h3>
            {form && (
              <div className="form-container">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeyhFJooFOCz10CTndiSqR6i5GnxMp2LBcyl5nt5yGdd1bzXA/viewform?embedded=true"
                  width="800"
                  height="1071"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                >
                  Loading…
                </iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
