import Accordain from "../../Components/Accordain";

const Faq = () => {
  return (
    <div>
      <div className="text-center">
        <div className="bg-[#072F53] p-3 text-3xl font-bold text-white mb-5">
          <h1>Frequently asked questions</h1>
        </div>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className="pb-8">
        <Accordain />
        <Accordain />
        <Accordain />
        <Accordain showEnd={false} />
      </div>
    </div>
  );
};

export default Faq;
