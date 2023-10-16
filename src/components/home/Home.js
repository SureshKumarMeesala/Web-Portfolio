import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BrowserRouter } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import { ExternalLink } from 'react-external-link';



import '../home/home.css';
import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/aos.css';
import '../../assets/css/line-awesome.min.css';
import '../../assets/css/style.css';

import person from '../../assets/images/person.webp';
import projectone from '../../assets/images/project-1.webp';
import projecttwo from '../../assets/images/project-2.webp';
import projectthree from '../../assets/images/project-3.jpg';
import projectfour from '../../assets/images/project-4.webp';
// import blogpostone from '../../assets/images/blog-post-1.jpg';
// import blogposttwo from '../../assets/images/blog-post-2.jpg';
// import blogpostthree from '../../assets/images/blog-post-3.jpg';






export default function Home() {

    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2hi73p9', 'template_5w5j9ih', form.current, 'Ihus0Qj65tKulpvCG')
        .then((result) => {
          console.log(result.text);
          setIsSuccess(true); // Set isSuccess to true on successful submission
        })
        .catch((error) => {
          console.log(error.text);
        });
    };

    
  return (
    <>
    <BrowserRouter>
      {/* <!-- NAVBAR --> */}

    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container flex-lg-column">
            
            <Element className="navbar-brand mx-lg-auto mb-lg-4" name="home">
                <span className="h3 fw-bold d-block d-lg-none text-brand">Suresh Kumar M</span>
                <div className="profile-border d-none d-lg-block">
                <img src={person} className="d-none d-lg-block rounded-circle profile-image" alt="" />
                </div>
            </Element>    
                    
           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">

                    <li className="nav-item">
                        <Link to="home" href="/home" className="nav-link home-nav" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="about" href="/home" className="nav-link About-nav" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="services" href="/home" className="nav-link Services-nav" >Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="work" href="/home" className="nav-link Work-nav" >Work</Link>
                    </li>
                   
                    {/* <li className="nav-item">
                        <Link to="reviews" href="/home" className="nav-link Reviews-nav" >Reviews</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link to="blog" href="/home" className="nav-link Blog-nav" >Blog</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="contact" href="/home" className="nav-link Contact-nav" >Contact</Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    {/* <!-- //NAVBAR -->

    <!-- CONTENT WRAPPER --> */}
    <div id="content-wrapper">

        {/* <!-- HOME --> */}
        <Element name="home"></Element>
        <section id="home" className="full-height px-lg-5">

            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <h1 className="display-4 fw-bold" data-aos="fade-up">I'M A <span className="text-brand">FRONT-END DEVELOPER </span> FROM VIZAG, INDIA</h1>
                        <p className="lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300">I am Suresh Kumar M, And I am with a relentless passion for crafting extraordinary digital experiences. With 5 years of hands-on experience, I have honed my skills in both job-based roles and exciting contractual engagements, fostering a diverse portfolio of captivating projects.</p>

                        <div data-aos="fade-up" data-aos-delay="600">
                            <div className="button-border">
                            <button><Link to="work" id='btn-explore' className="btn btn-explore me-3" >Explore My Work</Link></button>
                            </div>
                            <Link href="tel:+917396445564" className="link-custom">Call: +91 739 644 5564</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        {/* <!-- //HOME --> 

        <!-- ABOUT --> */}
        <Element name="about"></Element>
        <section id="about" className="full-height px-lg-5">
            <div className="container">

                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className=" heading">ABOUT</h6>
                        <h1 className='sub-heading'>My Education & Experiance</h1>
                    </div>
                </div>



                <div className="row gy-4">

                         <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">Education</h3>     
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div className="about-middle">
                                    <div className="bg-base p-4 rounded-4 shadow-effect-about about-inner">
                                        <h4>Graduate in BCom</h4>
                                        <p className="text-brand mb-2">GITAM University (2015)</p>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="col-md-6" data-aos="fade-up">
                             <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div className="about-middle">
                                    <div className="bg-base p-4 rounded-4 shadow-effect-about about-inner">
                                        <h4>CS50x</h4>
                                        <p className="text-brand mb-2">Cambridge, Massachusetts (2022)</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    
                </div>



                <h3 className="mb-4 education-text" data-aos="fade-up" data-aos-delay="300"> Experiance</h3>  
                <div className="row gy-4">

                            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div className="about-middle">
                                    <div className="bg-base p-4 rounded-4 shadow-effect-about about-inner">
                                        <h4>Sr Web Developer</h4>
                                        <p className="text-brand mb-2">Oz Digital Pvt Ltd ( Part Time ) (May 2023 - Present)</p>
                                        <p className="mb-0"> Built highly functional web applications using JavaScript, HTML, and CSS. </p>
                                        <p className="mb-0"> Developed application UIs via emerging front-end technologies. </p>
                                        <p className="mb-0"> Integrated UI features complying with prescribed code standards and technical design guidelines. </p>
                                        <p className="mb-0"> Experience with HTML, CSS, JavaScript, React, Wordpress, PHP, Git  </p>
                                        <p className="mb-0"> Provided front-end website development using WordPress, Hubspot, and other editing software. </p>
                                        <p className="mb-0"> Engaged with clients to plan, optimize and repair site issues and queries. </p>
                                        <p className="mb-0"> Implemented Google-based SEO and ad campaigns to meet budget specifications. </p>
                            
                                
                                    </div>
                                </div>
                            </div>

                            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div className="about-middle">
                                    <div className="bg-base p-4 rounded-4 shadow-effect-about about-inner">
                                        <h4>UI/UX Developer</h4>
                                        <p className="text-brand mb-2">Solid Online International (April 2022 to Jan 2023)</p>
                                        <p className="mb-0"> Built highly functional web applications using JavaScript, HTML, and CSS. </p>
                                        <p className="mb-0"> Developed application UIs via emerging front-end technologies. </p>
                                        <p className="mb-0"> Integrated UI features complying with prescribed code standards and technical design guidelines. </p>
                                        <p className="mb-0"> Experience with HTML, CSS, JavaScript, React, Wordpress, PHP, Git  </p>
                                        <p className="mb-0"> Provided front-end website development using WordPress, Hubspot, and other editing software. </p>
                                        <p className="mb-0"> Engaged with clients to plan, optimize and repair site issues and queries. </p>
                                        <p className="mb-0"> Implemented Google-based SEO and ad campaigns to meet budget specifications. </p>
                                    
                                    </div>
                                </div>
                            </div>


                            <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                                <div className="about-middle">
                                    <div className="bg-base p-4 rounded-4 shadow-effect-about about-inner">
                                        <h4>Web Developer</h4>
                                        <p className="text-brand mb-2">Taashee Linux Services Pvt Ltd (Jan 2019 to Feb 2022)</p>
                                        <p className="mb-0"> Built highly functional web applications using JavaScript, HTML, and CSS. </p>
                                        <p className="mb-0"> Developed application UIs via emerging front-end technologies. </p>
                                        <p className="mb-0"> Integrated UI features complying with prescribed code standards and technical design guidelines. </p>
                                        <p className="mb-0"> Experience with HTML, CSS, JavaScript, React, Wordpress, PHP, Git  </p>
                                        <p className="mb-0"> Web Applications like Wordpress CMS, PrestaShop CMS, Hubspot CRM, Dolibarr CRM, Vtiger CRM, OpenCart CMS, Own Cloud, Gibbon LMS, and Moodle LMS. </p>
                                        <p className="mb-0"> Engaged with clients to plan, optimize and repair site issues and queries. </p>
                                        <p className="mb-0"> Communicated with product managers and UX designers to translate project requirements and business objectives into polished user interfaces. </p>
                                    </div>
                                </div> 
                            </div>
                </div>
            </div>
        </section>

        {/* <!-- SERVICES --> */}
        <Element name="services"></Element>
        <section id="services" className="full-height px-lg-5">
            <div className="container">

                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className=" heading">SERVICES</h6>
                        <h1 className='sub-heading'>Services That I Provide</h1>
                    </div>
                </div>

                <div className="row gy-4">

                    <div className="col-md-4 " data-aos="fade-up" data-aos-delay="300">
                        <div className="service-middle">
                            <div className="service p-4 bg-base rounded-4 shadow-effect service-inner">
                                <div className="iconbox rounded-4">
                                    <i className="las la-pencil-ruler"></i>
                                </div>
                                <h5 className="mt-4 mb-2">Web Development</h5>
                                <p>Expert web development services, building responsive and user-friendly websites. Utilizing cutting-edge technologies to deliver seamless digital solutions that elevate your online presence.</p>
                                {/* <Link href="#" className="link-custom">Learn More</Link> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 " data-aos="fade-up" data-aos-delay="600">
                        <div className="service-middle">
                            <div className="service p-4 bg-base rounded-4 shadow-effect service-inner">
                                <div className="iconbox rounded-4">
                                    <i className="las la-laptop-code"></i>
                                </div>
                                <h5 className="mt-4 mb-2">SEO / Digital Marketing</h5>
                                <p>Empowering businesses with SEO and Digital Marketing expertise. Crafted with precision and creativity, I drive results that exceed expectations and amplify online presence.</p>
                                {/* <Link href="#" className="link-custom">Learn More</Link> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 " data-aos="fade-up" data-aos-delay="600">
                        <div className="service-middle">
                            <div className="service p-4 bg-base rounded-4 shadow-effect service-inner">
                                <div className="iconbox rounded-4">
                                    <i className="las la-laptop-code"></i>
                                </div>
                                <h5 className="mt-4 mb-2">Open Source CRM/ERP</h5>
                                <p>Unlock business potential with Open Source CRM/ERP solutions. Streamlined operations, seamless integration, and cost-effective tools for efficient management and growth acceleration.</p>
                                {/* <Link href="#" className="link-custom">Learn More</Link> */}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        {/* <!-- SERVICES -->


        <!-- WORK --> */}
        <Element name="work"></Element>
        <section id="work" className="full-height px-lg-5">
            <div className="container">

                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className=" heading">WORK</h6>
                        <h1 className='sub-heading'>My Recent Projects</h1>
                    </div>
                </div>

                <div className="row gy-4">

                    <div className="col-md-6 " data-aos="fade-up">
                        <div className="work-middle">
                            <div className="card-custom rounded-4 bg-base shadow-effect  work-inner">
                                <div className="card-custom-image rounded-4">
                                    <img className="rounded-4" src={projectone} alt="" />
                                </div>
                                <div className="card-custom-content p-4">
                                    <h4>Cav Assessment</h4>
                                    <p>Cav Assessment is a Route Assessment tool to manage Auto Pilot Vehicle I worked on this project for as a Front-End Developer </p> <br /> <br />
                                    <div className='used-tech'>
                                    <h6>Technologies Used</h6><br />
                                    <p> React Js</p><br />
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="work-middle">
                            <div className="card-custom rounded-4 bg-base shadow-effect  work-inner">
                                <div className="card-custom-image rounded-4">
                                    <img className="rounded-4" src={projecttwo} alt="" />
                                </div>
                                <div className="card-custom-content p-4">
                                    <h4>Cav GUI</h4>
                                    <p>Cav GUI is a Building Electricity management tool to manage a building electricity in a single DashboardI worked on this project for as a Front-End Developer  </p> <br /> <br />
                                    <div className='used-tech'>
                                    <h6>Technologies Used</h6><br />
                                    <p> React Js</p><br />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6" data-aos="fade-up">
                        <div className="work-middle">
                            <div className="card-custom rounded-4 bg-base shadow-effect  work-inner">
                                <div className="card-custom-image rounded-4">
                                    <img className="rounded-4" src={projectthree} alt="" />
                                </div>
                                <div className="card-custom-content p-4">
                                    <h4>Solid Online Website</h4>
                                    <p>This is the Solid Online Company Website one of my best works <br /> <br />
                                    <div className='used-tech'>
                                    <h6>Technologies Used</h6><br />
                                    <p> Wordpress</p><br />
                                    </div>
                                    <ExternalLink href="https://www.solidonline.com/"><b>Learn More</b></ExternalLink> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="work-middle">
                            <div className="card-custom rounded-4 bg-base shadow-effect  work-inner">
                                <div className="card-custom-image rounded-4">
                                    <img className="rounded-4" src={projectfour} alt="" />
                                </div>
                                <div className="card-custom-content p-4">
                                     <h4>Cleanovate</h4>
                                    <p>Cleanovate is a Company website from Australia one of my best works <br /> <br /> 
                                    <div className='used-tech'>
                                    <h6>Technologies Used</h6><br />
                                    <p> Wordpress</p><br />
                                    </div>
                                    <ExternalLink href="https://cleanovate.com.au/"><b>Learn More</b></ExternalLink> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>

              

            </div>
        </section>
        {/* <!-- //WORK --> */}

        
        {/* <!-- //ABOUT -->

        <!-- REVIEWS --> */}
        {/* <Element name="reviews"></Element>
        <section id="reviews" className="full-height px-lg-5">
            <div className="container">

                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className=" heading">REVIEWS</h6>
                        <h1 className='sub-heading'>What our subscribers say</h1>
                    </div>
                </div>

                <div className="row gy-4">

                    <div className="col-md-4" data-aos="fade-up">
                        <div className="reviews-middle">

                            <div className="review shadow-effect bg-base p-4 rounded-4  reviews-inner">
                                <div className="text-brand h5">
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                </div>
                                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quae facilis fugiat molestias ab illum excepturi, qui optio modi asperiores, delectus maiores!</p>
                                <div className="person">
                                    <h5 className="mb-0">Jon Doe</h5>
                                    <p className="mb-0">Twitter</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="reviews-middle">

                            <div className="review shadow-effect bg-base p-4 rounded-4  reviews-inner">
                                <div className="text-brand h5">
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                </div>
                                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quae facilis fugiat molestias ab illum excepturi, qui optio modi asperiores, delectus maiores!</p>
                                <div className="person">
                                    <h5 className="mb-0">Jon Doe</h5>
                                    <p className="mb-0">Twitter</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                        <div className="reviews-middle">

                            <div className="review shadow-effect bg-base p-4 rounded-4  reviews-inner">
                                <div className="text-brand h5">
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                    <i className="las la-star"></i>
                                </div>
                                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quae facilis fugiat molestias ab illum excepturi, qui optio modi asperiores, delectus maiores!</p>
                                <div className="person">
                                    <h5 className="mb-0">Jon Doe</h5>
                                    <p className="mb-0">Twitter</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section> */}
        {/* <!-- //REVIEWS -->

        <!-- BLOG --> */}
        {/* <Element name="blog"></Element>
        <section id="blog" className="full-height px-lg-5">
            <div className="container">

                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className=" heading">BLOG</h6>
                        <h1 className='sub-heading'>My BLog Posts</h1>
                    </div>
                </div>

                <div className="row gy-4">

                    <div className="col-md-4" data-aos="fade-up">
                        <div className="blog-middle">
                            <div className="card-custom rounded-4 bg-base shadow-effect  blog-inner">
                                <div className="card-custom-image rounded-4">
                                    <img className="rounded-4" src={blogpostone} alt="" />
                                </div>
                                <div className="card-custom-content p-4">
                                    <p className="text-brand mb-2">20 Dec, 2022</p>
                                    <h5 className="mb-4">Design a creative landing page using Bootstrap 5</h5>
                                    <Link href="#" className="link-custom">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="blog-middle">
                            <div className="card-custom rounded-4 bg-base shadow-effect  blog-inner">
                                <div className="card-custom-image rounded-4">
                                    <img className="rounded-4" src={blogposttwo} alt="" />
                                </div>
                                <div className="card-custom-content p-4">
                                    <p className="text-brand mb-2">20 Dec, 2022</p>
                                    <h5 className="mb-4">Design a creative landing page using Bootstrap 5</h5>
                                    <Link href="#" className="link-custom">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                        <div className="blog-middle">
                            <div className="card-custom rounded-4 bg-base shadow-effect  blog-inner">
                                <div className="card-custom-image rounded-4">
                                    <img className="rounded-4" src={blogpostthree} alt="" />
                                </div>
                                <div className="card-custom-content p-4">
                                    <p className="text-brand mb-2">20 Dec, 2022</p>
                                    <h5 className="mb-4">Design a creative landing page using Bootstrap 5</h5>
                                    <Link href="#" className="link-custom">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div data-aos="fade-up" data-aos-delay="600" className="button-col">
                                <div className="button-border">
                                <Link href="#work" className="btn btn-brand me-3">Check More</Link>
                                </div>
                        </div>

            </div>
        </section> */}
        {/* <!-- //BLOG -->

        <!-- CONTACT --> */}
        <Element name="contact"></Element>
        <section id="contact" className="full-height px-lg-5">
            <div className="container">

                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 pb-4" data-aos="fade-up">
                        <h6 className=" heading">CONTACT</h6>
                        <h1 className='sub-heading'>Interested in working together? Let's talk
                        </h1>
                    </div>

                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">

                        {isSuccess ? (
                                <div className='thankyou-message'>
                                <p>Thanks for Contact Me, Will get in touch in no time</p>
                                {/* You can add any additional content or redirection logic here */ }
                                </div>
                                      ) : (
                                        <div></div>
                                )}
                        <form action="#" className="row g-lg-3 gy-3" ref={form} onSubmit={sendEmail}>
                            <div className="form-group col-md-6">
                                <div className="contact-middle">
                                    <div className="contact-inner">
                                        <input type="text" name="user_name" className="form-control" placeholder="Enter your name" required />
                                    </div> 
                                </div>    
                            </div>
                            <div className="form-group col-md-6">
                            <div className="contact-middle">
                                    <div className="contact-inner">
                                <input type="email" name="user_email" className="form-control" placeholder="Enter your email" required />
                                </div> 
                                </div>  
                            </div>
                            <div className="form-group col-12">
                            <div className="contact-middle">
                                    <div className="contact-inner">
                                <input type="text" name="user_subject" className="form-control" placeholder="Enter subject" />
                                </div> 
                                </div>  
                            </div>
                            <div className="form-group col-12">
                            <div className="contact-middle">
                                    <div className="contact-inner">
                                <textarea name="message" rows="4" className="form-control" placeholder="Enter your message" required />
                                </div> 
                                </div>  
                            </div>
                            <div className="form-group col-12 d-grid">
                            <div className="contact-middle">
                                    <div className="contact-inner">
                                <button type="submit" value="Send" className="btn btn-brand contact-button">Contact me</button>
                                </div> 
                                </div>  
                            </div>
                        </form>
                      

                    </div>
                </div>

             


            </div>
        </section>
        {/* <!-- //CONTACT -->

        <!-- FOOTER --> */}
        <footer className="py-5 px-lg-5">
            <div className="container">
                <div className="row gy-4 justify-content-between">
                    <div className="col-auto">
                        <p className="mb-0">Developed by <span className='text-brand'><strong>Suresh Kumar M</strong></span> With <span className='text-brand'><strong>React</strong></span></p>
                    </div>
                    <div className="col-auto">
                        <div className="social-icons">
                            <ExternalLink href="https://github.com/SureshKumarMeesala" aria-label="Read more about my Github"> <i className="lab la-github"></i></ExternalLink>
                            <ExternalLink href="https://www.linkedin.com/in/suresh-kumar-meesala/" aria-label="Read more about my Linkedin"> <i className="lab la-linkedin"></i></ExternalLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- //FOOTER --> */}

    </div>
    {/* <!-- //CONTENT WRAPPER --> */}
    
    </BrowserRouter>
    </>
  )
}

