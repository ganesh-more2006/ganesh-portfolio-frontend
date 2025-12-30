import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { FaReact, FaNodeJs, FaHtml5, FaGithub, FaDatabase, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiJavascript, SiExpress, SiGmail } from 'react-icons/si';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("System: Starting data fetch from MongoDB...");
        const response = await axios.get('ganesh-more-portfolio-production.up.railway.app');
        setProjects(response.data);
        setLoading(false);
        console.log("System: Successfully retrieved projects:", response.data.length);
      } catch (error) {
        console.error("System Error: Failed to connect to backend API:", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans selection:bg-blue-500">
      <Navbar />
      
      {/* IMPROVED HERO SECTION - Side-by-Side Layout */}
      <header className="max-w-7xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Large Profile Photo */}
        <div className="md:w-1/3 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/20 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://i.ibb.co/hF3g0GpY/ganu-crop-photo.jpg"
              alt="Ganesh's Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Hero Text */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            GANESH <span className="text-blue-500">DEV</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
            Full-Stack Engineering with <span className="text-white border-b-2 border-blue-500">MERN Stack</span>. 
            I turn complex ideas into high-performance web applications.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
             <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-bold transition-all">My Work</a>
             <a href="#contact" className="border border-gray-700 hover:bg-gray-800 px-8 py-3 rounded-xl font-bold transition-all">Contact Me</a>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-7xl mx-auto py-32 px-6 border-t border-gray-800">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <span className="h-1 w-12 bg-blue-500"></span> About Me
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I am a results-driven Full-Stack Developer based in India. I specialize in building 
              scalable and user-centric web applications. My expertise lies in the MERN stack 
              (MongoDB, Express, React, and Node.js).
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm font-bold">
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">📍 India Based</div>
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">💼 Available for Projects</div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gray-800/20 p-10 rounded-3xl border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-10 text-center text-blue-400">Technical Arsenal</h3>
            <div className="grid grid-cols-4 gap-8">
              {[
                { icon: <FaReact className="text-blue-400" />, name: "React" },
                { icon: <FaNodeJs className="text-green-500" />, name: "Node" },
                { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
                { icon: <SiExpress className="text-gray-400" />, name: "Express" },
                { icon: <SiJavascript className="text-yellow-400" />, name: "JS" },
                { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind" },
                { icon: <FaGithub className="text-white" />, name: "Git" },
                { icon: <FaDatabase className="text-purple-500" />, name: "SQL" }
              ].map((skill, index) => (
                <div key={index} className="flex flex-col items-center group cursor-pointer">
                  <div className="text-4xl group-hover:scale-125 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] mt-2 text-gray-500 tracking-widest uppercase">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <main id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard 
            title="Mini Udemy" 
            desc="LMS platform for video streaming and course management." 
            tech={["React", "Express", "Node"]} 
            details="Includes secure user authentication, video progress tracking, payment gateway integration, and a dedicated instructor dashboard to manage courses."
          />
          <ProjectCard 
            title="Expense Tracker" 
            desc="Dashboard for visualizing personal finance and monthly budgets." 
            tech={["Chart.js", "MongoDB", "Auth"]} 
            details="Features real-time data visualization using Chart.js, expense categorization, monthly spending limits, and PDF report generation for users."
          />

          {projects.map((project) => (
            <ProjectCard 
              key={project._id}
              title={project.title}
              desc={project.description}
              tech={project.techStack}
              details="Project fetched from MongoDB database. Full source code is available in the repository."
              github={project.githubLink}
              live={project.liveLink}
              isDynamic={true}
            />
          ))}
        </div>
      </main>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-gray-800/10 border-t border-gray-800">
        <Contact />
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <p>© {new Date().getFullYear()} GANESH DEV. All rights reserved.</p>

          <div className="flex flex-col items-start gap-2">
            <a href="tel:+918551976774" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <FaPhoneAlt className="text-blue-500" /> +91 8551976774
            </a>
            <a href="mailto:moreganesh855197@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <SiGmail className="text-red-500" /> moreganesh855197@gmail.com
            </a>
          </div>

          <div className="flex gap-6 text-2xl">
            <a href="https://github.com/GaneshMore" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaGithub /></a>
            <a href="https://linkedin.com/in/ganesh-more" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors"><FaLinkedin /></a>
            <a href="https://instagram.com/ganesh_more" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const ProjectCard = ({title, desc, tech, details, github, live, isDynamic}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group flex flex-col h-full">
      <div className="h-2 w-10 bg-blue-500 mb-6 rounded-full"></div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {tech.map((t, i) => (
          <span key={i} className="text-[10px] bg-gray-700 text-gray-300 px-3 py-1 rounded-full">{t}</span>
        ))}
      </div>

      <div className="mt-auto">
        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="text-xs font-bold text-blue-400 hover:tracking-widest transition-all mb-4"
        >
          {showDetails ? "HIDE DETAILS ↑" : "PROJECT DETAILS →"}
        </button>

        {showDetails && (
          <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700 mb-4">
             <p className="text-gray-400 text-xs leading-relaxed italic">{details}</p>
          </div>
        )}

        {isDynamic && (
          <div className="flex gap-4 border-t border-gray-700 pt-4">
            <a href={github} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 bg-gray-700 rounded-lg text-xs font-bold hover:bg-gray-600">Source</a>
            <a href={live} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 bg-blue-600 rounded-lg text-xs font-bold hover:bg-blue-500">Live</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;