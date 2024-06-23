import React, { useRef } from 'react';
import './App.css';

import Header from './Header';
import Title from './Title';
import HomePage from './Visual';
import Bar from './Bar';
import Quote from './Quote';
import SlideImage from './SlideImage';
import Carousel from './Carousel';

const data = [
  { src: './1.png'},
  { src: './2.png'},
  { src: './3.png'},
  { src: './4.png'}
];

function App() {
  const sustainabilityRef = useRef(null);
  const equityRef = useRef(null);
  const resourcesRef = useRef(null);

  const scrollToSection = (sectionId) => {
    let sectionRef;
    switch (sectionId) {
      case 'sustainability-section':
        sectionRef = sustainabilityRef;
        break;
      case 'equity-section':
        sectionRef = equityRef;
        break;
      case 'resources-section':
        sectionRef = resourcesRef;
        break;
      default:
        return;
    }

    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div>
        <Header scrollToSection={scrollToSection} />
        <Title />
        <HomePage />

        <section id="sustainability-section" ref={sustainabilityRef}>
          <Bar
            leftContent={<img src="./leaf.png" className="leaf" />}
            rightContent={
              <div>
                <h2>What is Sustainability?</h2>
                <p id="right-p">
                  Sustainable development allows us to meet our present needs without sacrificing the resources needed for
                  future generations to do the same. <a href="https://www.sustain.ucla.edu/what-is-sustainability/">UCLA</a> explains that "sustainability is the balance between the environment, equity, and economy.  
                  Sustainable practices act under the assumption that these valuable resources are limited and must be used wisely. By focusing on making sustainable choices today, we contribute to leaving a 
                  healthier planet for people in the future. The videos below provide an introductory look into sustainability from different fields and perspectives.
                </p>
              </div>
            }
          />
        </section>

        <div className="banner"></div>

        <div className="video-container">
          <iframe
            className="video"
            width="400"
            height="315"
            src="https://www.youtube.com/embed/zx04Kl8y4dE?si=uYrQ-j5jUiFAu2ZP&amp;start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="video-container">
          <iframe
            className="video"
            width="400"
            height="315"
            src="https://www.youtube.com/embed/B-dCmbViDEQ?si=Sl8LPr6g2y_XjjA1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="video-container">
          <iframe
            className="video"
            width="400"
            height="315"
            src="https://www.youtube.com/embed/enGJyhu6Xr0?si=G5U2C-Zfqg7GzDYU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="banner"></div>

        <section id="equity-section" ref={equityRef}>
          <Bar
            leftContent={<img src="./foodequity.png" className="leaf" />}
            rightContent={
              <div>
                <h2>What is Food Equity?</h2>
                <p id="right-p">
                  Food equity refers to the idea that everyone in a community is able to have access to a range of healthy
                  and affordable food choices. This state is achieved through a balance of land access, fair worker wages,
                  and overall sustainability. Food inequity occurs when a community's food system involves barriers that prevent
                  some or all people from having fair access. Food equity is a fundamental human right which people around the
                  world still do not have because of social, racial, economic, political, and other barriers.
                </p>
              </div>
            }
          />
        </section>

        <div className="banner"></div>

        <div className="info-quote">
          <Quote />
          <SlideImage />
        </div>

        <div className="banner"></div>
        
        <section id="reference-section" ref={resourcesRef}>
          <Bar
            leftContent={<img src="./resources.jpeg" className="leaf" />}
            rightContent={
              <div>
                <h2>Additional Resources</h2>
                <ul id="right-p">
                  <li><a href="https://www.un.org/en/academic-impact/sustainability">The United Nations Sustainability</a></li>
                  <li><a href="https://www.epa.gov/sustainability/learn-about-sustainability">The Environmental Protection Agency: Learn about Sustainability</a></li>
                  <li><a href="https://www.ibm.com/topics/business-sustainability">IBM: What is Sustainability in Business?</a></li>
                  <li><a href="https://sustainability.google/">Google: Sustainability</a></li>
                  <li><a href="https://sustainable.harvard.edu/our-plan/">Harvard's Sustainability Action Plan</a></li>
                </ul>
              </div>
            }
          />
          
        </section>
        
        <Carousel data={data} />
        
        
      </div>
    </>
  );
}

export default App;
