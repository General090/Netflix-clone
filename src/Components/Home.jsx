import { useState } from "react";
import NetflixLogo from '../Assets/netflix-logo.svg';
import { SlArrowRight } from "react-icons/sl";

const Home = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Validate email dynamically while typing
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate email on every keystroke
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (newEmail && !emailRegex.test(newEmail)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  return (
    <section className="home-image">
      <header className="flex items-center pt-5 px-40">
        <div>
          <img src={NetflixLogo} alt="Netflix Logo" className="w-44 fill-red-600" />
        </div>

        <button className="ml-auto bg-red-600 text-white text-sm px-4 py-2 rounded font-netflix hover:bg-red-800 transition duration-500">
          Sign in
        </button>
      </header>

      <div className="text-white text-center mt-32 font-netflix">
        <h1 className="font-bold netflix-size">Unlimited movies, TV </h1>
        <h1 className="font-bold netflix-size">shows, and more</h1>
        <h3 className="text-xl font-bold mb-10">Starts at ₦2,200. Cancel anytime.</h3>
        <h4 className="mb-5">Ready to watch? Enter your email to create or restart your membership.</h4>

        <div className="flex justify-center gap-3">
          <div className="relative w-full max-w-sm">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange} // Validate while typing
              className={`w-full px-4 py-4 border ${
                error ? "border-red-500" : "border-gray-500"
              } rounded bg-transparent text-white placeholder-transparent focus:outline-none focus:ring-2 ${
                error ? "focus:ring-red-500" : "focus:ring-white"
              }`}
              placeholder="Email address"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(email !== "")}
            />
            <label
              htmlFor="email"
              className={`absolute left-4 text-gray-400 text-sm mb-5 transition-all ${
                isFocused || email ? "top-1 text-xs text-white" : "top-4 text-base"
              }`}
            >
              Email address
            </label>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="bg-red-600 px-10 text-white py-4 rounded font-bold flex items-center gap-2 hover:bg-red-800 transition duration-500"
          >
            Get Started
            <SlArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
