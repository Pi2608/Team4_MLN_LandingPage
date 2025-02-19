import React, { useEffect, useState, useRef } from 'react'
import './Section2.css'
import thales from '../../assets/thales.jpg'
import anaximander from '../../assets/Anaximander.jpg'
import anaximenes from '../../assets/anaximenes.avif'
import Heraclitus from '../../assets/Heraclitus.jpg'
import Pythagoras from '../../assets/Pythagoras.jpg'

const Section2 = () => {
  const [focus, setFocus] = useState("")
  const [numSlide, setNumSlide] = useState(1)
  const ref = useRef();
  const handleInfoClick = (value) => {
    const card = document.querySelector(`.card.${value}`);
    if (card) {
      card.classList.toggle("explore");
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "N" || event.key === "n") {
        console.log(numSlide);
        const card = document.querySelector(`.card.num${numSlide}`);
        setNumSlide((prevNum) => prevNum + 1);
        if (card) {
          card.classList.add("out");
        }
        if (ref.current) {
          ref.current.classList.add("active");
          ref.current.click();

          setTimeout(() => {
            ref.current.classList.remove("active");
          }, 150);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [numSlide]);

  return (
    <div id='section2'>
      <div className="word-container">
        <div className="word-scroll">
          <div className="word-block item1">
            <span className='title'>GIAI ĐOẠN TIỀN SOCRATES</span>
            <span className="dash">/</span>
          </div>
          <div className="word-block item2">
            <span className='title'>GIAI ĐOẠN TIỀN SOCRATES</span>
            <span className="dash">/</span>
          </div>
          <div className="word-block item3">
            <span className='title'>GIAI ĐOẠN TIỀN SOCRATES</span>
            <span className="dash">/</span>
          </div>
          <div className="word-block item4">
            <span className='title'>GIAI ĐOẠN TIỀN SOCRATES</span>
            <span className="dash">/</span>
          </div>
        </div>
      </div>
      <div className="cards-container">
        <div className="card num1">
          <div className="user-info">
            <img src={thales} alt="" />
            <div className="name-info">
              <div className="detail">
                <p className="name">Thales</p>
                <p className="year">(624-546 TCN)</p>
              </div>
              <button className="info" onClick={() => { handleInfoClick("num1"); setFocus("num1") }}>
                {focus !== "num1" ? "Information" : "Get Out"}
              </button>
            </div>
          </div>
          <div className="information">
            <div className="background">
              <p className="border">Tiểu sử:</p>
              <p className="normal">Thales sinh ra ở Miletus, một thành phố thuộc Ionia (nay là Thổ Nhĩ Kỳ). Ông được coi là triết gia đầu tiên của Hy Lạp cổ đại và cũng là một trong "Bảy hiền triết" nổi tiếng. Ngoài triết học, Thales còn nổi tiếng trong lĩnh vực thiên văn học và hình học. Ông được cho là đã dự đoán nhật thực vào năm 585 TCN, một sự kiện lịch sử đã làm gián đoạn cuộc chiến giữa Lydia và Media.</p>
              <p className="border">Tư tưởng:</p>
              <p className="normal">Thales là người đầu tiên tìm kiếm nguyên lý cơ bản (archê) của vũ trụ thông qua lý trí thay vì dựa vào thần thoại. Ông cho rằng:</p>
              <ul>
                <li>Nước (hydor) là nguyên lý cơ bản của mọi vật chất, bởi nước cần thiết cho sự sống và có khả năng chuyển đổi trạng thái (rắn, lỏng, khí).</li>
                <li>Ông cũng cho rằng vũ trụ đầy sức sống (hylozoism), nghĩa là mọi thứ đều có sự sống, và các hiện tượng tự nhiên có thể giải thích bằng những nguyên nhân vật lý chứ không phải bởi các vị thần.</li>
              </ul>
              <p className="border">Đóng góp khác:</p>
              <ul>
                <li>Hình học: Thales được cho là người đầu tiên chứng minh định lý hình học, như việc chứng minh rằng góc nội tiếp cùng chắn cung trong nửa đường tròn là góc vuông.</li>
                <li>Thiên văn học: Ngoài việc dự đoán nhật thực, ông cũng giải thích nguyên nhân của lũ lụt sông Nile là do gió mùa từ biển Địa Trung Hải.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card num2">
          <div className="user-info">
            <img src={anaximander} alt="" />
            <div className="name-info">
              <div className="detail">
                <p className="name">Anaximander</p>
                <p className="year">(610-546 TCN)</p>
              </div>
              <button className="info" onClick={() => { handleInfoClick("num2"); setFocus("num2") }}>
                {focus !== "num2" ? "Information" : "Get Out"}
              </button>
            </div>
          </div>
          <div className="information">
            <div className="background">
              <p className="border">Tiểu sử:</p>
              <p className="normal">Anaximander là học trò của Thales và cũng sinh ra tại Miletus. Ông được coi là nhà triết học và nhà khoa học đầu tiên viết bằng văn xuôi, thay vì sử dụng thơ. Anaximander quan tâm đến vũ trụ học, địa lý, và sinh học.</p>
              <p className="border">Tư tưởng:</p>
              <ul>
                <li>Anaximander không đồng ý với Thales rằng một chất cụ thể như nước có thể là nguyên lý của mọi thứ. Thay vào đó, ông đề xuất khái niệm "vô hạn vô định" (apeiron) – một thực thể vô hình, vô hạn và không xác định, làm nguồn gốc của vũ trụ.</li>
                <li>Ông cho rằng mọi vật chất đều phát sinh và tan biến vào apeiron theo một chu trình vô tận, và các đối lập như nóng - lạnh, khô - ướt, sinh ra từ sự phân tách của apeiron.</li>
              </ul>
              <p className="border">Đóng góp khác:</p>
              <ul>
                <li>Địa lý: Anaximander là người đầu tiên vẽ bản đồ thế giới dưới dạng hình trụ, đồng thời đưa ra giả thuyết rằng Trái Đất lơ lửng trong không gian mà không cần điểm tựa, nhờ sự cân bằng đối xứng.</li>
                <li>Tiến hóa: Ông cũng đưa ra ý tưởng sơ khai về sự tiến hóa, cho rằng các sinh vật sống ban đầu sinh ra trong nước và tiến hóa để thích nghi với môi trường trên cạn.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card num3">
          <div className="user-info">
            <img src={anaximenes} alt="" />
            <div className="name-info">
              <div className="detail">
                <p className="name">Anaximenes</p>
                <p className="year">(588-524 TCN)</p>
              </div>
              <button className="info" onClick={() => { handleInfoClick("num3"); setFocus("num3") }}>
                {focus !== "num3" ? "Information" : "Get Out"}
              </button>
            </div>
          </div>
          <div className="information">
            <div className="background">
              <p className="border">Tiểu sử:</p>
              <p className="normal">Anaximenes là học trò của Anaximander và cũng đến từ Miletus. Ông tiếp tục truyền thống tìm kiếm nguyên lý cơ bản của vũ trụ nhưng có cách tiếp cận cụ thể và dễ hiểu hơn so với người thầy của mình.</p>
              <p className="border">Tư tưởng:</p>
              <ul>
                <li>Anaximenes cho rằng không khí (aer) là nguyên lý cơ bản của vạn vật. Ông chọn không khí vì nó vô hình nhưng có thể cảm nhận được khi di chuyển (gió) và cần thiết cho sự sống.</li>
                <li>Theo Anaximenes, thông qua quá trình ngưng tụ và loãng ra, không khí có thể biến đổi thành các dạng vật chất khác nhau</li>
                <li>Ông tin rằng sự thay đổi về mật độ của không khí tạo ra các vật chất và hiện tượng trong vũ trụ.</li>
              </ul>
              <p className="border">Đóng góp khác:</p>
              <ul>
                <li>Anaximenes cũng đưa ra những giải thích về hiện tượng tự nhiên, chẳng hạn như cầu vồng được hình thành khi ánh sáng mặt trời chiếu vào mây dày đặc.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card num4">
          <div className="user-info">
            <img src={Heraclitus} alt="" />
            <div className="name-info">
              <div className="detail">
                <p className="name">Heraclitus</p>
                <p className="year">(540-475 TCN)</p>
              </div>
              <button className="info" onClick={() => { handleInfoClick("num4"); setFocus("num4") }}>
                {focus !== "num4" ? "Information" : "Get Out"}
              </button>
            </div>
          </div>
          <div className="information">
            <div className="background">
              <p className="border">Tiểu sử:</p>
              <p className="normal">Heraclitus sinh ra tại Ephesus (nay thuộc Thổ Nhĩ Kỳ) trong một gia đình quý tộc, nhưng ông từ bỏ quyền lực và sống ẩn dật, tập trung vào suy ngẫm triết học. Heraclitus được gọi là "nhà triết học khó hiểu" vì lối viết ngắn gọn, ẩn dụ và đầy tính nghịch lý.</p>
              <p className="border">Tư tưởng:</p>
              <ul>
                <li>Heraclitus nổi tiếng với câu nói: "Không ai tắm hai lần trên cùng một dòng sông", thể hiện quan điểm "mọi thứ đều thay đổi" (panta rhei). Ông cho rằng sự thay đổi liên tục là bản chất của vạn vật.</li>
                <li>Ông coi lửa là nguyên tố cơ bản và biểu tượng cho sự biến đổi không ngừng</li>
                <li>Heraclitus nhấn mạnh sự đối lập và xung đột là yếu tố cần thiết cho sự tồn tại và phát triển, như ngày và đêm, sống và chết. Ông gọi đó là "sự hòa hợp của các đối lập"</li>
                <li>Ông cũng giới thiệu khái niệm Logos – một nguyên lý phổ quát điều khiển sự thay đổi và trật tự trong vũ trụ.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card num5">
          <div className="user-info">
            <img src={Pythagoras} alt="" />
            <div className="name-info">
              <div className="detail">
                <p className="name">Pythagoras</p>
                <p className="year">(570-495 TCN)</p>
              </div>
              <button className="info" onClick={() => { handleInfoClick("num5"); setFocus("num5") }}>
                {focus !== "num5" ? "Information" : "Get Out"}
              </button>
            </div>
          </div>
          <div className="information">
            <div className="background">
              <p className="border">Tiểu sử:</p>
              <p className="normal">Pythagoras sinh ra ở Samos nhưng di cư đến Croton ở Nam Ý, nơi ông thành lập một cộng đồng tôn giáo và triết học gọi là Pythagoreans. Cộng đồng này có những quy tắc nghiêm ngặt về đạo đức và lối sống, và họ tin vào sự luân hồi của linh hồn.</p>
              <p className="border">Tư tưởng:</p>
              <ul>
                <li>Pythagoras cho rằng các con số là bản chất của mọi sự vật và vũ trụ được điều hòa bởi các tỷ lệ số học hài hòa.</li>
                <li>Ông phát triển học thuyết "hài hòa của các hình cầu" (Harmony of the Spheres), cho rằng các hành tinh chuyển động theo tỷ lệ toán học tạo nên âm nhạc vũ trụ mà tai người không nghe thấy.</li>
                <li>Cộng đồng Pythagoreans cũng tin vào luân hồi (metempsychosis) – linh hồn bất tử chuyển kiếp từ cơ thể này sang cơ thể khác để tiến hóa đạo đức và trí tuệ.</li>
              </ul>
              <p className="border">Đóng góp khác:</p>
              <ul>
                <li>Toán học: Pythagoras nổi tiếng với Định lý Pythagore trong hình học, khẳng định rằng trong một tam giác vuông, bình phương của cạnh huyền bằng tổng bình phương của hai cạnh góc vuông.</li>
                <li>Âm nhạc: Ông khám phá mối quan hệ giữa âm thanh và tỷ lệ số học, tạo nền tảng cho lý thuyết âm nhạc phương Tây.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button ref={ref} className='button-tap'>
          <span class="button_top">Click N</span>
        </button>
      </div>
    </div>
  )
}

export default Section2