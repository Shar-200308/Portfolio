import { GraduationCap, Code2, Lightbulb } from "lucide-react";
import "./about.css";

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-heading">
                    <p className="about-label">
                        GET TO KNOW ME
                    </p>
                    <h2>About <span>Me</span></h2>
                </div>
            </div>
            <div className="about-content">
                <div className="about-description">
                    <p>
                        Aspiring Software Engineer with a solid foundation in front-end and back-end
                        technologies, specifically Python, React, and Django. Passionate about creating
                        responsive web applications, solving complex problems, and collaborating
                        effectively to deliver innovative, high-quality digital solutions.
                    </p>
                </div>

                <div className="about-cards">
                    <div className="about-card">
                        <div className="card-icon">
                            <Code2 size={24} />
                        </div>
                        <h3>Full Stack Dev</h3>
                        <p>Crafting robust, responsive applications with React, Python, and Django.</p>
                    </div>

                    <div className="about-card">
                        <div className="card-icon">
                            <GraduationCap size={24} />
                        </div>
                        <h3>Strong Foundation</h3>
                        <p>Solid principles in software engineering, modern architecture, and clean code.</p>
                    </div>

                    <div className="about-card">
                        <div className="card-icon">
                            <Lightbulb size={24} />
                        </div>
                        <h3>Problem Solver</h3>
                        <p>Analytical mindset focused on delivering practical, scalable, and innovative solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;