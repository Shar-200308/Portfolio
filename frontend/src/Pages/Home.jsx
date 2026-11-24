import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import "./Home.css";

function Home(){
    const [tiltStyle, setTiltStyle] = useState("");

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = -(y / (rect.height / 2)) * 14;
        const rotateY = (x / (rect.width / 2)) * 14;
        setTiltStyle(`perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.06, 1.06, 1.06)`);
    };

    const handleMouseLeave = () => {
        setTiltStyle("");
    };

    return(
        <section id="home" className="home">
            <div className="home-container">
                <div className="home-content">
                    <p className="home-tag">Hello, I'm</p>
                    <h1>Sharan M</h1>

                    {/* 3D Animated Profile Photo */}
                    <div className="home-img-wrapper">
                        <div
                            className="photo-3d-card"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={tiltStyle ? { transform: tiltStyle } : undefined}
                            title="Interactive 3D Photo"
                        >
                            <div className="photo-3d-ripple" />
                            <div className="photo-3d-ring">
                                <img
                                    src="/Sharan M.jpeg"
                                    alt="Sharan M"
                                    className="home-profile-img"
                                />
                                <div className="photo-3d-shine" />
                            </div>
                        </div>
                    </div>

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