import { User, Search, Database, BarChart3, Wrench } from 'lucide-react';
import dashboardImage from 'figma:asset/c842157409cbd900eaf6a56108df249d620c0564.png';

export function About() {
  const dataTools = ['Python', 'Pandas', 'LSB', 'Power BI'];
  const statisticsML = ['Exploratory Data Analysis', 'Machine Learning'];
  const devOpsTools = ['Docker', 'Git', 'GitHub'];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Dashboard Container */}
        <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="flex min-h-[700px]">
            {/* Sidebar - Skills */}
            <div className="w-80 bg-[#000000] border-r border-white/10 p-6 space-y-8">
              {/* Data Tools */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-5 h-5 text-[#00A8E8]" />
                  <h3 className="text-white">Data Tools</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {dataTools.map((tool, idx) => (
                    <div key={idx} className="bg-[#0A0A0A] px-4 py-3 rounded border border-white/20 text-white/90 text-center">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics & ML */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-[#00A8E8]" />
                  <h3 className="text-white">Statistics & ML</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {statisticsML.map((skill, idx) => (
                    <div key={idx} className="bg-[#0A0A0A] px-4 py-3 rounded border border-white/20 text-white/90 text-center">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* DevOps & Tools */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-[#00A8E8]" />
                  <h3 className="text-white">DevOps & Tools</h3>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {devOpsTools.map((tool, idx) => (
                    <div key={idx} className="bg-[#0A0A0A] px-4 py-3 rounded border border-white/20 text-white/90 text-center">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-[#000000]">
              {/* Top Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#0F0F0F] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white/70 text-sm placeholder:text-white/40 focus:outline-none focus:border-[#00A8E8]/50"
                  />
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <span>Ethan Pandor</span>
                  <div className="w-8 h-8 bg-[#00A8E8] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="space-y-6 max-w-3xl">
                  {/* Code snippet */}
                  <div className="bg-[#0A0A0A] rounded-lg p-6 border border-white/10 font-mono text-sm">
                    <div className="text-white/50">
                      <span className="text-[#00A8E8]">const</span>{' '}
                      <span className="text-white">aboutMe</span> ={' '}
                      <span className="text-white">0 0</span>{' '}
                      <span className="text-white/70">=&gt;</span>
                    </div>
                    <div className="ml-4 text-white/50">
                      <span className="text-[#00A8E8]">return</span>{' '}
                      <span className="text-[#F97583]">"Passionate student with</span>
                    </div>
                    <div className="ml-8 text-[#F97583]">
                      expertise in data analysis & visualization."
                    </div>
                    <div className="text-white/70">);</div>
                  </div>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed">
                    I am Ethan Pandor, Data & AI Bachelor's student at HETIC seeking for a Data Analyst apprenticeship from 2025.
                  </p>

                  {/* Dashboard Image */}
                  <div className="relative">
                    <div className="bg-[#0F0F0F] rounded-lg overflow-hidden border border-white/10">
                      {/* MacOS style window header */}
                      <div className="bg-[#000000] px-4 py-2 flex items-center gap-2 border-b border-white/10">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                        </div>
                        <span className="text-white/50 text-xs ml-2">workspace.py</span>
                      </div>
                      {/* Dashboard image */}
                      <div className="p-3">
                        <img
                          src={dashboardImage}
                          alt="Data Analytics Dashboard"
                          className="w-full h-auto rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}