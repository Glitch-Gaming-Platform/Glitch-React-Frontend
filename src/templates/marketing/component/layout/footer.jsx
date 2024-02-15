import { Component } from "react";
import { Link } from "react-router-dom";
import site from "../../../../constants/site";
import Navigate from "../../../../util/Navigate";



const postTitle = "Download The Source Code";
const newsTitle = "Our Newsletter";
const desc = "Upropriate brand economca sound technolog after covalent technology enable prospective wastng markets whereas propriate and brand economca sound technolog";
const newsdesc = "Bigamer esports organization supported by community leaders";


class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsName: '',
            newsEmail: '',
        };
    }
    render() { 
        return (
            <footer className="footer-section">
                
                <div className="footer-middle padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/footer/bg.jpg)"}}>
                    <div className="container">
                        <div className="row padding-lg-top">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title mb-4">
                                            <img src="/assets/images/logo/glitch_3.png" width="100px" alt="logo" />
                                        </div>
                                        <div className="fm-item-content">
                                            <p className="mb-4">{site.description}</p>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>{postTitle}</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            <a target="_blank" href="https://github.com/Glitch-Gaming-Platform">
                                                <img src="/assets/images/footer/github2.png" className="img-fluid" alt="github" />
                                            </a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item-3 mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>Links</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            <u>
                                                <li><Link to={Navigate.aboutPage()} >About Us</Link></li>
                                                <li><Link to={Navigate.creatorsPage()} >Streaming App</Link></li>
                                                <li><Link to={Navigate.creatorsCalculator()} >Earnings Calculator</Link></li>
                                            </u>
                                           
  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom-content text-center">
                                    <p>{process.env.REACT_APP_COPYRIGHT} - <a href={Navigate.privacyPage()}>Privacy Policy</a> - <a href={Navigate.termsPage()}>Terms of Service</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;