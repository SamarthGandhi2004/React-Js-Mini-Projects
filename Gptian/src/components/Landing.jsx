import React from "react";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 text-center px-6">
      {/* Logo / Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm">
        GPT<span className="text-blue-600">ian</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl">
        Your personal AI assistant – ready to chat, answer, and explore ideas with you.
      </p>

      {/* Call to Action */}
      <button className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-2xl shadow-md hover:bg-blue-700 transition-all duration-300">
        🚀 Start Chatting
      </button>

      {/* Footer Note */}
      <p className="absolute bottom-6 text-sm text-gray-400">
        ⚡ Powered by React & Tailwind
      </p>
    </div>
  );
};

export default Landing;
