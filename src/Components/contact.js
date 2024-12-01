import { stripBasename } from "@remix-run/router";
import { useState , useEffect } from "react"; //rafce
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

import { ToastContainer, toast , Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getPublicUrl = (path) => `${process.env.PUBLIC_URL}${path}`;

export default function Contact(){

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');


  ////// CONFETTI EFFECT

  const triggerConfetti = () => {
    const duration = 10 * 1000; // Duration of the confetti in milliseconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    // Helper function to generate a random number in a range
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Emit confetti from two different origins
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250); // Repeat every 250ms

}


// Default confetti settings
var defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['#FFE400', '#FFBD00', '#E89400', '#FFCA6C', '#FDFFB8']
  };
  
  // Reusable shoot function
  function shootConfetti(particleCount, scalar, shapes) {
    confetti({
      ...defaults,
      particleCount: particleCount,
      scalar: scalar,
      shapes: shapes
    });
  }

////////////////////////////



   const submitHandler = (e)=>{
       e.preventDefault();

       const serviceId = "service_a2izium"
       const templateId = "template_jf68bwg"
       const publicKey = "9HJPW8aOSunvSeuR1"

       const templateParams = {
           from_name : name,
           from_email : email,
           to_name : 'Praveen B',
           message : message,
       };
       toast('⏱ Sending Email', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
        

       emailjs.send(serviceId , templateId , templateParams , publicKey)
        .then((response)=>{
            toast.dismiss()
            toast('✅ Message Sent Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            
                });
                triggerConfetti();
            console.log("email sent successfully!" , response);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error)=>{
            toast.dismiss()
            toast.error("❌ failed", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                progress: undefined,
              });
            console.log("error sending email:", error);
        })

   }

   const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add a scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        // Set the visibility state based on scroll position
        if (window.pageYOffset > 100) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        // Scroll to the top of the page
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };



  

    return(
        <section className="mb-xl-5 mb-4 pt-3 pb-5 contact_us">
       

        <div className="container">
            <div className="row">
                <div className="col-xl-2 col-0"></div>
                <div className="col-xl-8 col-12">
                    <div>
                        <h2 id="contact_heading" className="text-center heading">Contact Me</h2>
                        <div className="row py-5 ">
                            <div className="col-xl-5 col-12">
                                <div className="d-flex align-items-center justify-content-start p-3 my-3 rounded dark_mode_bg_border" style={{gap: '14px'}}>
                                    <div className="align-self-center" >
                                        <img src={getPublicUrl("/assests/img/svg/phone-call.png")} style={{height : '40px' , width : '37px'}} alt=""/>
                                    </div>
                                    <div className="align-self-center ">
                                        <h4 className="m-0">Call Me</h4>
                                        <p className="m-0">+91 9342933803</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-start  p-3 my-3 rounded dark_mode_bg_border" style={{gap: '14px'}}>
                                    <div className="align-self-start">
                                        <img src={getPublicUrl("/assests/img/svg/message.png")}  style={{height : '40px' , width : '36px'}} alt=""/>
                                    </div>
                                    <div className="align-self-center">
                                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdHGvdcLVbVPQjbpWtVQNjdZGqFQwFVWXCXlQprKWtVCCqCpVbLRSDcHmdgbJpbcTZnjDCl" className="text-decoration-none" target="_blank">
                                        <h4 className="m-0 email_color" style={{color:'#d2d2d2'}}>Email</h4>
                                        <p  className="m-0">praveenbaskar27@gmail.com</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-start  p-3 my-3 rounded dark_mode_bg_border" style={{gap: '14px'}}>
                                    <div className="align-self-start">
                                        <img src={getPublicUrl("/assests/img/svg/global-communication.png")}  style={{height : '40px' , width : '40px'}}  alt=""/>
                                    </div>
                                    <div className="align-self-center">
                                        <h4 className="m-0">Location</h4>
                                        <p  className="m-0">Kumbakonam , India</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-12">
                                <div className="text-center ps-xl-5 px-1">
                                    <form onSubmit={submitHandler}>
                                    <input type="text" name="name" placeholder="Your Name" pattern=".{2,}" onChange={(e)=> setName(e.target.value) } value={name} className="w-100 p-3  my-3 rounded input_field_bg_border" required/>
                                    <input type="email" name="email" placeholder="Your Email" onChange={(e)=> setEmail(e.target.value)} value={email} className="w-100 p-3  mb-3 rounded input_field_bg_border" required />
                                    <textarea name="message" pattern=".{2,}" className="w-100 p-3  mb-5 rounded input_field_bg_border" onChange={(e)=> setMessage(e.target.value)}  value={message}  id="" cols="30" rows="6" placeholder="Message" required></textarea>
                                    <button type="submit"  className="py-2 px-4 h5 rounded-pill text-decoration-none cursor_pointer project_btn_code_live_demo hvr-bounce-in">Send Message</button>
                                    <ToastContainer />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-0"></div>
            </div>
        </div>
        {isVisible && (
        <button id="scrollToTopBtn" className="rounded-circle " onClick={() => {
            setTimeout(() =>  scrollToTop(), 100 );
            setTimeout(() => shootConfetti(60, 1.2, ['star']), 0);
            }}>
          <i class="fa-solid fa-arrow-up d-flex align-items-center justify-content-center "></i>
        </button>
      )}
    </section>
    )
}