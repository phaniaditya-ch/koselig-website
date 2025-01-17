import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () =>{

  function img_zoom(){

  }

    return <>
    
    <div className='background container'> 
    <div className='container'>
    <h1 className='header'>About Us</h1>
    <div className="page">

  
  We here at koselig allow our guests to experience specality coffee and gourmet dishes, along with exqusite and artistic ambiance.
  
  we are a place where you can sit down and enjoy that tailor-made cup of coffee. 

 
  We offer a delicious variety of coffee from Safehouse Coffee made by our professionally trained baristas. 
  We have everything from classNameic coffee to our house made specialty dishes.  
  
   You can complete your coffee with one of our delicious sweet treats made by our very own baker. 
   We look forward to serving you at koselig!

</div>


<div className="Spectext">
<h2 className='spectext-header'>Our Specialities</h2>
</div>


<div className="specrow">

<div className="speciality img-sp">

  <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/318817203_196465202947990_955518760378321807_n.jpg?stp=c0.109.1344.1344a_dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=VZjDL4sassgAX_ljq4d&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfA8ET-_Q9HGS6oY6Iy92TUDXj7omFMbXG4CiiLJMOYWRg&oe=63CA1AFD" 
  alt="pasta puttanesca" width="400" height="400" />



</div>
<div className="speciality img-sp">

  <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/318123549_195970699664107_330513917629792367_n.jpg?stp=c0.112.1349.1349a_dst-jpg_s851x315&_nc_cat=105&ccb=1-7&_nc_sid=da31f3&_nc_ohc=fl0273voZbUAX9KJoZn&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfAgrFofeaiWsK7q15c_KpiSucZosKJeqDFvIk8w5Mj_6g&oe=63CA4915" 
  alt="mushroom cuppaccino" width="400" height="400" />



</div>
<div className="speciality img-sp">

  <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/318169186_196017792992731_3669119908439744861_n.jpg?stp=c0.112.1349.1349a_dst-jpg_s851x315&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_ohc=cr4iINSFpcAAX9K096x&tn=xMHyFYDXD06hEBwv&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfALWJPjNeOgXXJib9AgIIF7Hik1Lu6TmAsbDoA05VMKCA&oe=63C9B2E4" 
  alt="hot burrata" width="400" height="400" />



</div>

</div>



<ul className="contactus">
<h2>Contact Us:</h2>

<li><i className='fa fa-phone' />+91 95378 58025</li>
<li><i className='fab fa-instagram' /><a
              href="https://www.instagram.com/koseligcoffee/?fbclid=IwAR3u9OrCjNBN5222-14CvE5FlPd84Dv8bI4SVD0rzhOKHjFdxoinZsEAGOo"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
            >
    @koseligcoffee</a></li>
<li><i className='fa fa-map-marker' aria-hidden='true' /><a 
  href="https://www.google.co.in/maps/place/Koselig/@21.1580383,72.7673382,17z/data=!3m1!4b1!4m5!3m4!1s0x3be04d2c97517c05:0x7b5178f862c3f425!8m2!3d21.1580333!4d72.7695323?hl=en&authuser=0"
  target='_blank'
  rel='noreferrer'
  aria-label='location'
  >
    @koseligcoffee</a></li>
</ul>



</div>
</div>
    </>
}

export default About ;