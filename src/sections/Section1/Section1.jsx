import React from 'react'
import { motion } from "motion/react"
import Socrates from '../../assets/Socrates1.png'
import Laurel from '../../assets/laurel_branch.png'
import './Section1.css'

const Section1 = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      animate(document.documentElement, { scrollTop: section.offsetTop }, { duration: 0.8, easing: "ease-in-out" });
    }
  };

  return (
    <motion.section id='section1' className='section'>
      <motion.div 
        className="section-left" 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} 
        >
        <p className='section-title'>Khởi nguồn của Tư duy Triết học</p>
        <ul className='section-description'>
          <li>
            Triết học Hy Lạp cổ đại, nền tảng của tư tưởng phương Tây.
          </li>
          <li>
            Đặt nền móng cho khoa học, đạo đức và chính trị. 
          </li>
        </ul>
      </motion.div>
      <div className='section-right'>
        <motion.div 
          className="socrates-container"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 1}}  
        >
          <img src={Socrates} alt='Socrates' className='section-image' />
        </motion.div>
      </div>
      <motion.div className='stages'>
          <div>
            <p className='stages-mini-title'>
              Từ thế kỷ VI TCN
            </p>
            <p className='stages-title'>
              Cội nguồn của Minh triết
            </p>
          </div>
          <div className='stages-description-container'>
            <p className='stages-description'>
              Các nhà tư tưởng Hy Lạp đã không ngừng tìm kiếm sự thật về vũ trụ và con người. Với sự kết hợp giữa lý luận và quan sát, họ đã tạo ra những nền tảng triết học bền vững, giúp chúng ta hiểu rõ hơn về bản thân và thế giới xung quanh.
            </p>
          </div>
      </motion.div>
      {/* <img className='laurel' src={Laurel} alt="" /> */}
      <button onClick={() => scrollToSection('section2')} className='scroll-button'>
        {/* Scroll for more */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"/></g></svg>
      </button>
    </motion.section>
  )
}

export default Section1