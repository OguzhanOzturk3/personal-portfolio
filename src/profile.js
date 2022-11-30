
// import { Link } from 'react-router-dom'
import picture from './img/picture.jpg'
import linkedin from './img/linkedin.png'
import github from './img/github.png'
import githubs from './img/githubs.png'
import gtr from './img/test.png'
import open_png from './img/open.png'
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
                  
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                   
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
                        <img src={gtr}></img>

                        <div className='works-info'>
                            <div className='centered'>
                            <h3>Project Name</h3>
                            <img src={github}></img>
                            <a href='https://www.google.com/'> <img src={open_png}></img></a>
                           
                            </div>
                            <div>
                                <p>
                                    Bu proje söyle böyle ve böyle şöyle şöyle yapıyor.
                                </p>
                            </div>
                            
                            
                            </div>
                            

                    </div>
                    <div className='works'>
                        <img src={gtr}></img>

                        <div className='works-info'>
                            <div className='centered'>
                            <h3>Project Name</h3>
                            <img src={github}></img>
                            <a href='https://www.google.com/'> <img src={open_png}></img></a>
                           
                            </div>
                            <div>
                                <p>
                                    Bu proje söyle böyle ve böyle şöyle şöyle yapıyor.
                                </p>
                            </div>
                            
                            
                            </div>
                            

                    </div>
                    <div className='works'>
                        <img src={gtr}></img>

                        <div className='works-info'>
                            <div className='centered'>
                            <h3>Project Name</h3>
                            <img src={github}></img>
                            <a href='https://www.google.com/'> <img src={open_png}></img></a>
                           
                            </div>
                            <div>
                                <p>
                                    Bu proje söyle böyle ve böyle şöyle şöyle yapıyor.
                                </p>
                            </div>
                            
                            
                            </div>
                            

                    </div>
                    <div className='works'>
                        <img src={gtr}></img>

                        <div className='works-info'>
                            <div className='centered'>
                            <h3>Project Name</h3>
                            <img src={github}></img>
                            <a href='https://www.google.com/'> <img src={open_png}></img></a>
                           
                            </div>
                            <div>
                                <p>
                                    Bu proje söyle böyle ve böyle şöyle şöyle yapıyor.
                                </p>
                            </div>
                            
                            
                            </div>
                            

                    </div>
                    <div className='works'>
                        <img src={gtr}></img>

                        <div className='works-info'>
                            <div className='centered'>
                            <h3>Project Name</h3>
                            <img src={github}></img>
                            <a href='https://www.google.com/'> <img src={open_png}></img></a>
                           
                            </div>
                            <div>
                                <p>
                                    Bu proje söyle böyle ve böyle şöyle şöyle yapıyor.
                                </p>
                            </div>
                            
                            
                            </div>
                            

                    </div>
                    <div className='works'>
                        <img src={gtr}></img>

                        <div className='works-info'>
                            <div className='centered'>
                            <h3>Project Name</h3>
                            <img src={github}></img>
                            <a href='https://www.google.com/'> <img src={open_png}></img></a>
                           
                            </div>
                            <div>
                                <p>
                                    Bu proje söyle böyle ve böyle şöyle şöyle yapıyor.
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
                        <img src={linkedin}></img>
                        <img src={githubs}></img>
                    </div>
             </div>

            </div>
          

            </div>

        </div>
    );

}

export default profile;