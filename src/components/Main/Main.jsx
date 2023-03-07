import './Main.scss'
import titleImage from '../../images/title.png'
import subtitleImage from '../../images/subtitle.png'
import contentTitle from '../../images/content-title.png'
import buyImg from '../../images/buybtn.png'
import videoImg from '../../images/videoIcon.png'
import fiScr from '../../images/screen5.jpg'
import courcePics from '../images'
import txtIcon from '../../images/txtfile-img.png'
import priceGif from '../../images/price.GIF'
import firtsGirlImage from '../../images/girl3.png'
import secondGirlImage from '../../images/girlone.png'
import thirdGirlImage from '../../images/girlscn.png'
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'


function Main({onOpen}) {
  const [scrollTop, setScrollTop] = useState(0);
  const navigate = useNavigate();

  function handleBuyClick() {
    navigate('/buy', {replace: true})
  }

  useEffect(() => {
    onOpen();
    const handleScroll = event => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header">
        <img src={titleImage} alt="title" className="header__welcome" />
        <h1 className="header__title">Un método exclusivo de ganar después de completar el curso! Empieza ahora mismo!</h1>
        <img src={subtitleImage} alt="subtitle" className="header__subtitle" />
      </header>
      <main className="content">
        <p className="content__description">Los creadores de los cursos educativos con más de 100 
        mil clientes lanzan un curso sobre criptomonedas, que será impartido por inteligencia 
        artificial. Al final del curso, te espera un proyecto único, que se convertirá en el 
        método de ingresos número uno: conviértete en uno de los primeros participantes, 
        aumenta tu fortuna.</p>
        <span className='content__trailer-title'>TRAILER</span>
        <iframe id="ytplayer" type="text/html" width="300" height="168.75"
          src="https://www.youtube.com/embed/RmL01v0SPTs"
          frameborder="0" allowfullscreen className='content__trailer-video'/>
        <img src={contentTitle} className="content__title" />
        <section className="gallery">
          {courcePics.map((el, index) => {
            return (
            <div className='card' key={index}>
              <h3 className='card__title'>{el.title}</h3>
              <div className='card__screenshot' style={{backgroundImage: `url(${el.pic})`}} />
              <img className='card__video-icon' src={videoImg} alt="" />
            </div>
            )
          })}
          <div className='card'>
            <h3 className='card__title'>Curso TXT</h3>
            <img className='card__txt-icon' src={txtIcon} alt="" />
          </div>
            <div className='card'>
              <h3 className='card__title'>Quinto curso</h3>
              <span className='card__description'>Información sobre el proyecto exclusivo</span>
              <div className='card__screenshot' style={{backgroundImage: `url(${fiScr})`}} />
              <img className='card__video-icon card__video-icon_with-desc' src={videoImg} alt="" />
            </div>
        </section>
        <section className='buy-blok'>
          <span className='buy-blok__description'>Después de completar el curso, recibirás un 
          certificado de finalización y una invitación exclusiva al proyecto criptográfico.</span>
          <img src={priceGif} alt="price" className='buy-blok__price'/>
          <img src={buyImg} alt="buy" className='buy-blok__btn' onClick={handleBuyClick} />
        </section>
      </main>
      <img src={firtsGirlImage} alt="" className={`animated-girl animated-girl_position_left-top ${{/*scrollTop > 10 ? '' : 'animated-girl_position_left-top_hidden' */}}`}/>
      <img src={secondGirlImage} alt="" className={`animated-girl animated-girl_position_right-mid ${scrollTop > 100 ? '' : 'animated-girl_position_right-mid_hidden'}`}/>
      <img src={thirdGirlImage} alt="" className={`animated-girl animated-girl_position_left-bottom ${scrollTop > 600 ? '' : 'animated-girl_position_left-bottom_hidden'}`}/>
    </>
  )
}

export default Main;