import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";
import HowItWorks from "../home/how";

export default function CommunityOverview({ community, errors }) {

    let community_url =  community.subdomain + process.env.REACT_APP_SITE_DOMAIN;

    return (
        <>
 
 <HowItWorks />
                
                <div className="container padding-bottom" key={'key2'}>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center"></div>
                    <div className="col-12">
                        <div className="blog-item">
                            <div className="blog-inner d-flex flex-wrap align-items-center">
                                <div className="blog-thumb w-xl-50 w-100">
                                    <img src={`/assets/images/create_phone.jpeg`} alt={`Earn Donations`} className="w-100" />
                                </div>
                                <div className="blog-content p-4 w-xl-50 w-100">
                                    <p className="theme-color text-uppercase ls-2">Download Our App</p>
                                    <h3>The Ultimate Live Streaming Solution for Influencers and Creators</h3>
                                    <br />
                                    <p>Download our app and effortlessly multicast to platforms like Twitch, Facebook, YouTube, Trovo, and more. Engage interactively with your fans as they watch and generously tip during your gameplay.</p>

                                    <a href="/creators" className="default-button"><span>{'Learn More'} <i className="icofont-circled-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container padding-bottom" key={'key3'} >
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center"></div>
                    <div className="col-12">
                        <div className="blog-item-1">
                            <div className="blog-inner d-flex flex-wrap align-items-center">
                                <div className="blog-content p-4 w-xl-50 w-100">
                                    <h2>Boost Engagement</h2>
                                    <br />
                                    <p className='lead'>Maximize your online presence with our advanced streaming features:</p>
                                    <ul className="indent lead">
                                        <li><h5><small>One-click integration with Twitch, Facebook, and YouTube.</small></h5></li>
                                        <li><h5><small>Engage in real-time with your fans.</small></h5></li>
                                        <li><h5><small>Built-in tipping system to monetize your streams.</small></h5></li>
                                        <li><h5><small>Personalize your streams with branding overlays and images.</small></h5></li>
                                    </ul>
                                    <a href="#download" className="default-button mr-2"><span>{'Download For Free'} <i className="icofont-circled-right"></i></span></a>

                                </div>
                                <div className="blog-thumb w-xl-50 w-100">
                                    <img src={`/assets/images/creators/image_6.jpeg`} alt={`Earn Donations`} className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            


        </>
    );
}