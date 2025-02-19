import React from 'react'
import './Section6.css'
import { image } from 'motion/react-client';

const Section6 = () => {
  const imageList1 = [
    "src/assets/1.jpg",
    "src/assets/2.jpg",
    "src/assets/3.jpg",
    "src/assets/4.png",
    "src/assets/5.jpg",
  ];
  const imageList2 = [
    "src/assets/6.JPG",
    "src/assets/7.jpg",
    "src/assets/8.jpg",
    "src/assets/9.jpg",
    "src/assets/10.jpg",
  ]
  const imageList3 = [
    "src/assets/11.jpg",
    "src/assets/12.webp",
    "src/assets/13.jpg",
    "src/assets/14.webp",
    "src/assets/15.jpg",
  ]
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

      </div>
      <div className="image-slides">
        <ImageSlides images={imageList1} duration={20} isRevert={false} />
        <ImageSlides images={imageList2} duration={28} isRevert={true} />
        <ImageSlides images={imageList3} duration={20} isRevert={false} />
      </div>
    </div>
  )
}

export default Section6