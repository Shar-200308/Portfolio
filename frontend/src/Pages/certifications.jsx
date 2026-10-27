import { ExternalLink, Award, FileText } from "lucide-react";
import "./certifications.css";

const certificationsData = [
  {
    id: 1,
    title: "Python for Data Science",
    provider: "Nptel",
    year: "2025",
    link: "/certifications/Python for Data Science.pdf"
  },
  {
    id:2,
    title:"Core Java",
    provider:"Udemy",
    year:"2026",
    link:"/certifications/core java.pdf"
  },
  {
    id:3,
    title:"git",
    provider:"Udemy",
    year:"2026",
    link:"/certifications/Git.pdf"
  },
  {
    id:4,
    title:"JavaScript",
    provider:"Udemy",
    year:"2026",
    link:"/certifications/JavaScript.pdf"
  },
  {
    id:5,
    title:"Mongdb",
    provider:"Udemy",
    year:"2026",
    link:"/certifications/Mongodb.pdf"
  },
  {
    id:6,
    title:"MachineLearning",
    provider:"Udemy",
    year:"2026",
    link:"/certifications/Machine Learning.pdf"
  }
];

function Certifications() {
  return (
    <section id="certificate" className="certifications">
      <div className="certification-container">
        <div className="certification-heading">
          <p className="certification-label">MY ACHIEVEMENTS</p>
          <h2><span>Certifications</span></h2>
        </div>

        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <article className="cert-card" key={cert.id}>
              <div className="cert-card-top">
                <div className="cert-icon">
                  <Award size={26} />
                </div>
                <span className="cert-year">{cert.year}</span>
              </div>

              <h3>{cert.title}</h3>
              <p className="cert-provider">{cert.provider}</p>

              <div className="cert-card-footer">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-view-link"
                >
                  <FileText size={17} />
                  View Certificate
                  <ExternalLink size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;