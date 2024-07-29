import { useState } from "react";

const Contact2 = () => {
  const [form, setForm] = useState(false);

  const handleClick = () => {
    setForm(!form);
  };

  return (
    <div className="flex items-center justify-center mt-8 rubik-font rubik-400">
      <div
        className={`flex flex-col md:flex-row rounded-xl overflow-hidden w-full md:w-10/12 mb-8 ml-4 mr-4 ${
          form ? "form-expanded" : "form-collapsed"
        }`}
      >
        {/* Left Column */}
        {!form && (
          <div className="md:w-1/2 flex-shrink-0">
            <img
              src="/images/pexels-amalsanthosh-662417.jpeg"
              alt="Dog"
              className="w-full h-full object-cover md:object-contain rounded-lg"
            />
          </div>
        )}
        {/* Right Column */}
        <div className="flex flex-col md:w-1/2 p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Get in touch!
          </h2>
          <h3 className="text-lg md:text-xl">07311269724</h3>
          <h3 className="text-lg md:text-xl mb-2">
            <a className="accent-text" href="mailto:jaxundogs@gmail.com">
              jaxundogs@gmail.com
            </a>
          </h3>
          <p className="mt-6 text-sm md:text-lg">
            To arrange a meeting and a trial walk, please feel free to contact
            me via email or phone, or fill in the enquiry form.
          </p>
          <div className="mt-8">
            <h3
              className="hover:cursor-pointer accent-text text-lg md:text-xl"
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
              <div className="form-container mt-4 md:mt-6">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeyhFJooFOCz10CTndiSqR6i5GnxMp2LBcyl5nt5yGdd1bzXA/viewform?embedded=true"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="New Client Enquiry Form"
                  className="rounded-lg"
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
