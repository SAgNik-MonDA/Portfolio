import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_s3ubxsp",  // Replace with your EmailJS Service ID
  //       "template_ae65p85",  // Replace with your EmailJS Template ID
  //       form.current,
  //       "JImQB6OW9TYzvaADz"  // Replace with your EmailJS Public Key
  //     )
  //     .then(
  //       () => {
  //         setIsSent(true);
  //         form.current.reset(); // Reset form fields after sending
  //         toast.success("Message sent successfully! ✅", {
  //           position: "top-right",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           theme: "dark",
  //         });
  //       },
  //       (error) => {
  //         console.error("Error sending message:", error);
  //          form.current.reset(); // Reset form fields after sending
  //         toast.error("Failed to send message. Please try again.", {
  //           position: "top-right",
  //           autoClose: 3000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           theme: "dark",
  //         });
  //       }
  //     );
  // };



  const sendEmail = (e) => {
  e.preventDefault();

  // 1️⃣ Send email to YOU
  emailjs
    .sendForm(
      "service_s3ubxsp",
      "template_ae65p85",
      form.current,
      "JImQB6OW9TYzvaADz"
    )
    .then(() => {

      // 2️⃣ AUTO-REPLY to USER
      return emailjs.sendForm(
        "service_s3ubxsp",
        "template_twqz1a4", // 👈 Auto-reply template ID
        form.current,
        "JImQB6OW9TYzvaADz"
      );

    })
    .then(() => {
      form.current.reset();
      toast.success("Message sent successfully! ✅", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    })
    .catch((error) => {
      console.error("Email error:", error);
      toast.error("Failed to send message ❌", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    });
};

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-skills-gradient"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg  border border-[rgb(78,209,156)] shadow-[0_0_20px_5px_rgba(78,209,156,0.3)]">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:  focus:border-[rgb(78,209,156)]"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[rgb(78,209,156)]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[rgb(78,209,156)]"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-[rgb(78,209,156)]"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-3 text-base sm:text-lg font-semibold rounded-full transition-transform hover:scale-105 "
              style={{
                background: "linear-gradient(90deg,#8245ec,#4ed19c)",
                boxShadow: "0 6px 18px rgba(130,69,236,0.18)",
                color: "white",
              }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;


