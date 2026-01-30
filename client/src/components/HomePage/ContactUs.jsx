import { useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";

const ContactUs = ({ isOpen }) => {
  const modalRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      isOpen(false);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center  z-50"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="relative bg-white w-full max-w-md rounded-3xl px-6 py-10 space-y-4"
      >
       
        <div className="absolute top-4 right-4">
          <p
            className="text-2xl font-bold cursor-pointer"
            onClick={() => isOpen(false)}
          >
            <IoCloseSharp />
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-2xl font-semibold">Send Us a Message</h4>
          <p className="text-gray-400 text-sm">
            Got questions? Need to chat with an expert
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button className="bg-gray-100 rounded-xl py-3 cursor-pointer">
            Schedule a Call
          </button>
          <button className="bg-gray-100 rounded-xl py-3 cursor-pointer">
            Send Us a Call
          </button>
          <button className="bg-gray-100 rounded-xl py-3 cursor-pointer">
            Come Visit Us
          </button>
        </div>

        
        <div className="flex justify-center mt-2">
          <p>
            Call Us on <span>4040-3443-2933</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
