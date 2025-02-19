import React, { useState } from 'react'
import './Section5.css'
import { useEffect } from "react";
import { motion } from "motion/react";

const Section5 = () => {
  const [focusItem, setFocusItem] = useState(1)
  const handleFocusItem = (index) => {
    const focusblock = document.querySelector(`.focus`)
    if (focusblock) {
      focusblock.classList.remove("focus")
    }
    const addFocus = document.querySelector(`.bottom-container .item${index}`)
    if (addFocus) {
      addFocus.classList.add("focus")
    }
  }
  useEffect(() => {
    handleFocusItem(focusItem)
  }, [focusItem])

  const handleFocusClick = (index) => {
    setFocusItem(index)
  }

  return (
    <section id='section5'>
      <motion.div className="top"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        <div className="title-button">
          <div className='title-conatainer'>
            <p className="title">Tóm Tắt Giai Đoạn Triết Học Hy Lạp</p>
          </div>
          <div className="btns">
            <div className="icon-btns">
              <button className="icon-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12" /><path fill="currentColor" d="M15 8h2v11h-2zm1 14a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22" /></svg>
              </button>
              <button className="icon-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-width="1"><path d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z" /><path d="M11 8L6.5 5v6z" /></g></svg>
              </button>
            </div>
            <button className='appointment'>MAKE AN APPOINTTMENT</button>
          </div>
        </div>
        <p className='mini-title'>Triết học Hy Lạp tiến từ duy vật <span>Tiền Socrates</span>, biện chứng Socrates, hệ thống Plato-Aristotle <span>đến các trường phái Hậu Socrates.</span></p>
      </motion.div>
      <motion.div className="bottom"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
      >
        <div className="bottom-container">
          <div className="block item1">
            <div className="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" stroke="currentColor" stroke-width="4" d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z" /></svg>
            </div>
            <p className='description' onClick={() => { handleFocusClick(1) }}>Triết gia Miletus lý giải vũ trụ bằng tự nhiên, Pythagoras phát triển số học và linh hồn.</p>
          </div>
          <div className="block item2">
            <div className="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" stroke="currentColor" stroke-width="4" d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z" /></svg>
            </div>
            <p className='description' onClick={() => { handleFocusClick(2) }}>Heraclitus nói vạn vật biến đổi, Parmenides đề cao bất biến, Empedocles đưa thuyết bốn nguyên tố.</p>
          </div>
          <div className="block item3">
            <div className="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" stroke="currentColor" stroke-width="4" d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z" /></svg>
            </div>
            <p className='description' onClick={() => { handleFocusClick(3) }}>Socrates dùng biện chứng, bị xử tử năm 399 TCN, ảnh hưởng lớn đến Plato và triết học sau.</p>
          </div>
          <div className="block item4">
            <div className="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" stroke="currentColor" stroke-width="4" d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z" /></svg>
            </div>
            <p className='description' onClick={() => { handleFocusClick(4) }}>Plato lập Học viện Athens, xây dựng thuyết ý niệm và nhà nước lý tưởng trong Cộng hòa.</p>
          </div>
          <div className="block item5">
            <div className="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" stroke="currentColor" stroke-width="4" d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z" /></svg>
            </div>
            <p className='description' onClick={() => { handleFocusClick(5) }}>Aristotle bác bỏ ý niệm, chú trọng khoa học, logic, đạo đức, lập Lyceum và ảnh hưởng sâu rộng.</p>
          </div>
          <div className="block item6">
            <div className="svg-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="currentColor" stroke="currentColor" stroke-width="4" d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z" /></svg>
            </div>
            <p className='description' onClick={() => { handleFocusClick(6) }}>Chủ nghĩa hoài nghi, khắc kỷ, khoái lạc phát triển, đặt nền tảng cho triết học La Mã.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Section5