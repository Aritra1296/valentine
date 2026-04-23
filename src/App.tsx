import { useState } from "react";
import "./App.css";

function App() {
  const [noHovered, setNoHovered] = useState(false);

  const name = "Alex"; // Change this to your valentine's name

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-200 to-pink-300">
      <div className="bg-white rounded-3xl shadow-2xl p-12 w-full max-w-md text-center">
        {/* Cute Cat Head */}
        <div className="text-7xl mb-6">🐱❤️</div>

        {/* Text */}
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          {name} will you be my valentine?
        </h1>

        {/* Buttons */}
        <div className="flex gap-6 justify-center mb-6">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-3 rounded-full font-bold text-lg transition transform hover:scale-110 shadow-lg">
            Yes
          </button>
          <button
            onMouseEnter={() => setNoHovered(true)}
            onMouseLeave={() => setNoHovered(false)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-10 py-3 rounded-full font-bold text-lg transition"
          >
            No
          </button>
        </div>

        {/* Shy Message */}
        {noHovered && (
          <p className="text-gray-600 text-sm italic">
            "No" seems a bit shy 💔
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
