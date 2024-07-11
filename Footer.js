
import Flogo from './logo.png';
import './footer.css';

function Footer(){
    return(
        <>
            <footer className='footer'>
                <div className="footer_row">
                    <div className="footer_col">
                        <img src={Flogo} className='footer_logo'></img>
                        <p className='footer_description'>"Thank you for visiting our website! We are dedicated to providing valuable content and exceptional user experience. Explore more of what we offer and stay updated with our latest updates and news. Connect with us on social media to join our community!"</p>
                    </div>
                    <div className="footer_col">
                        <h3>Office <div className='underline'><span></span></div></h3>
                        <p>Espace tunis Montplaisir</p>
                        <p>Block H , etage 5 </p>
                        <p className='email-id'>Aracompany@gmail.com</p>
                        <h4>+219 14-456-435</h4>
                    </div>
                    <div className="footer_col">
                        <h3>Links  <div className='underline'><span></span></div></h3>
                        <ul className='footer_links'>
                            <li><a>Home</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Services</a></li>
                            <li><a>Clients</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer_col">
                        <h3>
                            NewsLetter <div className='underline'><span></span></div>
                        </h3>
                        <form className='footer_form'>
                            <i class="ri-mail-line footer_mail"></i>
                            <input type='email' placeholder='enter your email' required ></input>
                            <button type='submit'><i class="ri-arrow-right-fill footer_arrow"></i></button>
                        </form>
                        <div className='footer_social'>
                            <i class="ri-facebook-circle-line"></i>
                            <i class="ri-instagram-line"></i>
                            <i class="ri-linkedin-line"></i>
                            <i class="ri-whatsapp-line"></i>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <p className='copyWrite'> Created by I & O - ALL Right Reserved</p>
            </footer>
        </>
    );
}

export default Footer;