import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike Arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="View Details" />
      </div>
    </section>
  );
};

export default SuperQuality;
