import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../App.css';
import Pic_phd from '../assets/pic_phd.JPG';
import { Link } from 'react-router-dom';
import Tick from '../assets/tick.png';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';


// Reusable FAQ Item component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <h3 onClick={toggleFaq} style={{ cursor: 'pointer' }}>
        {question}
      </h3>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        {Array.isArray(answer) ? (
          <ul>
            {answer.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{answer}</p>
        )}
      </div>
    </div>
  );
};


const MoreInfo = ({ summary, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMoreInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="more-info">
      <h3 onClick={toggleMoreInfo} style={{ cursor: 'pointer' }}>
        More
      </h3>
      <div className={`more-answer ${isOpen ? 'open' : ''}`}>
        {isOpen && <p>{details}</p>}
      </div>
    </div>
  );
};

const Home = () => {
  const faqs = [
    {
      question: 'My Vision',
      answer:
        'To be a globally recognized leader in sustainable agriculture research and consulting, providing cutting-edge solutions that benefit both animals and people.',
    },
    {
      question: 'My Mission',
      answer: [
        'To promote sustainable agriculture by delivering innovative research and consulting services that improve animal welfare, production efficiency, and environmental impact.',
      ],
    },
  ];

  const moreInfoDetails = 'With over 30 years of experience in animal science and livestock research, I have the expertise to deliver innovative solutions to industry challenges. Focusing on sustainable agriculture, I provide research and consulting services to help clients improve animal welfare,';

  return (
    <div>
      
      <section id="home" className='home'>
        <div className="contents">
          <div className="picture">
            <div className="title">
              <h1>Who is me?</h1>
              <p>
                I'm Ayele Abebe Dr. I am a Livestock researcher
                <br />
                and an animal scientist especially on Sheep and Goats.
                <br />
              </p>

              {/* MoreInfo component */}
              <MoreInfo summary="More" details={moreInfoDetails} />

              <Link to="#experience">Browse CV</Link>
            </div>

            <img src={Pic_phd} alt="phd" />
          </div>
        </div>

        <div className="space">
          <div className="items">
            <h2>Company Name</h2>
            <p>1 years</p>
            <p>Experience</p>
          </div>
          <div className="items">
            <h2>Company Name</h2>
            <p>1 years</p>
            <p>Experience</p>
          </div>
          <div className="items">
            <h2>Company Name</h2>
            <p>1 years</p>
            <p>Experience</p>
          </div>
        </div>

        <div className="contents-2">
          <h1>A lifelong commitment to animal science</h1>
          <div className="picture-2">
            <img src={Pic_phd} alt="pic" />
            <div className="text">
              <h1>
                Promoting sustainable <br /> agriculture through <br />
                innovative research
              </h1>
              <p>
                With over 30 years of experience in animal science and <br />
                livestock research, I have the expertise to deliver <br />
                innovative solutions to industry challenges. Focusing on <br />
                sustainable agriculture, I provide research and consulting <br />
                services to help clients improve animal welfare,
                <br />
                production efficiency, and environmental impact.
              </p>

              <div className="faq-section">
                {faqs.map((faq, index) => (
                  <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='experience' id='experience'>
          <div className='full'>
          <Navbar />
          <div className='research-desc'>
            
            <div className='title-rec'>
            <h1>Expertise in Animal Science <br />and Agriculture</h1>
            </div>
            <div className='para'>
              <p>My skills are rooted in a deep understanding of animal <br />
                science and sustainable agriculture, including animal <br />
                husbandry, livestock research, and animal nutrition. With a <br />
                focus on innovation and sustainability, I offer research and <br />
                consulting services that deliver practical, effective <br />
                solutions.
              </p>
            </div>
          </div>

          <div className='grids'>
            <div className='grid'>
              <p className='duration'>1999-2004: Animal <br />
                Husbandry Specialist
              </p>
              <h2>Ministry of <br />
              Agriculture <br />
              and Rural <br />
              Development
              </h2>
              <p>
              Provided technical <br />
              assistance to farmers <br />
              and livestock<br />
              producers, focusing <br />
              on animal health <br />
              and nutrition
              </p>
            </div>

            <div className='grid'>
              <p className='duration'>2004-2010: Livestock <br />
              Researcher

              </p>
              <h2>Ethiopian <br />
              Institute of <br />
              Agricultural <br />
              Research
              </h2>
              <p>
              Conducted research <br />
              on livestock genetics <br />
              and breeding, with a<br />
              focus on improving <br />
              productivity and <br />
              adaptability
              </p>
            </div>

            <div className='grid'>
              <p className='duration'>2010-2015: <br />
              Sustainable <br />
              Agriculture Advisor

              </p>
              <h2>Ethiopian <br />
              Agricultural <br />
              Transformation <br />
              Agency
              </h2>
              <p>
              Advised government <br />
              agencies and NGOs <br />
              on sustainable<br />
              agriculture policies <br />
              and practices, with a <br />
              focus on smallholder <br />
              farmers
              </p>
            </div>

            <div className='grid'>
              <p className='duration'>2015-present: <br />
              Research Consultant 
          
              </p>
              <h2>International <br />
              Livestock <br />
              Research <br />
              Institute
              </h2>
              <p>
              Provided research <br />
              and consulting <br />
              services to clients<br />
              across the globe, <br />
              helping to develop <br />
              and implement <br />
              sustainable <br />
              agriculture <br />
              strategies and <br />
              practices
              </p>
            </div>
          </div>
          <div className='research-desc-2'>
            <h1>
              Leading Sustainable Agriculture Research and Consulting
            </h1>
            <div className='research-desc-2-para'>
            <p>I am a leading expert in sustainable agriculture research and consulting, with over 30 years of experience in animal science and livestock research. I offer a range of services to help clients improve animal welfare, production efficiency, and environmental impact, all while promoting sustainable agriculture practices. Whether you are a smallholder farmer or a large-scale producer, I can help you meet your goals and achieve success in the industry.
            Animal Husbandry
            Expertise in animal husbandry, including animal health, welfare, and nutrition, with a focus on improving productivity and efficiency while maintaining animal welfare.
            
            </p>
            </div>
            <div className='boxes-1'>
              <div className='box'>
                <h2>Animal Husbandry</h2>
                <p>Expertise in animal husbandry, including animal health, welfare, and nutrition, with a focus on improving productivity and efficiency while maintaining animal welfare.</p>
                <Link to="">Read More</Link>
              </div>
              <div className='box'>
                <h2>
                Livestock Research</h2>
                <p>Deep understanding of livestock research, with expertise in genetics, breeding, and productivity.</p>
                <Link to="">Read More</Link>
              </div>
              
            </div>
            <div className='boxes-2'>
              <div className='box'>
                <h2>Sustainable Agriculture</h2>
                <p>Experience in sustainable agriculture, including smallholder farmer support, crop-livestock integration, and environmental sustainability.</p>
                <Link to="">Read More</Link>
              </div>
              <div className='box'>
                <h2>
                Animal Nutrition</h2>
                <p>Expertise in animal nutrition, including feed formulation, ration balancing, and feed evaluation, with a focus on improving productivity and efficiency.</p>
                <Link to="">Read More</Link>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className='gallery' id='gallery'>
        <div>
        
          <div className='gallery-desc'>
            <div className='gallery-box'>
              <h1>Examples of my work</h1>
            </div>
            <div className='gallery-box'>
              <p>I have worked on a variety of projects throughout my career, including livestock genetic improvement, sustainable agriculture policy development, and animal nutrition research. I have also provided research and consulting services to clients across the globe, including government agencies, NGOs, and private sector entities.</p>
            </div>
            
          </div>
          <p>jgkeojeok</p>
        
       </div>

      </section>

      <section className='pricing' id='pricing'>
        <div>
            
            <div className="price-full">
                <div className="price-text">
                    <h1>Research and Consulting Services</h1>
                    <div className="price-para">
                        <p>I offer tailored pricing packages to meet the specific needs of my clients. Whether you are a smallholder farmer or a large-scale producer, I can provide research and consulting services that help you meet your goals and achieve success in the industry.</p>
                    </div>
                    
                </div>
                <div className="prices">
                    <div className="price">
                        <h2>Basic Package</h2>
                        <p>For Small Projects</p>
                        <p>______________</p>
                        <h1>$49.99</h1>
                        <p>Per Project</p>
                        <Link to=''>Get Started</Link>
                    </div>
                    <div className="price-select">
                        <h2>Medium Package</h2>
                        <p>For Medium Projects</p>
                        <p>______________</p>
                        <h1>$79.99</h1>
                        <p>Per Project</p>
                        <Link to=''>Get Started</Link>
                    </div>
                    <div className="price">
                        <h2>Expert Package</h2>
                        <p>For Big Projects</p>
                        <p>______________</p>
                        <h1>$99.99</h1>
                        <p>Per Project</p>
                        <Link to=''>Get Started</Link>
                    </div>
                </div>
            </div>
            
        </div>
      </section>

      <section className='contact' id='contact'>
        <div >
        
        <div className='contact-full'>
            <div className='contact-container'>
              <img src={Pic_phd} alt='pic' />
              <div className='contact-title'>
                <h1>Get in Touch Today</h1>
                <p>Get in Touch Today
                If you are interested in learning more about my 
                research and consulting services, please do not 
                hesitate to get in touch. I offer tailored 
                solutions to meet your specific needs, and I 
                am always happy to discuss how my expertise can 
                help you achieve your goals.</p>
                <ul>
                  <li><img src={Tick} alt='tick' />Expert advice on animal science</li>
                  <li><img src={Tick} alt='tick' />Tailored research and consulting services</li>
                  <li><img src={Tick} alt='tick' />Global expertise with a local focus</li>
                </ul>
                <div className='contact-btn'>
                  <Link to="">Get In Touch</Link>
                </div>
                <div className='social-media'>
                  <Link to=''><img src={Facebook} alt='facebook' /></Link>
                  <Link to=''><img src={Instagram} alt='instagram' /></Link>
                  <Link to=''><img src={Twitter} alt='Twitter' /></Link>
                </div>
                
              </div>
            </div>
            
            <div className='contact-promo'>
              <h1>Let's work together to promote sustainable agriculture</h1>
              <div className='contact-promo-btn'>
                <Link to=''>Let's Talk</Link>
              </div>
            </div>
            
          </div>
          
      </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
