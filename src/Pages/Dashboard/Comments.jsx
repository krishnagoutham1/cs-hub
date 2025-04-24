import Avaart1 from "../../assets/avatar1.jpeg";
import Avaart2 from "../../assets/avatar2.jpeg";
import Avaart3 from "../../assets/avatar3.jpeg";

const testimonials = [
  {
    name: "Hannah Schmitt",
    role: "Lead Designer",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
    image: Avaart1,
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    message:
      "Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    image: Avaart2,
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    message: "Faucibus venenatis felis id augue sit cursus pellentesque enim.",
    image: Avaart3,
  },
];

const TestimonialCards = () => {
  return (
    <div className="bg-white pt-12">
      <h2 className="text-center text-3xl font-bold mb-8">
        What Our Students Say
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 w-80 relative"
          >
            <div className="absolute w-full h-full -z-10 bg-yellow-400 rounded-2xl rotate-2 translate-y-2 translate-x-2"></div>
            <div className="text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-26 h-26 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-sm text-gray-700 mt-4 italic">
                {testimonial.message}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center bg-[#072F53] px-[5%] py-3">
        <div className="text-white font-bold text-xl">
          Add Valueable Feedback
        </div>
        <button className="bg-[#FBC108] text-[#072F53] font-semibold px-3 py-1 rounded-full">
          Add Feedback
        </button>
      </div>
    </div>
  );
};

export default TestimonialCards;
