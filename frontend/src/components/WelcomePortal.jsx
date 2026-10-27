import { useState } from "react";
import { ArrowRight, Unlock, Sparkles } from "lucide-react";
import "./WelcomePortal.css";

function WelcomePortal({ onEnter }) {
  const [isUnlocking, setIsUnlocking] = useState(false);

  function handleUnlock() {
    if (isUnlocking) return;
    setIsUnlocking(true);
    // Smooth transition delay before revealing portfolio
    setTimeout(() => {
      onEnter();
    }, 550);
  }

  return (
    <div className={`welcome-portal ${isUnlocking ? "unlocking" : ""}`}>
      {/* Background ambient light effects */}
      <div className="welcome-portal-bg">
        <div className="welcome-glow-1" />
        <div className="welcome-glow-2" />
      </div>

      <div className="welcome-card">
        <div className="welcome-badge">
          <span className="welcome-badge-dot" />
          <span>PORTFOLIO ACCESS</span>
        </div>

        {/* Clickable Profile Photo */}
        <button
          type="button"
          className="welcome-avatar-btn"
          onClick={handleUnlock}
          aria-label="Click to unlock portfolio"
          title="Click my photo to enter portfolio"
        >
          <div className="welcome-avatar-ripple" />
          <div className="welcome-avatar-ring">
            <img
              src="/Sharan M.jpeg"
              alt="Sharan M"
              className="welcome-avatar-img"
            />
            <div className="welcome-avatar-overlay">
              <Unlock size={28} />
            </div>
          </div>
        </button>

        <h1 className="welcome-name">Sharan M</h1>
        <p className="welcome-role">Full Stack Developer & Software Engineer</p>

        {/* Enter Button */}
        <button
          type="button"
          className="welcome-enter-btn"
          onClick={handleUnlock}
        >
          <span>Enter Portfolio</span>
          <ArrowRight size={18} />
        </button>

        <p className="welcome-hint">
          Click photo or button to unlock experience
        </p>
      </div>
    </div>
  );
}

export default WelcomePortal;
