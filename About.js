import photo6 from './6.jpg';
import './about.css';


function About(){
    return(
        <>
            <section className="about" id='about'>
                <div className="heading">
                    <h1>ABOUT US</h1>
                </div>
                <div className="container">
                    <div className="about_content">
                        <h2>Welcom to our company</h2>
                        <p>discover the latest trend and innovation 
                            in technology design and more .our team 
                            of expert brings you the best content and
                        </p>
                        <button>LEARN MORE</button>

                    </div>
                    <div className="about_img">
                        <img src={photo6}></img>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;