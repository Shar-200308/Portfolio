import { useState } from "react";
import { ExternalLink, Code2, Sparkles, FolderGit2 } from "lucide-react";
import "./projects.css";

// Feather / Lucide styled GitHub SVG icon
function GithubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const projectsData = [
  {
    id: 1,
    title: "ZENBOT AI ASSISTANT",
    category: "Gen AI & Python",
    description:"ZenBot is an intelligent, end-to-end recruitment automation platform designed for modern campus placement drives and talent acquisition. Built with Django, Google Gemini AI, LangChain, and Firebase, ZenBot bridges the gap between candidates and recruiters by automating candidate inquiries, resume parsing, ATS scoring, role recommendations, and HR pipeline management.",
    technologies: ["LangChain","LLM","Html","Css","Js", "Django", "Python", "SQLite", "REST API"],
    github: "https://github.com/Shar-200308/Zenbot-Ai-Assistant",
    liveDemo: "#",
    featured: true
  },
  {
    id: 2,
    title: "WALFO",
    category: "Python Django & Angular",
    description:"Walfo is a full-stack web application that lets students **securely store, manage, and access academic documents** with **OTP-based email authentication** and **facial recognition** as an additional security layer. Documents are stored on **Cloudinary** and served through a responsive Angular frontend.",
    technologies: ["Python","Django","Angular","supabase"],
    github: "https://github.com/Mariyajebastin/Walfo-F",
    liveDemo: "#",
    featured: true
  },

];

const categories = ["All", "Python", "Django / Python", "Gen AI"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => {
          const cat = activeCategory.toLowerCase();
          const pCat = p.category.toLowerCase();
          const techList = p.technologies.map((t) => t.toLowerCase());

          if (cat === "python") {
            return pCat.includes("python") || techList.includes("python");
          }
          if (cat.includes("django")) {
            return pCat.includes("django") || techList.includes("django");
          }
          if (cat.includes("gen ai") || cat === "ai") {
            return (
              pCat.includes("gen ai") ||
              pCat.includes("ai") ||
              techList.some((t) =>
                ["ai", "llm", "langchain", "gemini"].some((k) => t.includes(k))
              )
            );
          }
          return pCat.includes(cat) || techList.some((t) => t.includes(cat));
        });

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <p className="projects-label">MY RECENT WORK</p>
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p>
            A showcase of full-stack web applications, machine learning tools,
            and software solutions I've developed.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length === 0 ? (
            <div className="no-projects-found">
              <Code2 size={40} />
              <p>No projects found in this category yet.</p>
            </div>
          ) : (
            filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-header">
                <div className="project-card-icon">
                  <FolderGit2 size={24} />
                </div>
                <div className="project-badges">
                  {project.featured && (
                    <span className="featured-badge">
                      <Sparkles size={12} /> Featured
                    </span>
                  )}
                  <span className="category-badge">{project.category}</span>
                </div>
              </div>

              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-card-footer">
                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span className="tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <GithubIcon />
                    <span>Code</span>
                  </a>

                  {project.liveDemo && project.liveDemo !== "#" && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          )))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
