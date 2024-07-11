import React, { useState } from 'react';
import './services.css';

import photo7 from './7.jpg';
import photo8 from './8.jpg';
import photo9 from './9.jpg';
import photo10 from './10.jpg';

function Services() {
    const [activeModalIndex, setActiveModalIndex] = useState(null);

    const openModal = (index) => {
        setActiveModalIndex(index);
    };

    const closeModal = () => {
        setActiveModalIndex(null);
    };

    return (
        <section className="container">
            <h2 className="container__title">Our Services</h2>

            <div className="card__container">
                {[photo7, photo8, photo9, photo10].map((photo, index) => (
                    <article key={index}>
                        <div className="card__product" onClick={() => openModal(index)}>
                            <img src={photo} alt="image" className="card__img" />
                            <div>
                                <h3 className="card__name">
                                    {index === 0 && 'Digital solution 4.0'}
                                    {index === 1 && 'innovation'}
                                    {index === 2 && 'digital transformation'}
                                    {index === 3 && 'strategic and operational management'}
                                </h3>
                                <span className="card__price">
                                    {index === 0 && 'See More'}
                                    {index === 1 && 'See More'}
                                    {index === 2 && 'See More'}
                                    {index === 3 && 'See More'}
                                </span>
                            </div>
                        </div>

                        {activeModalIndex === index && (
                            <div className="modal active-modal" onClick={closeModal}>
                                <div className="modal__card" onClick={(e) => e.stopPropagation()}>
                                    <i className="ri-close-large-line modal__close" onClick={closeModal}></i>
                                    <img
                                        src={photo}
                                        alt="image"
                                        className="modal__img"
                                    />
                                    <div>
                                        <p className="modal__info">
                                            i miss you oussamaaaaaaaaaaaaaaaaaaa<br></br>aaaaaaaa and i love you so much 
                                            heeey boy i'm waitig you every day cause i rally want you 
                                            i enjoy my time when i'm next to you 
                                            i want you to be fine dshgvdf iazgkdi  jkeb dmbie   klm adhzù   klahdùzhé"aoidé^"ùù ahmdizo éiù dkiheofmeéd & "^ùr  ,zehf   mkjhuéo^²éihkjmaebkcaeglnjrhlr kjzezuéubfs lzebpmmefubo^bg' lj  zehbf   ezui^'fifémbzùarz uzekfzu^éfbu^kjlefmazhbmfzmhp"g'hm
                                        </p>

                                    </div>
                                </div>
                            </div>
                        )}
                    </article>
                ))}
            </div>
            <div className='service'>
                    <h2 className='service_tag'>welcome to our sevices</h2>
                    <p className='service_des'>Discover our tailored solutions designed to meet your <br></br>
                    needs with precision and innovation.<br></br>
                    Explore how we can support your journey to success
                    .</p>
            </div>

        </section>
    );
}

export default Services;
