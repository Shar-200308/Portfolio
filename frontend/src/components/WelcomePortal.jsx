import { useState } from "react";
import { ArrowRight, Unlock, Lock, CheckCircle2, ScanFace, Sparkles } from "lucide-react";
import "./WelcomePortal.css";

function WelcomePortal({ onEnter }) {
  const [unlockState, setUnlockState] = useState("idle"); // "idle" | "scanning" | "unlocked"
  const [tiltStyle, setTiltStyle] = useState("");

  const handleMouseMove = (e) => {
    if (unlockState !== "idle") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 16;
    const rotateY = (x / (rect.width / 2)) * 16;
    setTiltStyle(
      `perspective(850px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.08, 1.08, 1.08)`
    );
  };

  const handleMouseLeave = () => {
    setTiltStyle("");
  };

  function handleUnlock() {
    if (unlockState !== "idle") return;
    
    // Step 1: Start 3D biometric scan
    setUnlockState("scanning");

    // Step 2: Recognized & Access Granted
    setTimeout(() => {
      setUnlockState("unlocked");

      // Step 3: Transition smoothly into portfolio
      setTimeout(() => {
        onEnter();
      }, 550);
    }, 450);
  }

  const isUnlocking = unlockState !== "idle";

  return (
    <div className={`welcome-portal ${unlockState === "unlocked" ? "portal-exit" : ""}`}>
      {/* Background ambient light effects */}
      <div className="welcome-portal-bg">
        <div className="welcome-glow-1" />
        <div className="welcome-glow-2" />
        <div className={`welcome-burst-glow ${unlockState === "unlocked" ? "active" : ""}`} />
      </div>

      <div className={`welcome-card ${isUnlocking ? "card-scanning" : ""}`}>
        {/* Dynamic Biometric Access Badge */}
        <div className={`welcome-badge ${unlockState}`}>
          <span className="welcome-badge-dot" />
          <span>
            {unlockState === "idle" && "3D FACE ID ACCESS"}
            {unlockState === "scanning" && "SCANNING 3D BIOMETRICS..."}
            {unlockState === "unlocked" && "ACCESS GRANTED ✓"}
          </span>
        </div>

        {/* Interactive 3D Face Button */}
        <div
          className={`welcome-3d-stage ${unlockState}`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleUnlock}
          style={tiltStyle ? { transform: tiltStyle } : undefined}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleUnlock(); }}
          aria-label="Click 3D face to unlock portfolio"
          title="Click 3D Face to unlock portfolio"
        >
          {/* Dual 3D Pulsing Ripples */}
          <div className="face-3d-ripple face-3d-ripple-1" />
          <div className="face-3d-ripple face-3d-ripple-2" />

          {/* Biometric Corner Brackets Frame */}
          <div className="face-3d-bracket top-left" />
          <div className="face-3d-bracket top-right" />
          <div className="face-3d-bracket bottom-left" />
          <div className="face-3d-bracket bottom-right" />

          {/* Rotating Neon Cyber Ring */}
          <div className="face-3d-ring">
            {/* The Photo */}
            <img
              src="/Sharan M.jpeg"
              alt="Sharan M"
              className="face-3d-img"
            />

            {/* 3D Holographic Biometric Grid Overlay */}
            <div className="face-3d-grid" />

            {/* Sweeping Laser Scan Line */}
            <div className="face-3d-laser" />

            {/* 3D Specular Light Glare */}
            <div className="face-3d-shine" />

            {/* Unlock Status Icon Overlay */}
            <div className={`face-3d-status-overlay ${unlockState}`}>
              {unlockState === "idle" && <ScanFace size={32} className="icon-idle" />}
              {unlockState === "scanning" && <ScanFace size={36} className="icon-scanning" />}
              {unlockState === "unlocked" && <CheckCircle2 size={42} className="icon-success" />}
            </div>
          </div>
        </div>

        <h1 className="welcome-name">Sharan M</h1>
        <p className="welcome-role">Full Stack Developer & Software Engineer</p>

        {/* Enter Button */}
        <button
          type="button"
          className={`welcome-enter-btn ${unlockState}`}
          onClick={handleUnlock}
          disabled={isUnlocking}
        >
          {unlockState === "idle" && (
            <>
              <span>Enter Portfolio</span>
              <ArrowRight size={18} />
            </>
          )}
          {unlockState === "scanning" && (
            <>
              <span>Verifying 3D Face...</span>
              <ScanFace size={18} className="spin-icon" />
            </>
          )}
          {unlockState === "unlocked" && (
            <>
              <span>Access Granted</span>
              <CheckCircle2 size={18} />
            </>
          )}
        </button>

        <p className="welcome-hint">
          {unlockState === "idle"
            ? "Click 3D face to unlock experience"
            : "Decrypting biometric access key..."}
        </p>
      </div>
    </div>
  );
}

export default WelcomePortal;
