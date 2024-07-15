import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services & Pricing - Jaxun dog core</title>
        <meta
          name="description"
          content="Sevices and pricing of dog walking and pet sitting. Explaination of what happens for each service with pricing underneath."
        />
        <meta
          name="keywords"
          content="Dog walking, pet sitting, pricing, services, solo walk, group walk, puppy, day care, overnight "
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Services & Pricing - Jaxun dog care"
        />
        <meta
          property="og:description"
          content="Sevices and pricing of dog walking and pet sitting. Explaination of what happens for each service with pricing underneath."
        />
        <meta property="og:image" content="/public/images/walks.png" />
        <meta property="og:url" content="http://www.yourwebsite.com/about" />
        <link rel="canonical" href="http://www.yourwebsite.com/about" />
      </Helmet>
      <div className="flex justify-evenly mt-9 text-center">
        <div className="">
          <h1 className="mb-5 font-bold primary-text text-xl decoration-solid">
            Dog Walking
          </h1>
          <img
            className="w-96 rounded-full"
            src="/public/images/walks.png"
            alt="Dog walking. Dogs walking in the park on leads"
          />
          <p className="mt-3 mb-8 px-5 w-96">
            My small <span className="accent-text">pack walks of 4</span> ensure
            your dog enjoys a safe, fun, and engaging environment. We focus on
            providing the right amount of exercise and social interaction. For
            more personalised care, our
            <span className="accent-text"> individual walks</span> cater to your
            dog's specific needs, including gentle and{" "}
            <span className="accent-text">supportive puppy walks </span>
            that help build confidence and explore the world safely.
          </p>
          <p className="mt-3 mb-8 px-5 w-96">
            <span className="font-bold">Group Walks 1hr+:</span> £17 + 10 for
            dog in same home
            <br />
            <span className="font-bold">Solo Walks 1hr+:</span> £24
            <br />
            <span className="font-bold">Puppy Walks up to an hour:</span> £15
            p/h (time walking dependent on age the rest play and training)
          </p>
        </div>
        <div>
          <h1 className="mb-5 font-bold primary-text text-xl">Dog Sitting</h1>
          <img
            className="w-96 rounded-full"
            src="/public/images/sleeping.png"
            alt="Dog sitting. Dog sleeping on sofa"
          />
          <p className="mt-3 mb-8 px-5 w-96">
            My dog sitting services provides a{" "}
            <span className="accent-text">comfortable</span> and{" "}
            <span className="primary-text">loving</span> environment for your
            pet while you're away. I offer in-home pet sitting to maintain your
            pet's routine and comfort. From feeding and playtime to cuddles and
            walks, we ensure your pet feels happy and secure until you return.
          </p>
          <p className="mt-14 mb-8 px-5 w-96">
            <span className="font-bold">Full Day Care with two walks:</span> £35
            per day
            <br />
            <span className="font-bold">
              Half Day Care one walk and play:
            </span>{" "}
            £24 per half day
            <br />
            <span className="font-bold">Overnight 8am - 8am:</span> £60
            <br />
            <span className="font-bold">Drop ins</span> £10
          </p>
        </div>
      </div>
    </>
  );
};
export default Services;
