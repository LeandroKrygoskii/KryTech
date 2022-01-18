import React,{useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {EffectCoverflow} from 'swiper';
import "swiper/css";
import "swiper/css/effect-coverflow"


import Modal from './components/Modal';

import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Swing from 'react-reveal/Swing';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import Bounce from 'react-reveal/Bounce';

import {AiFillGithub, AiFillFacebook , AiFillInstagram} from 'react-icons/ai'

SwiperCore.use([EffectCoverflow]);

function App() {
  

  const durationAnimation = 2800;

  return (
    <main className="Main">

      <header className="App-header">

        <div className="Header-box">
         
        <Bounce delay={800} bottom>
          <div className='Logo-box'>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <strong>KryTech Mobile Apps</strong>
            </p>
          </div>
          </Bounce>  

         <Bounce delay={800} bottom>
          <div style={{borderRadius:20, backgroundColor:'#FEEFD7', padding:15}}>
            <p style={{color:'#ff8e11'}}>
              ❤ free apps.
              </p>
          </div>
         </Bounce>  
        </div>     
      </header>

     
      <Reveal duration={durationAnimation} bottom>
        <section className='Intro-content'>
          <h1 className='Intro-text'>A group of android developers <br/> focused on helping people through code. Free Apps</h1>
        </section>
      </Reveal>

    

      <section className='slide-section'>
        <div className='grid'>
        
        <Reveal duration={durationAnimation} right>
          <div className='carrossel'>
                    <Swiper 
                       effect={'coverflow'}
                       grabCursor={true} 
                       centeredSlides={true} 
                       slidesPerView={4}
                       spaceBetween={22}
                       loop={true}
                       autoplay={{delay:3000}}       
                       coverflowEffect={{
                        "rotate": 20,
                         'slideShadows':false,
                      
                        }} className="swiper-container">
                       {/*======== CARD-01 ===========*/}
                     
                 
                          <SwiperSlide className="swiper-card">
                            <div className="swiper-img">
                              <img src={require('./images/1.png')} className="swiperimg-one" alt=""/>
                            </div>
                            <div className='swiper-data'>
                              <h1 className='swiper-data-title'>Controle de estoque</h1>

                            
                              <div className="data-img">
                                <a href='https://play.google.com/store/apps/details?id=com.leandrokry.controleestoque'>
                                 <img src={require('./images/icon-google-play.png')} className="swiper-data-img"  alt=""/>
                                </a>
                              </div>
                             </div>
                            
                          </SwiperSlide>
                    
                         {/*======== CARD-02 ===========*/}
                       
                            <SwiperSlide cclassName="swiper-card">
                            <div className="swiper-img">
                              <img src={require('./images/2.png')} className="swiperimg-one"  alt=""/>
                            </div>

                            <div className='swiper-data'>
                              <h1 className='swiper-data-title'>Acordes de viola</h1>
                              <div className="data-img">
                               <a href='https://play.google.com/store/apps/details?id=com.krytech.AcordesViola'>
                                <img src={require('./images/icon-google-play.png')} className="swiper-data-img"  alt=""/>
                               </a>
                              </div>
                            </div>
                            
                          </SwiperSlide>
                

                         {/*======== CARD-03 ===========*/}
                        
                            <SwiperSlide className="swiper-card">
                              <div className="swiper-img">
                                <img src={require('./images/3.webp')} className="swiperimg-one"  alt=""/>
                              </div>

                              <div className='swiper-data'>
                                <h1 className='swiper-data-title'>Gerador de senhas</h1>
                                <div className="data-img">
                                  <a href='https://play.google.com/store/apps/details?id=com.krytech.geradordesenha'>
                                   <img src={require('./images/icon-google-play.png')} className="swiper-data-img"  alt=""/>
                                  </a>               
                                </div>
                              </div>
                        
                          </SwiperSlide>

                          <SwiperSlide className="swiper-card">
                              <div className="swiper-img">
                                <img src={require('./images/4.webp')} className="swiperimg-one"  alt=""/>
                              </div>

                              <div className='swiper-data'>
                                <h1 className='swiper-data-title'>Histórias para dormir</h1>
                                <div className="data-img">
                                  <a href='https://play.google.com/store/apps/details?id=com.krytech.HistoriasParaDormir'>
                                  <img src={require('./images/icon-google-play.png')} className="swiper-data-img"  alt=""/>
                                  </a>                 
                                </div>
                              </div>
                        
                          </SwiperSlide>

                          <SwiperSlide className="swiper-card">
                              <div className="swiper-img">
                                <img src={require('./images/4.webp')} className="swiperimg-one"  alt=""/>
                              </div>

                              <div className='swiper-data'>
                                <h1 className='swiper-data-title'>Garden App</h1>
                                <div className="data-img">
                                <img src={require('./images/icon-google-play.png')} className="swiper-data-img"  alt=""/>
                                </div>
                               </div>
                        
                          </SwiperSlide>
                     
                      </Swiper>    
             </div>   
             </Reveal>     
        </div>   
      </section>
    
    <Fade top duration={durationAnimation}>
      <section className='section-explore'>
          <div className='explore-content'>
            <div className='row'>
              <div className='explore-card'>
                <span className='explore-number'>
                  10m+
                </span>
                <span className='explore-text'>downloads</span>
              </div>

              <div className='explore-card'>
                <span className='explore-number'>
                  4
                </span>
                <span className='explore-text'>Apps</span>
              </div>

              <div className='explore-card'>
                <span className='explore-number'>
                  4.3
                </span>
                <span className='explore-text'>Average Rating</span>
              </div>
            </div>         
          </div>
      </section>
    </Fade>

    <Fade left duration={durationAnimation}> 
    <section className='section-termos'  id="viola">
         
     <div className='div-termos'>
       <h2 className='text-termos'>Termos de uso e politica de privacidade</h2>
        <div className='intro-termos'>
          <p className='text-intro-termos'>
          Acreditamos que a privacidade é um direito fundamental do ser humano, e que a liberdade de expressão no mundo online requer não só privacidade, mas também transparência.
          <br/> <br/>
          Nessa Política de Privacidade, e Termos de Uso, iremos descrever quais Recursos usamos em nossos apps, e o que fazemos com eles.
          </p>
        </div>
        <div className='cards-termos'>
         
         <div className='card-content'>   
            <Modal
            title="Acordes de viola"
            text="
            Este Aplicativo NÃO coleta ou armazena em nuvem qualquer dado sensível do usuário."
            permissions="Este app não requer permissões especiais"
            img={require('./images/viola-splash.png')}
            />
              <Modal
            title="Histórias para dormir"
            text="
            Este Aplicativo NÃO coleta ou armazena em nuvem qualquer dado sensível do usuário."
            permissions="Este app não requer permissões especiais"
            img={require('./images/history-splash.png')}
            />

            <Modal
            title="Controle de estoque"
            permissions="Camera: O aplicativo usa a câmera somente para ler o código de barras. Por padrão as novas versões do android perguntam sobre a permissão apenas duas vezes, se você negar as duas é necessário ir manualmente às configurações do seu dispositivo para autorizar o uso."
            img={require('./images/estoque-splash.png')}
            />

            <Modal
            title="Gerador de senhas"
            text="
            Este Aplicativo NÃO coleta ou armazena em nuvem qualquer dado sensível do usuário."
            permissions="Este app não requer permissões especiais"
            img={require('./images/pass-splash.png')}
            />
         </div>

        </div>       
     </div>

     
    </section>
    </Fade> 

    <Fade bottom duration={durationAnimation}> 
      <footer className='footer'>
         <div className='grid-footer'>
           <div className='wrap'>
              <div className="copyright">
                        <span className="copy-section">Creating android apps since 2020.<br/></span>
                        <span className="copy-section">Copyright © 2022, All Rights Reserved.<br/><br/></span>
                        <a className="author" href="/" target="_blank" title="Website made by KryTech">Website made by KryTech</a>
               </div>

                <div class="socials">
                        <a href="https://github.com/LeandroKrygoskii" title="Github" target="_blank">
                         <AiFillGithub  className='link-social' size={30} color='#000'/>
                        </a>
                        <a href="https://www.facebook.com/leandro.ferreira.5682" className='link-social' title="Facebook" target="_blank">
                          <AiFillFacebook className='link-social' size={30} color='#000'/>
                        </a>
                        <a href="https://www.instagram.com/ndscrrr/"  title="Github" target="_blank">
                         <AiFillInstagram className='link-social' size={30} color='#000'/>
                        </a>
                </div>
          </div>
         </div>
      </footer>
    </Fade>
    </main>
  );
}

export default App;
