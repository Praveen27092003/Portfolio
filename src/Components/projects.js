import confetti from 'canvas-confetti';
import 'hover.css/css/hover-min.css';





 ////// CONFETTI EFFECT

 const triggerConfetti = () => {
    const duration = 5 * 1000; // Duration of the confetti in milliseconds
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

export default function Projects(){
    return(
        <section className="mb-xl-2 mb-md-4 py-md-5 py-4" >
        <div className="d-flex align-items-center justify-content-center">
            {/* <img src="./assests/img/leftRightArrow.png" height="20px" width="20px" alt=""/> */}
            <h1 className="text-center m-3 p-0 fw-bolder heading">Projects</h1>
            {/* <img src="./assests/img/leftRightArrow.png" className="transform180" height="20px" width="20px" alt=""/> */}
        </div>
        
        <div className="container mt-sm-5 mt-4  py-md-0 py-4">
            <div className="row">
                <div className="col-xl-2 col-0"></div>
                <div className="col-xl-8 col-12">
                    <div className="projectBox ">
                        <div className="row ">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-12 d-flex align-items-center">
                                <img src="/assests/img/StudentManagement/1.png" className="projectImg" alt=""/>
                            </div> 
                            <div className="col-xl-7 col-lg-7 col-md-7 col-12 d-flex justify-content-center flex-column p-xl-5 px-4 py-md-2 py-4 my-2">
                            <h2 className="text-center px-sm-5">Student Management Dashboard</h2>
                            <p className="text-center px-lg-4 px-3" style={{textIndent: '20px'}}>Developed a comprehensive Student Management Dashboard to streamline academic and administrative tasks. The dashboard features functionalities like student data management, attendance tracking, and performance monitoring. Designed with a user-friendly interface, it enhances productivity and simplifies operations for educational institutions.</p>                                
                            <strong className="text-center mb-2 pb-md-0 pb-2 px-md-5 px-4">Tech Stack : HTML , CSS , Javascript , Bootstrap5 , ReactJS, MongoDB and NodeJS</strong>                                <div className="d-flex justify-content-center"  style={{gap:'8px'}}>
                                    <a className="py-2 px-3 h5 rounded-pill text-decoration-none cursor_pointer project_btn_code_live_demo d-flex align-items-center hvr-bounce-out" style={{gap:'8px'}} href="https://github.com/Praveen27092003/crud-backend" target="_blank">Code <img src="/assests/img/svg/github_color.svg" className="rounded-circle"  height="20px" width="20px" alt=""/></a>
                                    {/* <button className="btn btn-secondary d-flex align-items-center"  style={{gap:'8px'}}>Live Demo <img src="./assests/img/svg/share.svg" height="18px" width="20px" alt=""/></button> */}
                                    <a className="py-2 px-3 h5 rounded-pill text-decoration-none cursor_pointer project_btn_code_live_demo d-flex align-items-center hvr-bounce-out"  style={{gap:'8px'}} href="https://crud-frontend-orpin.vercel.app/" target="blank">Live Demo <img src="/assests/img/svg/live_demo_color.svg" height="20px" width="20px" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-0"></div>
            </div>
        </div>

        <div className="container mt-5  py-md-0 py-4">
            <div className="row">
                <div className="col-xl-2 col-0"></div>
                <div className="col-xl-8 col-12">
                   <div className="projectBox">
                        <div className="row d-flex" >
                           
                            <div className="col-xl-7 col-lg-7 col-md-7 col-12 order-xl-1 order-lg-1 order-2 d-flex justify-content-center flex-column p-xl-5 px-4 py-md-2 py-4 py-2 my-2">
                                <h2 className="text-center">ARSHA - Business Clone Website</h2>
                                <p className="text-center px-3" style={{textIndent: '20px'}}>Arsha is your all-in-one business clone website, featuring a clean and responsive design. With dedicated sections for Home, About, Services, Testimonials, Portfolio, Team, and Contact, this site offers a straightforward and engaging user experience.</p>                             
                                <strong className="text-center mb-2 pb-md-0 pb-2 px-3">Tech Stack : HTML5 , CSS3 , Bootstrap5 and MediaQuery</strong>
                                <div className="d-flex justify-content-center" style={{gap:'8px'}}>
                                    <a className="py-2 px-3 h5 rounded-pill text-decoration-none cursor_pointer project_btn_code_live_demo d-flex align-items-center hvr-bounce-out" style={{gap:'8px'}} href="https://github.com/Praveen27092003/Arsha-website-2" target="_blank" >Code <img src="/assests/img/svg/github_color.svg"  height="20px" width="20px" alt=""/></a>
                                    {/* <button className="btn btn-secondary d-flex align-items-center" style={{gap:'8px'}}>Live Demo <img src="./assests/img/svg/live_demo_color.svg" height="18px" width="20px" alt=""/></button> */}
                                    <a className="py-2 px-3 h5 rounded-pill text-decoration-none cursor_pointer project_btn_code_live_demo d-flex align-items-center hvr-bounce-out" style={{gap:'8px'}} href="https://praveen27092003.github.io/Arsha-website-2/boostrap/" target="blank" >Live Demo <img src="/assests/img/svg/live_demo_color.svg" height="20px" width="20px" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 order-xl-2 order-lg-2 order-1 col-12 d-flex align-items-center">
                            
                               
                                <img src="/assests/img/Arsha/ArshaWebsite.png"  className="d-md-block d-none projectImg img-fluid" alt=""/>
                                {/* <img src="./assests/img/Multiverse/multiverse_mobile_view.png" className="d-md-none d-block projectImg object_fit_contain" alt=""/> */}
                                <img src="/assests/img/Arsha/ArshaWebsite-md.jpg" className="d-md-none d-block projectImg object_fit_contain" alt=""/>
                            </div> 
                        </div>
                        </div>
             
                </div>
                <div className="col-xl-2 col-0"></div>
            </div>
        </div>

        <div className="container mt-5  py-md-0 py-4">
            <div className="row">
                <div className="col-xl-2 col-0"></div>
                <div className="col-xl-8 col-12">
                    <div className="projectBox ">
                        <div className="row ">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-12 d-flex align-items-center">
                                <img src="/assests/img/FightingGame/1.png" className="projectImg " alt=""/>
                            </div> 
                            <div className="col-xl-7 col-lg-7 col-md-7 col-12 d-flex justify-content-center flex-column p-xl-5 px-4 py-md-2 py-4 my-2">
                                <h2 className="text-center px-2">Fighting Game</h2>
                                <p className="text-center px-lg-3 px-0" style={{textIndent: '20px'}}>Created an action-packed fighting game with unique characters and dynamic combat styles. Focused on competitive gameplay, intuitive controls, and engaging mechanics, delivering an immersive experience that highlights skills in game development and interactive design.</p>
                                <strong className="text-center mb-2 pb-md-0 pb-2">Tech Stack : HTML5 , CSS3 , Bootstrap5 and MediaQuery</strong>
                                <div className="d-flex justify-content-center" style={{gap:'8px'}}>
                                    <a className="py-2 px-3 h5 rounded-pill text-decoration-none cursor_pointer project_btn_code_live_demo d-flex align-items-center hvr-bounce-out" style={{gap:'8px'}} href="https://github.com/Praveen27092003/game-fight-" target="_blank">Code <img src="/assests/img/svg/github_color.svg"  height="20px" width="20px" alt=""/></a>
                                    {/* <button className="btn btn-secondary d-flex align-items-center" style={{gap:'8px'}}>Live Demo <img src="./assests/img/svg/share.svg" height="18px" width="20px" alt=""/></button> */}
                                    <a className="py-2 px-3 h5 rounded-pill text-decoration-none cursor_pointer project_btn_code_live_demo d-flex align-items-center hvr-bounce-out" style={{gap:'8px'}} href="https://praveen27092003.github.io/game-fight-/Fighting-Game/index.html" target="blank" >Live Demo <img src="/assests/img/svg/live_demo_color.svg" height="20px" width="20px" alt=""/></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xl-2 col-0"></div>
            </div>
        </div>

        <div className="container mt-5  py-md-0 py-4">
            <div className="row">
                <div className="col-xl-2 col-0"></div>
                <div className="col-xl-8 col-12">
                    <div className=" projectBox">
                        <div className="row d-flex ">
                           
                            <div className="col-xl-7 col-lg-7 col-md-7 col-12 order-xl-1 order-lg-1 order-2 d-flex justify-content-center flex-column p-xl-5 px-4 py-md-2 py-4 py-2 my-2">
                                <h2 className="text-center px-3">CartFlow: Simple Product Management</h2>
                                <p className="text-center px-3" style={{textIndent: '20px'}}>Experience seamless product management with this website. Add products, watch them populate your local storage, and effortlessly manipulate counts. The responsive design ensures a smooth journey on both desktop and mobile. Click, add to cart, and streamline your shopping experience.</p>
                                <strong className="text-center mb-2 pb-md-0 pb-2 px-3">Tech Stack : HTML5 , CSS3 ,Javascript, Bootstrap5 and MediaQuery</strong>                                <div className="d-flex justify-content-center" style={{gap:'8px'}}>
                                    <a className="py-2 px-3 h5 rounded-pill text-decoration-none cursor_pointer project_btn_code_live_demo d-flex align-items-center hvr-bounce-out" style={{gap:'8px'}} href="https://github.com/Praveen27092003/shopping1" target="_blank" >Code <img src="/assests/img/svg/github_color.svg"  height="20px" width="20px" alt=""/></a>
                                    {/* <button className="btn btn-secondary d-flex align-items-center" style={{gap:'8px'}}>Live Demo <img src="./assests/img/svg/share.svg" height="18px" width="20px" alt=""/></button> */}
                                    <a className="py-2 px-3 h5 rounded-pill text-decoration-none cursor_pointer project_btn_code_live_demo d-flex align-items-center hvr-bounce-out" style={{gap:'8px'}} href="https://praveen27092003.github.io/shopping1/javascript-task2/html/" target="blank" >Live Demo <img src="/assests/img/svg/live_demo_color.svg" height="20px" width="20px" alt=""/></a>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 order-xl-2 order-lg-2 order-1 col-12 d-flex align-items-center">
                                <img src="/assests/img/AddProduct/AddProduct.png"  className="d-md-block d-none projectImg img-fluid" alt=""/>
                                <img src="/assests/img/AddProduct/AddProduct-md.png" className="d-md-none d-block projectImg object_fit_contain" alt=""/>
                            </div> 
                        </div>
                        
                    </div>
                </div>
                <div className="col-xl-2 col-0"></div>
            </div>
        </div>

        <div className="container mt-5 py-md-0 pt-4 pb-2">
            <div className="row">
                <div className="col-xl-2 col-0"></div>
                <div className="col-xl-8 col-12">
                    <div className=" projectBox">
                        <div className="row ">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-12 d-flex align-items-center">
                                <img src="/assests/img/BookSky/1.png" className="projectImg" alt=""/>
                            </div> 
                            <div className="col-xl-7 col-lg-7 col-md-7 col-12 d-flex justify-content-center flex-column p-xl-5 px-4 py-md-2 py-4 my-2">
                                <h2 className="text-center">BookSky</h2>
                                <p className="text-center px-md-4 px-3" style={{textIndent: '20px'}}>
                                The goal of this project is to create a centralized platform, which serves as a comprehensive resource for libraries. It provides easy access to information about book titles and authors, helping libraries efficiently manage their collections and assisting users in finding relevant books quickly.</p>
                                <strong className="text-center mb-2 pb-md-0 pb-2 px-md-5 px-4">Tech Stack : HTML5 , CSS3 , Javascript and Bootstrap5</strong>                                
                                <div className="d-flex justify-content-center"  style={{gap:'8px'}}>
                                    <a className="py-2 px-3 h5 rounded-pill text-decoration-none cursor_pointer project_btn_code_live_demo d-flex align-items-center hvr-bounce-out" style={{gap:'8px'}} href="https://github.com/Praveen27092003/BookSky" target="_blank" >Code <img src="/assests/img/svg/github_color.svg"  height="20px" width="20px" alt=""/></a>
                                    {/* <button className="btn btn-secondary d-flex align-items-center"  style={{gap:'8px'}}>Live Demo <img src="./assests/img/svg/share.svg" height="18px" width="20px" alt=""/></button> */}
                                    <a className="py-2 px-3 h5 rounded-pill text-decoration-none cursor_pointer project_btn_code_live_demo d-flex align-items-center hvr-bounce-out"  style={{gap:'8px'}} href="https://praveen27092003.github.io/BookSky/booksky/index.html" target="blank">Live Demo <img src="/assests/img/svg/live_demo_color.svg" height="20px" width="20px" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-0"></div>
            </div>
        </div>


        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-xl-2 col-0"></div>
                <div className="col-xl-8 col-12">
                    <div className="dark_mode_bg_border pt-5 px-4 d-flex flex-column flex-xl-row align-items-xl-start align-items-center justify-content-evenly " style={{borderRadius : '20px'}} >
                        <div className="text-xl-start text-center pb-md-0 pb-4">
                            <h2>Have a Project in Mind?</h2>
                            <h5 className="pb-5">Let's collaborate to bring it to life!</h5>
                            <a href="#contact_heading" className="py-3 h5 rounded-pill text-decoration-none cursor_pointer project_btn_code_live_demo my-3 px-4 hvr-grow" style={{fontSize : '18px'}} onClick={triggerConfetti}>Contact me <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div>
                            <img src="/assests/img/man-removebg-preview.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-2 col-0"></div>
            </div>
        </div>
    </section>
    )
}