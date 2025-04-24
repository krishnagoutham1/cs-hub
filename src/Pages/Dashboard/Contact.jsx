import ContactImg from "../../assets/contact.png";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-[5%]  bg-[#F6F6F6]">
      <div className="md:w-1/2 flex justify-end py-8">
        <img src={ContactImg} className="w-[90%]" alt="Contact" />
      </div>

      <div className="md:w-1/2 flex justify-end w-full mt-8">
        <div className="w-full md:w-[90%]">
          <button className="bg-[#FBC108] text-[#072F53] font-bold px-5 py-2 rounded-md mb-5">
            Get in Touch with Us ?
          </button>

          <p className="mb-6 text-[#072F53] text-4xl font-bold">
            Call us on our number
          </p>
          <p className="text-[#FBC108] font-bold text-2xl mb-6">9999999999</p>

          <form className="space-y-4">
            <div>
              <label className="block text-[#072F53] font-semibold text-xl mb-3">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-[#072F53] font-semibold text-xl mb-3">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-[#072F53] font-semibold text-xl mb-3">
                Message
              </label>
              <textarea
                className="w-full bg-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className=" bg-[#072F53] text-white font-semibold py-3 mt-4 rounded-lg p-5 text-xl shadow-2xl shadow-gray-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
{
  /* <div className="md:w-1/2 bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Get in Touch with Us
        </h1>
        <p className="text-gray-600 mb-6">Call us on our number</p>
        <p className="text-lg font-semibold text-blue-600 mb-6">9999999999</p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div> */
}
