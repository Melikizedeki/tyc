import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 md:py-16 px-4 sm:px-6">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-[#2d4256] mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with Tanzanian Youth and Children (TYC). We would love to hear from you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-[#2d4256] mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2d4256]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2d4256]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2d4256]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2d4256]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#2d4256] text-white py-3 rounded-lg hover:bg-[#1f2f3d] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">

          {/* Address */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#2d4256] text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-[#2d4256]">Head Office</h3>
              <p className="text-gray-600">
                Shinyanga District Council<br />
                P.O. Box 1362<br />
                Tanesco Street, Shinyanga, Tanzania
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FontAwesomeIcon icon={faPhone} className="text-[#2d4256] text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-[#2d4256]">Mobile</h3>
              <p className="text-gray-600">
                0756-548 613<br />
                0684-987 213
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#2d4256] text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-[#2d4256]">Email</h3>
              <p className="text-gray-600">
                tynew@gmail.com
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-[#2d4256] text-white py-12 rounded-3xl max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Work Together
        </h2>
        <p className="mb-6">
          Partner with us to empower youth and transform communities.
        </p>
        <button className="bg-white text-[#2d4256] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Become a Partner
        </button>
      </div>

    </div>
  );
}

export default Contact;