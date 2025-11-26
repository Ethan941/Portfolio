import { Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Ethan941",
    label: "@Ethan941",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ethan-pandor-156907334",
    label: "Ethan Pandor",
  },
  {
    name: "Gmail",
    icon: Mail,
    url: "mailto:ethanpandor43@gmail.com",
    label: "ethanpandor43@gmail.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-[#1A1A1A] rounded-3xl p-12 lg:p-20 shadow-xl ring-1 ring-white/5 text-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-1 w-12 bg-[#00A8E8] rounded-full"></div>
                <h2 className="text-[#00A8E8] tracking-wider uppercase text-sm">Get In Touch</h2>
                <div className="h-1 w-12 bg-[#00A8E8] rounded-full"></div>
              </div>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#0F0F0F] rounded-2xl p-8 hover:bg-[#00A8E8]/10 transition-all duration-300 ring-1 ring-white/5 hover:ring-[#00A8E8]/50"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#00A8E8]/10 flex items-center justify-center group-hover:bg-[#00A8E8] transition-all duration-300 group-hover:scale-110">
                      <link.icon className="w-6 h-6 text-[#00A8E8] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <div className="text-white">{link.name}</div>
                      <div className="text-white/50 text-sm">{link.label}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20">
        <p className="text-white/30 text-sm">
          © 2025 Portfolio. All rights reserved.
        </p>
      </div>
    </section>
  );
}