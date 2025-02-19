import React, { useState, useRef, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [focusHeader, setFocusHeader] = useState("1");
  const focusRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const handleTagClick = (value) => {
    setFocusHeader(value);
  };

  useEffect(() => {
    if (focusRef.current) {
      setSize({
        width: focusRef.current.offsetWidth,
        height: focusRef.current.offsetHeight
      });
    }
  }, [focusHeader]);

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