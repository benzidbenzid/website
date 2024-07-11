

import photo11 from './11.jpg';
import './client.css';
import './client2.css';

import slider1_1 from'./images/slider1_1.png';
import slider1_2 from'./images/slider1_2.png';
import slider1_3 from'./images/slider1_3.png';
import slider1_4 from'./images/slider1_4.png';
import slider1_5 from'./images/slider1_5.png';
import slider1_6 from'./images/slider1_6.png';
import slider1_7 from'./images/slider1_7.png';
import slider1_8 from'./images/slider1_8.png';
import slider1_9 from'./images/slider1_9.png';
import slider1_10 from'./images/slider1_10.png';


function Client(){
    const images = [
        slider1_1,
        slider1_2,
        slider1_3,
        slider1_4,
        slider1_5,
        slider1_6,
        slider1_7,
        slider1_8,
        slider1_9,
        slider1_10
      ];
    

    return(
        <>
           <div className='client_container'>
            <h1 className='client_tag'> Our Client</h1>
            <p className='client_des'>"Catering to startups and established<br></br> enterprises alike, we provide tailored<br></br> solutions driven by excellence and client <br></br>satisfaction, fostering lasting partnerships built on trust."</p>
           <ul className='client_list'>
                <li className='client_item' style={{ '--i': 1 }}>
                    <img src={photo11}></img>
                    <div className='content'>
                        <h4>Ibea benzid</h4>
                        <p>
                            diuf ciauiem liueepae jeduê eiuduze^ue  d 
                        </p>
                    </div>
                </li>
                <li className='client_item' style={{ '--i': 2 }}>
                    <img src={photo11}></img>
                    <div className='content'>
                        <h4>oussama saadaoui</h4>
                        <p>
                            diuf ciauiem liueepae jeduê eiuduze^ue  d 
                        </p>
                    </div>
                </li>
                <li className='client_item' style={{ '--i': 3 }}>
                    <img src={photo11}></img>
                    <div className='content'>
                        <h4>oussama saadaoui</h4>
                        <p>
                            uy"x_p oiué"ge oié"heup pi²é^""
                        </p>
                    </div>
                </li>
                <li className='client_item'  style={{ '--i': 4 }}>
                    <img src={photo11}></img>
                    <div className='content'>
                        <h4>alina ben</h4>
                        <p>
                            ljhre egiépu&r hyvexp u²ipe^b" lhrbeurp' iu" 
                        </p>
                    </div>
                </li>
                <li className='client_item'  style={{ '--i': 5 }}>
                    <img src={photo11}></img>
                    <div className='content'>
                        <h4>alina ben</h4>
                        <p>
                            ljhre egiépu&r hyvexp u²ipe^b" lhrbeurp' iu" 
                        </p>
                    </div>
                </li>
            </ul>
            
           </div>
           <main>
                <p className='sponsor'>  <i class="ri-arrow-right-fill"></i> Get to know our <b>sponsor</b> better..</p>
                <div className="slider" style={{
                     '--width': '100px',
                     '--height': '50px',
                     '--quantity': '10'
                 }}>
                     <div className="list">
                         {images.map((imageSrc, index) => (
                         <div className="item" key={index} style={{ '--position': index + 1 }}>
                             <img src={imageSrc} alt={`Slide ${index + 1}`} />
                         </div>
                         ))}
                     </div>
                 </div>
            </main>
           
        </>
    );
}
export default Client;