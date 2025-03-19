import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-gray-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                AI Stock Price Predictor
              </h3>
              <p className="text-gray-400 mb-4">
                A stock prediction program using historical trends to predict
                future prices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Alpha Vantage API"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-gray-300/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/imnotdeepak/stock-price-prediction"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Seefood</h3>
              <p className="text-gray-400 mb-4">
                A food classification system for raw fruits and vegetables with
                a UI
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Streamlit"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-gray-300/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/imnotdeepak/seefood"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Apple Website Clone</h3>
              <p className="text-gray-400 mb-4">
                A clone of Apple's website when the iPhone 15 models were
                released
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Three.js", "GSAP"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-gray-300/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/imnotdeepak/apple-clone"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-gray-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Self Driving Car</h3>
              <p className="text-gray-400 mb-4">
                Simulated a highway and made a car traverse through traffic
                using a neural network.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-gray-300/10 text-white py-1 px-3 rounded-full text-sm hover:bg-gray-300/20 hover:shadow-[0_2px_8px_rgba(108, 122, 137, 1)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/imnotdeepak/airdrop"
                  className="text-gray-400 hover:text-white transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
