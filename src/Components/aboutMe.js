import React from "react";
import { motion } from "framer-motion";
import PraveenResume from '../assets/data/PraveenBaskar.pdf';
import confetti from "canvas-confetti";
import 'hover.css/css/hover-min.css';

export default function AboutMe(){
    const openPDF = () => {
        // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
        const pdfPath = './assests/data/balaji_resume_dp_27_05.pdf';
        window.open(PraveenResume, '_blank');
      };
      

      // Reusable function to trigger confetti with customizable shapes and colors
const triggerConfetti = (shapes, colors) => {
    const defaults = {
      scalar: 2,
      spread: 180,
      particleCount: 60,
      origin: { y: -0.1 },
      startVelocity: -35,
    };
  
    confetti({
      ...defaults,
      shapes: shapes,
      colors: colors,
    });
  };
  
  // Pumpkin shape from the path (example)
  const pumpkin = confetti.shapeFromPath({
    path: 'M449.4 142c-5 0-10 .3-15 1a183 183 0 0 0-66.9-19.1V87.5a17.5 17.5 0 1 0-35 0v36.4a183 183 0 0 0-67 19c-4.9-.6-9.9-1-14.8-1C170.3 142 105 219.6 105 315s65.3 173 145.7 173c5 0 10-.3 14.8-1a184.7 184.7 0 0 0 169 0c4.9.7 9.9 1 14.9 1 80.3 0 145.6-77.6 145.6-173s-65.3-173-145.7-173zm-220 138 27.4-40.4a11.6 11.6 0 0 1 16.4-2.7l54.7 40.3a11.3 11.3 0 0 1-7 20.3H239a11.3 11.3 0 0 1-9.6-17.5zM444 383.8l-43.7 17.5a17.7 17.7 0 0 1-13 0l-37.3-15-37.2 15a17.8 17.8 0 0 1-13 0L256 383.8a17.5 17.5 0 0 1 13-32.6l37.3 15 37.2-15c4.2-1.6 8.8-1.6 13 0l37.3 15 37.2-15a17.5 17.5 0 0 1 13 32.6zm17-86.3h-82a11.3 11.3 0 0 1-6.9-20.4l54.7-40.3a11.6 11.6 0 0 1 16.4 2.8l27.4 40.4a11.3 11.3 0 0 1-9.6 17.5z',
    matrix: [0.020491803278688523, 0, 0, 0.020491803278688523, -7.172131147540983, -5.9016393442622945],
  });
  
  // Tree shape from the path (example)
  const tree = confetti.shapeFromPath({
    path: 'M120 240c-41,14 -91,18 -120,1 29,-10 57,-22 81,-40 -18,2 -37,3 -55,-3 25,-14 48,-30 66,-51 -11,5 -26,8 -45,7 20,-14 40,-30 57,-49 -13,1 -26,2 -38,-1 18,-11 35,-25 51,-43 -13,3 -24,5 -35,6 21,-19 40,-41 53,-67 14,26 32,48 54,67 -11,-1 -23,-3 -35,-6 15,18 32,32 51,43 -13,3 -26,2 -38,1 17,19 36,35 56,49 -19,1 -33,-2 -45,-7 19,21 42,37 67,51 -19,6 -37,5 -56,3 25,18 53,30 82,40 -30,17 -79,13 -120,-1l0 41 -31 0 0 -41z',
    matrix: [0.03597122302158273, 0, 0, 0.03597122302158273, -4.856115107913669, -5.071942446043165],
  });
  
  // Heart shape from the path (example)
  const heart = confetti.shapeFromPath({
    path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
    matrix: [0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666, -5.533333333333333],
  });
  
  // Example usage for different shapes and colors:
  triggerConfetti([pumpkin], ['#ff9a00', '#ff7400', '#ff4d00']);
  triggerConfetti([tree], ['#8d960f', '#be0f10', '#445404']);
  triggerConfetti([heart], ['#f93963', '#a10864', '#ee0b93']);
  
    
    
      
      
    return(
        <section className="mb-xl-5 mb-4 py-md-5 py-4">
        <div className="d-flex align-items-center justify-content-center pb-5">
            {/* <img src="./assests/img/leftRightArrow.png" height="20px" width="20px" alt=""/> */}
            <h1 className="text-center m-3 p-0 fw-bolder heading">About Me</h1>
            {/* <img src=".//assests/img/leftRightArrow.png" className="transform180"  height="20px" width="20px" alt=""/> */}
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xl-2 col-0"></div>
                <div className="col-xl-8 col-12">
                    <div className="aboutContents bg_violet p-xl-5 p-3">
                        <p className="aboutPara fw-light"> Hello, I'm <span className="main_color">Praveen B</span>, a passionate <span className="main_color">Web Developer</span> from Kumbakonam, India. I have completed a Bachelor's degree in <span className="main_color">Computer Science and Engineering</span> at ARASU Engineering College, Kumbakonam. </p>
                        <p className="aboutPara mb-0 fw-light"> As a <span className="main_color">full stack developer</span>, my expertise lies in crafting both frontend and backend solutions for web applications. I am dedicated to <span className="main_color">designing</span> and maintaining  <span className="main_color">responsive websites</span>, prioritizing exceptional  <span className="main_color">user experiences</span> , and writing  <span className="main_color">optimized code</span>.</p>
                    </div>
                </div>
                <div className="col-xl-2 col-0"></div>
            </div>
        </div>
        <motion.div whileTap={{ scale: 0.8 }} className="text-center mt-xl-5 mt-4 pt-4 btn_download_hover">
        <a onClick={() => {
            triggerConfetti([pumpkin,tree,heart]);
            setTimeout(() => {
            openPDF();
            },1000)
            }} className="py-3 px-5 h5 rounded-pill text-decoration-none cursor_pointer download_cv hvr-bounce-in">
            Check Resume
        </a>
        </motion.div>
    </section>
    )
}