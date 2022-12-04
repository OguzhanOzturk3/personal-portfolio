
// import { Link } from 'react-router-dom'
import picture from './img/picture.jpg'
import linkedin from './img/linkedin.png'
import github from './img/github.png'
import githubs from './img/githubs.png'
import gtr from './img/test.png'
import open_png from './img/open.png'

import memory from './img/memory.gif'
import restaurant from './img/restaurant.gif'
import draw from './img/draw.gif'
import shop_cart from './img/shop-cart.gif'
import weather from './img/weather.gif'
import responsive from './img/responsive.gif'
const profile = () => {




    return (


        <div className='main'>
            <div >
                <div className='comp'>
                <div className='picture'>
                    <img src={picture}></img>
                    <p>Oğuzhan Öztürk</p>
                </div>
                <div className='about-me'>
                    <div>
                    <h1>About Me</h1>
                    <hr className='red'/>
                    </div>
                  
                    <p>I am Front-End developer. I received my bachelor’s degree in Computer Engineering (Computer Science) from Karabük University. I am a selfmotivated person who wants to learn new skills. I like to develop projects and improve myself.</p>

                   
                </div>
                </div>
              

                <div className='heading'>
                        <div>
                        <h1>My Work</h1>
                        <hr className='red'/>
                        </div>
                        
                    </div>

                <div className='my-work'>

                    <div className='works'>
                        <img src={responsive}></img>

                        <div className='works-info'>
                            <div className='centered'>
                            <h3>Responsive Portfolio</h3>
                            <img src={github}></img>
                            <a href='https://github.com/OguzhanOzturk3/personal-portfolio/'> <img src={open_png}></img></a>
                           
                            </div>
                            <div>
                                <p>
                                    This website is responsive which changes its look according to users device resolution.
                                </p>
                            </div>
                            
                            
                            </div>
                            

                    </div>
                    <div className='works'>
                        <img src={shop_cart}></img>

                        <div className='works-info'>
                            <div className='centered'>
                            <h3>Shop Cart</h3>
                            <img src={github}></img>
                            <a href='https://github.com/OguzhanOzturk3/Shoping-Cart/'> <img src={open_png}></img></a>
                           
                            </div>
                            <div>
                                <p>
                                    Shop Cart is a website which you can add items in cart, check total price and delete item from cart.
                                </p>
                            </div>
                            
                            
                            </div>
                            

                    </div>
                    <div className='works'>
                        <img src={weather}></img>

                        <div className='works-info'>
                            <div className='centered'>
                            <h3>Weather App</h3>
                            <img src={github}></img>
                            <a href='https://github.com/OguzhanOzturk3/WeatherApp/'> <img src={open_png}></img></a>
                           
                            </div>
                            <div>
                                <p>
                                    In Weather App you can check any cities weather forecast with weather api and website background is going to change according to the weather of the city.
                                </p>
                            </div>
                            
                            
                            </div>
                            

                    </div>
                    <div className='works'>
                        <img src={memory}></img>

                        <div className='works-info'>
                            <div className='centered'>
                            <h3>Memory Game</h3>
                            <img src={github}></img>
                            <a href='https://github.com/OguzhanOzturk3/Memory-Game/'> <img src={open_png}></img></a>
                           
                            </div>
                            <div>
                                <p>
                                    In Memory Game you are trying to find images which you didn't click before. Every different image you click earns you 1 score.
                                </p>
                            </div>
                            
                            
                            </div>
                            

                    </div>
                    <div className='works'>
                        <img src={restaurant}></img>

                        <div className='works-info'>
                            <div className='centered'>
                            <h3>Restaurant</h3>
                            <img src={github}></img>
                            <a href='https://github.com/OguzhanOzturk3/restaurant/'> <img src={open_png}></img></a>
                           
                            </div>
                            <div>
                                <p>
                                    Restaurant website has 3 pages but when you change the page it will remove main content and bring the content according to page you clicked.  
                                </p>
                            </div>
                            
                            
                            </div>
                            

                    </div>
                    <div className='works'>
                        <img src={draw}></img>

                        <div className='works-info'>
                            <div className='centered'>
                            <h3>Etch-A-Sketch</h3>
                            <img src={github}></img>
                            <a href='https://github.com/OguzhanOzturk3/Etch-A-Sketch/'> <img src={open_png}></img></a>
                           
                            </div>
                            <div>
                                <p>
                                Etch-A-Sketch is drawing website. You can select gray, black or rgb colors and reset which cleans board. You can change how many pixels will be in drawing board.
                                </p>
                            </div>
                            
                            
                            </div>
                            

                    </div>
                    

                

                </div>
            <div className='flex'>
            <div className='contact'>
            
            <div>
                <h1 className='heading' style={{fontSize: "45px"}}>Contact Me</h1>
            <hr className='red'/>
            
 
            </div>
             
            
          
                 
            <h2>Please get in touch if you think our work could be mutually beneficial!</h2>
                
                 <div className='space'>
                 <p>Antalya, Turkey</p>
                 <p>0541-520-4139</p>
                 <p>oguzhanozturk3@hotmail.com</p>
               
                 </div>
             
                 <div>
                        <a href='https://linkedin.com/in/oguzhanozturk3'><img src={linkedin}></img></a>
                       <a href='https://github.com/OguzhanOzturk3'><img src={githubs}></img></a> 
                    </div>
             </div>

            </div>
          

            </div>

        </div>
    );

}

export default profile;