import React, { useState } from 'react'
import { motion } from 'motion/react'
import './Section3.css'
import SocrateBanner1 from '../../assets/SocrateBanner1.png'
import SocrateBanner2 from '../../assets/SocrateBanner3.jpg'
import { animate } from 'motion'

const Section3 = () => {

  const [showContent, setShowContent] = useState(false);
  
  // const showConentClick = () => {
  //   animate()
  //   document.querySelector('.param2').style.width = 'calc(100% - 100px)'
  //   setShowContent(true);
  // }

  return (
    <section id='section3' className='section'>
      <p className="tittle">Socrates</p>
      <div className="banner-container">
        <div className="img-container">
          <div className="tag-container">
            <span className="tag">Socrates</span>
            <span className="tag">470-399 TCN</span>
          </div>
          <img className='banner ban1' src={SocrateBanner1} alt="SocratesBanner" />
          <img className='banner ban2' src={SocrateBanner2} alt="SocratesBanner" />
        </div>
        <motion.p 
          className='param1'
          whileInView={{opacity: 1, x: 0, duration: 0.8, ease: 'linear'}}
          transition={{duration: 0.5, ease: "linear"}}
          initial={{opacity:0, x: 50}}
        >
          Nền móng cho <br/> Triết học phương Tây
        </motion.p>
        <motion.div 
          className="param2" 
          style={{width: showContent ? "calc(100% - 100px)" : "25%"}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.8, ease: "linear"}}
          initial={{opacity:0, x: 50}}
          >
          {showContent ? 
            <div className="content">
              <div>
                <p>Tiểu sử</p>
                <p>
                  Sinh ra tại Athens, là con trai của Sophroniscus, một thợ điêu khắc, và Phaenarete, một bà mụ. Mặc dù xuất thân khiêm tốn, ông đã trở thành một trong những triết gia vĩ đại nhất, được coi là "cha đẻ của triết học phương Tây". Socrates không để lại bất kỳ tác phẩm viết nào; những hiểu biết về ông chủ yếu đến từ các tác phẩm của học trò như Plato và Xenophon.
                </p>
                
                <br />
                
                <p>
                  Năm 399 TCN, Socrates bị kết án tử hình với tội danh "làm hư hỏng thanh niên" và "báng bổ thần linh". Mặc dù có cơ hội trốn thoát, ông đã chấp nhận bản án và uống thuốc độc theo phán quyết của tòa án Athens, thể hiện sự kiên định với triết lý sống của mình.
                </p>
              </div>
              <div>
                <p>Tư tưởng</p>
                <p>
                  Socrates phát triển phương pháp truy vấn biện chứng, thường gọi là "phương pháp Socrates", dựa trên việc đặt câu hỏi để khám phá sự thật và khuyến khích tự nhận thức. Ông nhấn mạnh tầm quan trọng của đạo đức và tri thức, cho rằng "cuộc sống không được kiểm nghiệm là cuộc sống không đáng sống".
                </p>
                <br />
                <p>
                  Socrates tin rằng tri thức và đức hạnh là cần thiết cho những người làm chính trị, và rằng hiểu biết là cơ sở của điều thiện, trong khi sự ngu dốt là nguồn gốc của cái ác.
                </p>
              </div>
            </div>
            :
            <motion.p className='head'>Tiểu sử <br />Tư tưởng <br />Của Socrates</motion.p>
          }
          <motion.div className='next-btn' onClick={() => setShowContent(!showContent)} style={{transform: showContent ? "rotateY(180deg)" : "rotateY(0deg)"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#3b3b3b" d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"/></svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Section3