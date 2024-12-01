

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay , EffectFade } from 'swiper/modules';
// import { Autoplay , EffectFade, Navigation, Pagination } from 'swiper/modules';

const getPublicUrl = (path) => `${process.env.PUBLIC_URL}${path}`;
export default function PhotoGallery(){
    return(
        <>
        <section className="mb-xl-5 mb-4 py-5">
        <div className="d-flex align-items-center justify-content-center">
            <h1 className="text-center m-3 p-0 fw-bolder heading d-md-block d-none">Progress Journey Album</h1>
            <h1 className="text-center m-3 p-0 fw-bolder  d-md-none d-block">Progress Journey <br /> Album</h1>
        </div>
        <div className="container px-lg-5 px-md-4 px-4 mt-sm-5 mt-4">

    <div className="row ">
        <div className="col-md-2 col-sm-1 col-0"></div>
        <div className="col-md-8 col-sm-10 col-12">
            <div className="row">
                <div className="col-md-1 col-0"></div>
                <div className="col-md-5 col-sm-6 col-12 p-1">           
                    <div className="gallery_img">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                // navigation={true}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                // modules={[Autoplay , EffectFade, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="/assests/img/Award/IAT_Madaras.jpg"className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/assests/img/Award/pals_certificate.jpg" height="225px" className=" object_fit_cover rounded" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}> Certified by PALS at <strong>IIT Madras</strong>  through the <strong>PECAN</strong>  Capture The Flag Cyber Security Competition by <strong>"Edith Cowan University Western Australia."</strong> Demonstrated skills in cyber defense and strategic problem-solving,attesting to proficiency in real-world cybersecurity scenarios.</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> March 6, 2024 </span>
                            </time>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-sm-6 col-12 p-1">

                    <div className="gallery_img">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="/assests/img/gallery/vollyball2.jpg" className="img-fluid rounded h-100 w-100" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/assests/img/gallery/vollyball_certificate.jpg" height="auto" className=" object_fit_cover rounded" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}> Secured victory in the <strong> zone-level volleyball Match championship </strong> demonstrating exceptional teamwork, strategic planning, and resilience. This achievement reflects my dedication, collaboration skills, and ability to perform under pressure, highlighting my passion for sports and commitment to achieving excellence in every endeavor.</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> 2023 - 2024 </span>
                            </time>
                        </div>
                    </div>
            
                </div>
                <div className="col-md-1 col-0"></div>
            </div>
            <div className="row">
                <div className="col-md-5 col-sm-6 col-12 p-1">

                    <div className="gallery_img pt-2 rounded">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="/assests/img/gallery/IAT1.png"   className="img-fluid  rounded" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/assests/img/gallery/pals_Photo.jpg" height="453px" className="  rounded" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}> Attended a cybersecurity webinar at <strong>IAT Madras,</strong> gaining insights into advanced cybersecurity practices, threat mitigation strategies, and the latest developments in protecting digital infrastructure against evolving cyber threats.</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> March 10, 2024 </span>
                            </time>
                        </div>
                    </div>

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="/assests/img/gallery/EEE_symposium.jpg" className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                                {/* <SwiperSlide>
                                <img src={getPublicUrl("/assests/img/gallery/entrepeuner_2.jpg")} className="img-fluid rounded" alt="" />

                                </SwiperSlide> */}
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}>  Participated in an <strong> EEE symposium,</strong>  gaining valuable insights into electrical engineering innovations, enhancing my technical knowledge and skills. </div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> February 21, 2022 </span>
                            </time>
                        </div>
                    </div>

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="/assests/img/gallery/kabadi_certificate.jpg" className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                <img src="/assests/img/gallery/badminton_certificate.jpg" className="" height="auto" alt="" />

                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="last_publisher_info p-4 d-md-block d-none">
                            <div className="mb-2" style={{textIndent: '30px'}}> 
                            An enthusiastic sports participant, engaging in various athletic activities that foster teamwork, discipline, and resilience. Sports have shaped my problem-solving abilities, leadership qualities, and commitment to excellence.</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> 2023 - 2024 </span>
                            </time>
                        </div>
                    </div>
                
                    {/* <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <img src="./assests/img/gallery/acadamic_first.jpg" className="img-fluid rounded" alt="" />
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}>Secured <strong>First rank</strong>  in academic excellence with an outstanding <strong>9.47 CGPA</strong>  in the 2nd and 3rd semesters.</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> 2021, 2022 </span>
                            </time>
                        </div>
                    </div>

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <img src="./assests/img/gallery/krishnaswamy_clg.jpg" className="img-fluid rounded" alt="" />
                        </div> 
                        <div className="last_publisher_info p-4 d-md-block d-none">
                            <div className="mb-2" style={{textIndent: '30px'}}>Participated in the <strong> Technical Symposium on Recent Trends in Digital Computing (RTDC'22)</strong> at Krishnaswamy College of Engineering, Cuddalore, presenting on <strong>"Integration of IoT with Blockchain."</strong> </div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> 2021, 2022 </span>
                            </time>
                        </div>
                    </div> */}

                </div>
                <div className="col-md-7 col-sm-6 col-12 p-1">

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="/assests/img/gallery/cricket.jpg" className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/assests/img/gallery/vollyball2.jpg" className="d-md-block d-none object_fit_cover rounded" height="355px" alt="" />
                                    <img src="/assests/img/gallery/vollyball2.jpg" className="d-md-none d-block object_fit_cover rounded" height="184px" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}>Actively involved in cricket and volleyball, showcasing teamwork, leadership, and dedication. Achieved success in volleyball at the zone level and contributed to several cricket tournaments, enhancing strategic thinking and resilience.</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> 2023 - 2024 </span>
                            </time>
                        </div>
                    </div>

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <img src="/assests/img/gallery/badminton_certificate.jpg" className="img-fluid rounded" alt="" />
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}>Passionate badminton player, actively participating in tournaments and events. Developed agility, precision, and strategic thinking, along with strong discipline and focus through consistent practice and competition.</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> April 20, 2024 </span>
                            </time>
                        </div>
                    </div>

                    <div className="gallery_img pt-2">
                        <div className="overflow-hidden img_section">
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Autoplay , EffectFade]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="/assests/img/gallery/IAT_webinar2.jpg" className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/assests/img/gallery/IAT_campus.jpg" className="img-fluid rounded" alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div> 
                        <div className="publisher-info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}> IAT Madras is a renowned institution fostering technical education and research excellence in India. Edith Cowan University, Western Australia, is globally recognized for its contributions to cybersecurity, innovation, and advanced academic programs</div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> March, 2024 </span>
                            </time>
                        </div>
                    </div>

                    {/* <div className="gallery_img pt-2">
                        <div className="overflow-hidden last_img_section">
                            <img src="./assests/img/gallery/hosting.jpg" className="img-fluid rounded" alt=""  />
                        </div> 
                        <div className="last_left_publisher_info p-4">
                            <div className="mb-2" style={{textIndent: '30px'}}>Happy to be a part of the 25th Annual day function as a <strong> Main English Compere.</strong></div>
                            <time className="d-flex justify-content-between align-items-center" style={{gap: '8px'}}>
                                <i className="fa-regular fa-calendar-days" style={{color: '#000000'}}></i>
                                <span> April 15, 2023 </span>
                            </time>
                        </div>
                    </div> */}

                </div>
            </div>
    </div>
    <div className="col-md-2 col-sm-1 col-0"></div>
</div>


</div>

    </section>
        </>
    )
}