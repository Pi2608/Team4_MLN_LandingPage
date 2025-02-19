import React, { useState, useRef, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [focusHeader, setFocusHeader] = useState("1");
  const focusRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (focusRef.current) {
      setSize({
        width: focusRef.current.offsetWidth,
        height: focusRef.current.offsetHeight
      });
    }
  }, [focusHeader]);

  const handleTagClick = (value) => {
    setFocusHeader(value);

    const sectionIds = {
      "1": "section1",
      "2": "section2",
      "3": "section3",
      "4": "section4",
      "5": "section5",
      "6": "section6",
    };

    const section = document.getElementById(sectionIds[value]);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="header">
      <div className="tag-containers">
        {["1", "2", "3", "4", "5", "6"].map((value, index) => (
          <div
            key={index}
            ref={focusHeader === value ? focusRef : null} // Gán ref cho phần tử focus
            className={`tag-container ${focusHeader === value ? "focusHeader" : ""}`}
            onClick={() => handleTagClick(value)}
          >
            <p>{["Introduction", "Pre-Socratic", "Socratic", "Post-Socratic", "Summary", "Role"][index]}</p>
          </div>
        ))}
        <div className={`border-tag item${focusHeader}`}
          style={{ width: size.width, height: size.height }}>
        </div>
      </div>
    </div>
  );
}

export default Header