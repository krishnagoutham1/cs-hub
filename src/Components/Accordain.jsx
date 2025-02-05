import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({ showEnd = true }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-[10%] mb-5">
      <div className="flex justify-between">
        <div className="text-[#072F53] text-2xl">My Question</div>
        <div onClick={() => setOpen(!open)} className="text-3xl cursor-pointer">
          {open ? "−" : "+"}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-2">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa.
        </div>
      </div>
      {showEnd && <hr className="border border-gray-100 mt-6" />}
    </div>
  );
};

Accordion.propTypes = {
  showEnd: PropTypes.bool,
};

export default Accordion;
