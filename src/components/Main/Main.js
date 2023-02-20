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


function Main() {
  const [scrollTop, setScrollTop] = useState(0);
  console.log(scrollTop);

  useEffect(() => {
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
        <h1 className="header__title">header title</h1>
        <img src={subtitleImage} alt="subtitle" className="header__subtitle" />
      </header>
      <main className="content">
        <p className="content__description">description</p>
        <img src={contentTitle} className="content__title" />
        <section className="gallery">
          {courcePics.map((pic, index) => {
            return (
            <div className='card'>
              <h3 className='card__title'>{`${index + 1} courso`}</h3>
              <div className='card__screenshot' style={{backgroundImage: `url(${pic})`}} />
              <img className='card__video-icon' src={videoImg} alt="" />
            </div>
            )
          })}
          <div className='card'>
            <h3 className='card__title'>TXT FILE</h3>
            <span className='card__description'>description</span>
            <img className='card__txt-icon' src={txtIcon} alt="" />
          </div>
            <div className='card'>
              <h3 className='card__title'>5 courso</h3>
            <span className='card__description'>description</span>
              <div className='card__screenshot' style={{backgroundImage: `url(${fiScr})`}} />
              <img className='card__video-icon' src={videoImg} alt="" />
            </div>
        </section>
        <section className='buy-blok'>
          <img src={priceGif} alt="price" className='buy-blok__price'/>
          <img src={buyImg} alt="buy" className='buy-blok__btn' />
        </section>
      </main>
      <img src={firtsGirlImage} alt="" className={`animated-girl animated-girl_position_left-top ${scrollTop > 10 ? '' : 'animated-girl_position_left-top_hidden'}`}/>
      <img src={secondGirlImage} alt="" className={`animated-girl animated-girl_position_right-mid ${scrollTop > 400 ? '' : 'animated-girl_position_right-mid_hidden'}`}/>
      <img src={thirdGirlImage} alt="" className={`animated-girl animated-girl_position_left-bottom ${scrollTop > 1900 ? '' : 'animated-girl_position_left-bottom_hidden'}`}/>
    </>
  )
}

export default Main;