import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import "./Home.css";

function Home(){
    return(
        <section id="home" className="home">
            <div className="home-container">
                <div className="home-img-wrapper">
                    <img src="/Sharan M.jpeg" alt="Sharan M" />
                </div>

                <div className="home-content">
                    <p className="home-tag">Hello, I'm</p>
                    <h1>Sharan M</h1>
                    <h2>Full Stack Developer & Software Engineer</h2>

                    <div className="home-buttons">
                        <Link to="/projects" className="btn primary">
                            Explore my work <ArrowRight size={18}/>
                        </Link>
                        <a href="/Sharan M Resume.pdf" target="_blank" rel="noreferrer" className="secondary-btn">
                            View Resume <Eye size={18}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home