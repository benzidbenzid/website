import './contact.css';

function Contact(){
    return(
        <>
            <section className='contact'>
                <div className='content'>
                    <h2> Contact Us</h2>
                    <p>hefmiq LHFEMUIQFEU%GEFZ ESEFHMSQGIFEG EIFEUGIGEFU FIFRIRFRFBIRF JBESMFmefùfhfuyfdzçyehf,dzdégez efyefefg</p>
                </div>
                <div className='container'>
                    <div className='contactInfo'>
                        <div className='box'>
                            <div className='icon'><b></b><i class="ri-map-pin-line"></i></div>
                            <div className='text'>
                                <h3>Address</h3>
                                <p>4055 SUGAR CAMP</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon'><b></b><i class="ri-phone-line"></i></div>
                            <div className='text'>
                                <h3>Phone</h3>
                                <p>+216 93-015-641</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon'><b></b><i class="ri-mail-line"></i></div>
                            <div className='text'>
                                <h3>Email</h3>
                                <p>Arcompany@gmail.com</p>
                            </div>
                        </div>

                        <h2 className='txt'>Connect with Us</h2>
                        <ul className='sci'>
                            <li><a href='#'><i class="ri-facebook-circle-line"></i></a></li>
                            <li><a href='#'><i class="ri-instagram-line"></i></a></li>
                            <li><a href='#'><i class="ri-linkedin-line"></i></a></li>
                        </ul>
                    </div>
                    <div className='contactForm'>
                        <form>
                            <h2>Send Message</h2>
                            <div className='inputbox'>
                                <input type='text' name='' required></input>
                                <span>Full Name</span>
                            </div>
                            <div className='inputbox'>
                                <input type='text' name='' required></input>
                                <span>Email</span>
                            </div>
                            <div className='inputbox'>
                                <textarea required></textarea>
                                <span>Type your Message...</span>
                            </div>
                            <div className='contact_button'>
                                <button type='submit'>Send</button>
                            </div>

                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Contact;