import React from 'react'
import './Header.css'

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      animate(document.documentElement, { scrollTop: section.offsetTop }, { duration: 0.8, easing: "ease-in-out" });
    }
  };

  return (
    <header id='header'>
      <nav>
        <ul>
          <li onClick={() => scrollToSection('section1')}>Section 1</li>
          <li onClick={() => scrollToSection('section2')}>Tiền Socrates</li>
          <li onClick={() => scrollToSection('section3')}>Socrates</li>
          <li onClick={() => scrollToSection('section4')}>Hậu Socrates</li>
          <li onClick={() => scrollToSection('section5')}>Tương Quan</li>
          <li onClick={() => scrollToSection('section6')}>Tổng Kết</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header