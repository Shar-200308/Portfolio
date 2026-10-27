import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Lock } from "lucide-react";
import "./Navbar.css";

function Navbar({ onLock }){
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { name: "Home",        path: "/"            },
        { name: "About",       path: "/about"       },
        { name: "Skills",      path: "/skills"      },
        { name: "Projects",    path: "/projects"    },
        { name: "Certificate", path: "/certificate" },
        { name: "Contact",     path: "/contact"     }
    ];

    return(
        <nav className="navbar">
            <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
                Sharan M
            </NavLink>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                {links.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>

            <div className="nav-actions">
                {onLock && (
                    <button className="theme-btn" onClick={onLock} title="Lock / Return to Welcome Screen" aria-label="Return to welcome portal">
                        <Lock size={18}/>
                    </button>
                )}

                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>
        </nav>
    )
}

export default Navbar