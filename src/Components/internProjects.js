
import '../assets/css/updateStyle.css';
import Presento from '../assets/images/presento_md.png';
import NinjaWebsite from '../assets/images/ninjaWebsite_md.png';
import Restaurant from '../assets/images/restaurant_md.png';
import HeroImage from '../assets/images/heroImage_md.png';
import Arsha from '../assets/images/arsha_md.png';

export const InternProject = () => {
   
    return (
        <> 
        <div className="d-flex align-items-center justify-content-center py-5">
            <h1 className="text-center my-3 p-0 fw-bolder experienceHeading heading">Internship Projects</h1>
        </div>
        
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-12">
                    <div className="projectList mx-2">
                        <article className="experienceProjectBox">
                            <a href="https://praveen27092003.github.io/Presento/presento-website/index.html" target="_blank" rel="noopener noreferrer">
                                <img src={Presento} className="img-fluid rounded-3" alt="P-1" />
                            </a>
                        </article>
                        <article className="experienceProjectBox">
                            <a href="https://praveen27092003.github.io/Ninja-Website/Ninja-Website/" target="_blank" rel="noopener noreferrer">
                                <img src={NinjaWebsite} className="img-fluid rounded-3" alt="P-1" />
                            </a>
                        </article>
                        <article className="experienceProjectBox">
                            <a href="https://classy-salamander-5ed705.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img src={Restaurant} className="img-fluid rounded-3" alt="P-1" />
                            </a>
                        </article>
                        <article className="experienceProjectBox">
                            <a href="https://praveen27092003.github.io/hero/super-Hero/index.html" target="_blank" rel="noopener noreferrer">
                                <img src={HeroImage} className="img-fluid rounded-3" alt="P-1" />
                            </a>
                        </article>
                        <article className="experienceProjectBox">
                            <a href="https://praveen27092003.github.io/Arsha-website-2/boostrap/" target="_blank" rel="noopener noreferrer">
                                <img src={Arsha} className="img-fluid rounded-3" alt="P-1" />
                            </a>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        
        </>
        
    )
}
