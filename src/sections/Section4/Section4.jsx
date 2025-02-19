import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { motion, useInView } from 'motion/react'
import './Section4.css'
import { animate, transform } from 'motion';
import Plato1 from '../../assets/Plato1.jpg'
import Plato2 from '../../assets/Plato2.jpg'
import Plato3 from '../../assets/Plato3.jpg'
import Aristotle1 from '../../assets/Aristotle1.jpg'
import Aristotle2 from '../../assets/Aristotle2.jpg'
import Aristotle3 from '../../assets/Aristotle3.jpg'
import Diogenes1 from '../../assets/Diogenes1.jpg'
import Diogenes2 from '../../assets/Diogenes2.jpg'
import Diogenes3 from '../../assets/Diogenes3.jpg'
import Epicurus1 from '../../assets/Epicurus1.jpg'
import Epicurus2 from '../../assets/Epicurus2.jpg'
import Epicurus3 from '../../assets/Epicurus3.jpg'
import Zeno1 from '../../assets/Zeno1.jpg'
import Zeno2 from '../../assets/Zeno2.jpg'
import Zeno3 from '../../assets/Zeno3.jpg'

const data = [
  {
    name: 'Plato', 
    period: '(427-347 TCN)',
    description: 'Học trò của Socrates, ông thành lập Học viện Athens và phát triển lý thuyết về thế giới ý niệm, cho rằng thế giới vật chất chỉ là bản sao của thế giới ý niệm hoàn hảo.', 
    image: [Plato1, Plato2, Plato3],
    biography: [
      "Plato sinh ra trong một gia đình quý tộc ở Athens.",
      "Ban đầu, ông có ý định theo đuổi sự nghiệp chính trị nhưng sau khi chứng kiến cái chết của thầy mình, Socrates, ông từ bỏ ý định này và chuyển sang triết học.",
      "Plato thành lập Học viện Athens – cơ sở giáo dục đầu tiên của phương Tây, nơi giảng dạy triết học, toán học và khoa học."
    ],
    philosophy: [
      "Plato phát triển thuyết Ý niệm (Theory of Forms), cho rằng thế giới vật chất chỉ là bản sao không hoàn hảo của thế giới ý niệm hoàn hảo và bất biến.",
      "Theo ông, tri thức thật sự chỉ có thể đạt được bằng cách hiểu được các ý niệm này.",
      "Trong tác phẩm 'Cộng hòa' (The Republic), Plato thảo luận về công lý, đạo đức và mô hình nhà nước lý tưởng, trong đó các nhà triết học cai trị vì họ có tri thức và đức hạnh.",
      "Ông cũng đề xuất thuyết Nhị nguyên (Dualism), phân biệt giữa linh hồn bất tử và cơ thể vật chất, với linh hồn là nguồn gốc của tri thức và đạo đức."
    ],
    influence: [
      "Plato đã ảnh hưởng sâu sắc đến triết học phương Tây, đặc biệt là trong lĩnh vực siêu hình học, nhận thức luận và triết học chính trị.",
      "Học trò của ông, Aristotle, tiếp tục phát triển và phản biện nhiều ý tưởng của ông, tạo nên nền tảng cho triết học cổ điển."
    ]
  },
  {
    name: 'Aristotle', 
    period: '(384-322 TCN)',
    description: 'Học trò của Plato, ông tập trung vào việc quan sát và phân loại thế giới thực, đóng góp quan trọng trong nhiều lĩnh vực như logic, sinh học và chính trị.', 
    image: [Aristotle1, Aristotle2, Aristotle3],
    biography: [
      "Aristotle sinh ra tại Stagira, Macedonia và là học trò xuất sắc của Plato.",
      "Ông trở thành thầy của Alexander Đại đế và sau này thành lập Lyceum, một trường học nổi tiếng ở Athens.",
      "Tại Lyceum, ông phát triển nhiều nghiên cứu khoa học và triết học."
    ],
    philosophy: [
      "Aristotle bác bỏ thuyết Ý niệm của Plato, thay vào đó ông cho rằng bản chất của sự vật nằm trong chính chúng, chứ không phải trong thế giới ý niệm.",
      "Ông phát triển thuyết Nguyên nhân (Four Causes) gồm:",
      "- Nguyên nhân Vật chất (Material Cause): Chất liệu tạo nên sự vật.",
      "- Nguyên nhân Hình thức (Formal Cause): Cấu trúc hoặc hình dáng của sự vật.",
      "- Nguyên nhân Động lực (Efficient Cause): Nguyên nhân làm thay đổi hoặc tạo ra sự vật.",
      "- Nguyên nhân Mục đích (Final Cause): Mục đích hoặc ý nghĩa của sự vật.",
      "Aristotle cũng phát triển Logic Hình thức (Formal Logic), đặt nền tảng cho suy luận tam đoạn luận (syllogism).",
      "Về đạo đức, ông nhấn mạnh Thuyết Trung dung (Golden Mean), cho rằng đức hạnh nằm ở sự cân bằng giữa hai thái cực.",
      "Trong tác phẩm 'Chính trị' (Politics), Aristotle xem con người là 'động vật chính trị' (zoon politikon) và phân tích các hình thức chính quyền, ủng hộ nền dân chủ hợp lý."
    ],
    influence: [
      "Aristotle ảnh hưởng lớn đến triết học phương Tây, đặc biệt trong logic, khoa học, chính trị và đạo đức.",
      "Tư tưởng của ông được truyền bá rộng rãi trong thế giới Hồi giáo và châu Âu thời Trung cổ.",
      "Ông ảnh hưởng mạnh mẽ đến Thomas Aquinas và triết học kinh viện."
    ]
  },
  {
    name: 'Diogenes', 
    period: '(404-323 TCN)',
    description: 'Đại diện cho trường phái Khuyển Nho (Cynicism), ông chủ trương sống giản dị, từ bỏ vật chất và tuân theo tự nhiên.', 
    image: [Diogenes1, Diogenes2, Diogenes3],
    biography: [
      "Diogenes sinh ra tại Sinope (Thổ Nhĩ Kỳ ngày nay) và sau này sống tại Athens và Corinth.",
      "Ông nổi tiếng với lối sống khắc khổ và thách thức các chuẩn mực xã hội.",
      "Diogenes được xem là đại diện tiêu biểu của trường phái Khuyển Nho (Cynicism)."
    ],
    philosophy: [
      "Diogenes chủ trương sống giản dị, tự nhiên và tự túc, từ bỏ tài sản vật chất và danh vọng xã hội.",
      "Ông tin rằng đức hạnh (virtue) là con đường dẫn đến hạnh phúc và sự tự do, và rằng hạnh phúc không phụ thuộc vào của cải vật chất.",
      "Diogenes thách thức các giá trị xã hội và đạo đức giả dối bằng cách sống chân thật và trực diện với bản chất con người."
    ],
    influence: [
      "Diogenes đã ảnh hưởng lớn đến trường phái Khắc Kỷ (Stoicism), đặc biệt là trong quan điểm về sự tự do nội tâm và độc lập với hoàn cảnh bên ngoài.",
      "Ông cũng là biểu tượng của lối sống triết học phản kháng xã hội."
    ]
  },
  {
    name: 'Epicurus', 
    period: '(341-270 TCN)',  
    description: 'Người sáng lập trường phái Khoái Lạc (Epicureanism), ông cho rằng mục tiêu của cuộc sống là đạt được hạnh phúc thông qua sự thanh thản và tránh đau khổ.', 
    image: [Epicurus1, Epicurus2, Epicurus3],
    biography: [
      "Epicurus sinh ra ở Samos và sau này thành lập Trường Vườn (The Garden) ở Athens.",
      "Trường Vườn giảng dạy triết học cho cả nam, nữ và nô lệ – điều hiếm thấy vào thời đó."
    ],
    philosophy: [
      "Epicurus chủ trương tìm kiếm hạnh phúc thông qua sự thanh thản (ataraxia) và tránh đau khổ.",
      "Ông cho rằng niềm vui cao nhất là sự vắng mặt của đau khổ thể xác và lo âu tinh thần.",
      "Ông nhấn mạnh niềm vui tinh thần quan trọng hơn niềm vui vật chất và khuyến khích sống đơn giản, tự tại.",
      "Epicurus cũng phát triển thuyết Nguyên tử (Atomism), cho rằng mọi thứ đều được tạo nên từ các nguyên tử và không có sự can thiệp của thần linh trong cuộc sống con người."
    ],
    influence: [
      "Tư tưởng của Epicurus ảnh hưởng mạnh mẽ đến chủ nghĩa Khoái Lạc (Hedonism) và triết học thời kỳ Khai sáng ở châu Âu.",
      "Dù thường bị hiểu sai là chủ trương hưởng lạc vô độ, ông thực chất đề cao lối sống tiết chế và thanh thản."
    ]
  },
  {
    name: 'Zeno xứ Citium', 
    period: '(334-262 TCN)',  
    description: 'Người sáng lập trường phái Khắc kỷ (Stoicism), ông nhấn mạnh tầm quan trọng của việc sống theo lý trí và chấp nhận những gì không thể thay đổi.', 
    image: [Zeno1, Zeno2, Zeno3],
    biography: [
      "Zeno sinh ra ở Citium (Cyprus) và sau khi gặp gỡ các nhà triết học ở Athens, ông sáng lập trường phái Khắc Kỷ (Stoicism).",
      "Ông giảng dạy tại Stoa Poikile – một hành lang có cột nổi tiếng ở Athens."
    ],
    philosophy: [
      "Zeno cho rằng hạnh phúc đạt được khi sống phù hợp với tự nhiên và kiểm soát cảm xúc bằng lý trí.",
      "Ông nhấn mạnh đức hạnh (virtue) là điều tốt duy nhất và con người phải chấp nhận mọi sự kiện với sự bình thản, vì chúng xảy ra theo Định mệnh (Logos).",
      "Zeno đề cao tinh thần tự chủ (autarkeia) và tính khoan dung (apatheia) – trạng thái tâm lý không bị xáo trộn bởi cảm xúc tiêu cực."
    ],
    influence: [
      "Zeno và trường phái Khắc Kỷ đã ảnh hưởng lớn đến triết học La Mã cổ đại, đặc biệt là Marcus Aurelius, Seneca và Epictetus.",
      "Tư tưởng Khắc Kỷ tiếp tục có ảnh hưởng sâu rộng trong triết học hiện đại."
    ]
  },
]
const Section4 = () => {
  
  const [isVisible, setIsVisible] = useState(null);
  
  return (
    <motion.section id='section4' className='section'>
      <p className="section-title">
        Hậu Socrates
      </p>
      <Swiper 
        className="section-container"
        spaceBetween={50}
        slidesPerView={3}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <PopupCard img={item.image[0]} name={item.name} period={item.period} description={item.description} itemNo={index} setIsVisible={setIsVisible}/>
          </SwiperSlide>
        ))}
      </Swiper>
      {data.map((item, index) => (
          <Popup imgs={item.image} name={item.name} period={item.period} biography={item.biography} philosophy={item.philosophy} influence={item.influence} isVisible={isVisible === index} setIsVisible={setIsVisible} itemNo={index}/>
      ))}
    </motion.section>
  )
}

const PopupCard = ({ img, name, period, description, itemNo, setIsVisible}) => {

  const handleOnMouseEnter = () => {
    animate(`.card${itemNo} .popup-img`, {scale: 0.5, y: -70, x: -130}, {duration: 0.3})
    animate(`.card${itemNo} .popup-title`, {y: -270, x: 150}, {duration: 0.3})
    animate(`.card${itemNo} .popup-description`, {y: -160}, {duration: 0.3})
    document.querySelector(`.card${itemNo} .popup-description`).style.display = 'block';
  }

  const handleOnMouseLeave = () => {
    animate(`.card${itemNo} .popup-img`, {scale: 1, y: 0, x: 0}, {duration: 0.2})
    animate(`.card${itemNo} .popup-title`, {y: 0, x: 0}, {duration: 0.2})
    animate(`.card${itemNo} .popup-description`, {y: 0}, {duration: 0.2})
    document.querySelector(`.card${itemNo} .popup-description`).style.display = 'none';  
  }
 
  return (
    <motion.div 
      whileInView={{opacity: 1, y: 0}} 
      transition={{duration: 0.95, delay: itemNo * 0.2}}
      viewport={{once: true}} 
      initial={{ opacity: 0, y: 40 }}
      className={`popup-card card${itemNo}`}
      onMouseEnter={handleOnMouseEnter}  
      onMouseLeave={handleOnMouseLeave}
    >
      <motion.div className="popup-img">
        <img src={img} alt={name} />
      </motion.div>
      <div className="content-container">
        <div className="content">
          <div className="popup-title">
            <p className="name">{name}</p>
            <p className="period">{period}</p>
          </div>
          <div className="desc-container">
            <p className="popup-description">{description}</p>
          </div>
        </div>
        <button onClick={() => setIsVisible(itemNo)}>Khám Phá</button>
      </div>
    </motion.div>
  )
}

const Popup = ({ imgs, name, period, biography, philosophy, influence, itemNo, isVisible, setIsVisible }) => {
  if (!isVisible) return null;

  const handleClose = () => {
    animate(`.pop${itemNo}`, { opacity: 0, x: "-50%", y: "-30%" }, { duration: 0.5 }).then(() => {
      setIsVisible(null);
    });
  }

  return (
    <motion.div 
      id="popup" 
      className={`popup pop${itemNo}`}
      whileInView={{ opacity: 1, x: "-50%", y: "-50%" }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, x: "-50%", y: "-30%" }}
      >
      <div className="pop-container">
        <div className="pop-img">
          {imgs.map((img, index) => (
            <div className="img-card">
              <img src={img} alt={name} key={index} />
            </div>
          ))}
        </div>
        <div className="pop-title">
          <p className="pop-name">{name} {period}</p>
        </div>
        <div className="pop-ctn">
          <div className="pop-container">
            <p className="pop-mini-title">Tiểu sử</p>
            <ul className="pop-desc-biography">
              {biography.map((item, index) => (
                <li key={index} className="biography">{item}</li>
              ))}
            </ul>
          </div>
          <div className="pop-container">
            <p className="pop-mini-title">Triết Lý</p>
            <ul className="pop-desc-philosophy">
              {philosophy.map((item, index) => (
                <li key={index} className="philosophy">{item}</li>
              ))}
            </ul>
          </div>
          <div className="pop-container">
            <p className="pop-mini-title">Tác Động</p>
            <ul className="pop-desc-influence">
              {influence.map((item, index) => (
                <li key={index} className="influence">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button className="close-btn" onClick={() => handleClose()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
      </button>
    </motion.div>
  )
}


export default Section4