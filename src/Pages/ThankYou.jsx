import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ThankYouPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#030014]">
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-[#6366f1] drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Thank You!
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Thanks for reaching out! Your message has been received — I will get back to you shortly.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
