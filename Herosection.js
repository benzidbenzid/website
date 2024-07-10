import React, { useEffect } from 'react';
import './herosection.css';

import photo2 from './2.jpg';
import photo3 from './3.jpg';
import photo4 from './4.jpg';
import photo5 from './5.jpg';





function Herosection(){
    //this is js functions 

    useEffect(() => {
        const nextButton = document.getElementById('next');
        const prevButton = document.getElementById('prev');
        const carousel = document.querySelector('.carousel');
        const listHTML = document.querySelector('.carousel .list');
        const seeMoreButtons = document.querySelectorAll('.seeMore');
        const backButton = document.getElementById('back');
      
        let unAcceppClick; // Declare unAcceppClick here
      
        const showSlider = (type) => {
          const nextButton = document.getElementById('next');
          const prevButton = document.getElementById('prev');
          const carousel = document.querySelector('.carousel');
          const listHTML = document.querySelector('.carousel .list');
      
          // Disable buttons during transition
          nextButton.disabled = true;
          prevButton.disabled = true;
      
          // Get current items
          const items = document.querySelectorAll('.carousel .list .item');
      
          // Move items based on type (next or prev)
          if (type === 'next') {
            const firstItem = items[0];
            listHTML.appendChild(firstItem);
          } else {
            const lastItem = items[items.length - 1];
            listHTML.prepend(lastItem);
          }
      
          // Enable buttons after transition (adjust timing as needed)
          setTimeout(() => {
            nextButton.disabled = false;
            prevButton.disabled = false;
          }, 1000); // Adjust timing as necessary
        };
      
        const showDetail = () => {
          carousel.classList.remove('next', 'prev');
          carousel.classList.add('showDetail');
        };
      
        const hideDetail = () => {
          carousel.classList.remove('showDetail');
        };
      
        // Attach event listeners
        nextButton.addEventListener('click', () => showSlider('next'));
        prevButton.addEventListener('click', () => showSlider('prev'));
        seeMoreButtons.forEach((button) => {
          button.addEventListener('click', showDetail);
        });
        backButton.addEventListener('click', hideDetail);
      
        // Clean up event listeners when component unmounts
        return () => {
          nextButton.removeEventListener('click', () => showSlider('next'));
          prevButton.removeEventListener('click', () => showSlider('prev'));
          seeMoreButtons.forEach((button) => {
            button.removeEventListener('click', showDetail);
          });
          backButton.removeEventListener('click', hideDetail);
      
          // Clear the timeout when component unmounts
          clearTimeout(unAcceppClick);
        };
      }, []
    ); // <-- Corrected placement of the closing square bracket
      
      
      

    return(
    <>
    <div class="carousel">
        <div class="list">
            <div class="item">
                <img src={photo2}></img>
                <div class="introduce">
                    <div class="title">First Product</div>
                    <div class="topic">ARANER</div>
                    <a class="seeMore new">SEE MORE 
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div class="detail">
                    <div class="title">ARANER</div>
                    <div class="des">
                        
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                </div>
            </div>

            <div class="item">
                <img src={photo3}></img>
                <div class="introduce">
                    <div class="title">Second Product</div>
                    <div class="topic">ARADOM</div>
                    <a class="seeMore new">SEE MORE 
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div class="detail">
                    <div class="title">ARADOM</div>
                    <div class="des">
                     
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                </div>
            </div>

            <div class="item">
                <img src={photo4}></img>
                <div class="introduce">
                    <div class="title">Third Product</div>
                    <div class="topic">ARADIS</div>
                    <a class="seeMore new">SEE MORE 
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div class="detail">
                    <div class="title">ARADIS</div>
                    <div class="des">
                       
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                </div>
            </div>

            <div class="item">
                <img src={photo5}></img>
                <div class="introduce">
                    <div class="title">Fourth Product</div>
                    <div class="topic">ARAVES</div>
                    <a class="seeMore new">SEE MORE 
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div class="detail">
                    <div class="title">ARAVES</div>
                    <div class="des">
                        
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti impedit illo, accusantium in eaque nam quia adipisci aut distinctio porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus architecto dolores modi ducimus facilis quas voluptatibus! Tempora ratione accusantium magnam nulla tenetur autem beatae.
                    </div>
                </div>
            </div>


    

            
        </div>
        <div class="arrows">
            <button id="prev">PREV</button>
            <button id="next">next</button>
            <a id="back" class="seeMore new">SEE ALL 
                <span></span>
                <span></span>
               <span></span>
                <span></span>
            </a>
            
        </div>
    </div>
    </>
    );
}

export default Herosection;