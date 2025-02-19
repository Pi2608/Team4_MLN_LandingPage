import React from 'react'
import './Section6.css'
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.JPG";
import image7 from "../../assets/7.jpg";
import image8 from "../../assets/8.jpg";
import image9 from "../../assets/9.jpg";
import image10 from "../../assets/10.jpg";
import image11 from "../../assets/11.jpg";
import image12 from "../../assets/12.webp";
import image13 from "../../assets/13.jpg";
import image14 from "../../assets/14.webp";
import image15 from "../../assets/15.jpg";

const Section6 = () => {
  const imageList1 = [image1, image2, image3, image4, image5];

  const imageList2 = [image6, image7, image8, image9, image10];

  const imageList3 = [image11, image12, image13, image14, image15];
  const ImageSlides = ({ images, duration, isRevert }) => {
    return (
      <div className={`image-slide ${isRevert ? "revert" : ""}`} style={{ "--t": `${duration}s` }}>
        <div className="container">
          {images.map((image, index) => {
            return (
              <img src={image} alt="" className="image" key={index} />
            )
          })}
        </div>
        <div className="container">
          {images.map((image, index) => {
            return (
              <img src={image} alt="" className="image" key={index} />
            )
          })}
        </div>
      </div>
    )
  }
  return (
    <div id='section6'>
      <div className="content">
        <p className="title">
          Vai trò<br />
          của Triết học Hy Lạp
        </p>
        <p className="description">
          <br />
          Triết học Tiền Socrates đặt nền móng cho <span>tư duy khoa học và vũ trụ học</span> bằng cách thay thế giải thích thần thoại bằng lý luận dựa trên tự nhiên. Socrates <span>cách mạng hóa triết học với phương pháp biện chứng, đặt nền tảng cho triết học đạo đức và tư duy phản biện,</span> ảnh hưởng sâu sắc đến Plato và Aristotle.
          <br /><br />
          Hậu Socrates phát triển nhiều trường phái như <span>khắc kỷ, hoài nghi và khoái lạc, định hình tư tưởng về hạnh phúc, đạo đức và chính trị.</span> Những tư tưởng này tiếp tục ảnh hưởng đến triết học Trung Cổ, Phục Hưng và hiện đại, tạo nền tảng cho triết học phương Tây ngày nay.
        </p>
        <a target="_blank" href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://vjol.info.vn/index.php/khxhvn/article/download/23606/20183/&ved=2ahUKEwj377mOodCLAxVldfUHHZ23NKEQFnoECBIQAQ&usg=AOvVaw0T8E7sL21Ogd1_Xmw2FrBG"><button>Explore</button></a>
      </div>
      <div className="image-slides">
        <ImageSlides images={imageList1} duration={20} isRevert={false} />
        <ImageSlides images={imageList2} duration={50} isRevert={true} />
        <ImageSlides images={imageList3} duration={20} isRevert={false} />
      </div>
    </div>
  )
}

export default Section6