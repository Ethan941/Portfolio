import { ChevronDown } from "lucide-react";
import profileImage from "figma:asset/a9fbaf537cb76e275ba741c078dbc53b9c64610c.png";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left side - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-white text-6xl lg:text-7xl tracking-tight">
                Explore my portfolio
              </h1>
              <p className="text-white/70 text-xl max-w-md">
                Welcome to my creative space — scroll down to discover my work.
              </p>
            </div>
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center gap-2 bg-[#00A8E8] text-white px-8 py-4 rounded-lg hover:bg-[#0090c7] transition-all duration-300 shadow-lg shadow-[#00A8E8]/20 hover:shadow-[#00A8E8]/40"
            >
              View My Work
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00A8E8]/20 blur-3xl rounded-full"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}