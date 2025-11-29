import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
 <section
  id="contact"
  className="py-20 bg-linear-to-b from-[#0a1120] via-[#0f1a2f] to-black text-white 
  border-t border-white/20"
>

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2
          className="text-4xl font-extrabold text-center mb-12 tracking-wide
          text-emerald-400"
        >
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT: CONTACT INFO */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>

            <p className="text-gray-300 leading-relaxed">
              Have questions or want to make a reservation?  
              Feel free to reach out to us anytime.
            </p>

            <div className="flex items-center gap-4 text-gray-300">
              <FiPhone className="text-3xl text-blue-400" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <FiMail className="text-3xl text-pink-400" />
              <span>info@paradiseresort.com</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <FiMapPin className="text-3xl text-green-400" />
              <span>Paradise Hills, Kerala, India</span>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <form className="bg-[#111827] p-8 rounded-xl border border-gray-700 shadow-lg space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:border-pink-400 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:border-blue-400 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-600 text-white focus:border-purple-400 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-linear-to-r from-pink-500 to-blue-500 
              hover:from-pink-600 hover:to-blue-600 transition text-white font-semibold shadow-lg"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
