import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageProgressBar.css";

function PageProgressBar() {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [location.pathname]);

  return (
    <div key={key} className="top-progress-bar">
      <div className="top-progress-indicator" />
    </div>
  );
}

export default PageProgressBar;
