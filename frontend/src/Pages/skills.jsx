
import "devicon/devicon.min.css";
import "./Skills.css";

const skills = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Django", icon: "devicon-django-plain" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "SQLite", icon: "devicon-sqlite-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  ,
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <p>MY TECHNOLOGIES</p>
          <h2>Technical <span>Skills</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <i
                className={skill.icon}
                aria-hidden="true"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
