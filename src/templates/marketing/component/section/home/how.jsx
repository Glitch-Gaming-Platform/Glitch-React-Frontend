import { Component } from "react";
import { Link } from "react-router-dom";




const subtitle = "Let's Build together";

const desc = 'The platform has a lot of potential to be a game-changer for esports influencers, fans, and organizations. Be part of the movement by helping us code on Github.';

const btnText = 'View On Github';

class HowItWorks extends Component {
    render() {
        const image_1 = "/assets/images/home/gaming-challenge-1.jpg";
        const image_2 = "/assets/images/home/cosplay.jpg";
        const image_3 = "/assets/images/home/tiktok.jpg";
        const image_4 = "/assets/images/home/next-game.jpg";
        return (
            <section className="cta-section padding-bottom pt-5" style={{ backgroundImage: "url(/assets/images/cta/bg.jpg)" }}>
                <div className="container text-center">
                    <h1>How It Works</h1>
                </div>
                <div className="container">
                    <div className="cta-wrapper item-layer-1">
                        <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" >
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta-content">

                                        <h2 className="mb-3">1) <span className="theme-color text-uppercase">Create Challenges</span> For Your Users</h2>
                                        <p className="mb-4">In just a matter of minutes, create a vibrant community and challenge your users in exciting ways within your game, including:</p>
                                        <ul class="built-in-bullets" style={{listStyleType: "disc"}}>
                                            <li>No Hit Runs</li>
                                            <li>Max Combos</li>
                                            <li>Speed Runs</li>
                                            <li>One Weapon Only</li>
                                            <li>High Score</li>
                                            <li>and More</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cta-thumb text-end">
                                        <img src={image_1} alt="gamer-img" class="rounded img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-5">
                    <div className="cta-wrapper item-layer-1">
                        <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" >
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta-thumb text-end">
                                        <img src={image_2} alt="gamer-img" class="rounded img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cta-content">

                                        <h2 className="mb-3">2) <span className="theme-color text-uppercase">Users</span> Create Content</h2>
                                        <p className="mb-4">As users engage in friendly competition, they can effortlessly create streams and content directly within our community, eliminating the need for third-party software like OBS or StreamLabs—it's all built-in!</p>
                                       
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-5">
                    <div className="cta-wrapper item-layer">
                        <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" >
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta-content">

                                        <h2 className="mb-3">3) <span className="theme-color text-uppercase">Content Goes Social</span> And Creates A Flywheel</h2>
                                        <p className="mb-4">The content created not only fuels engagement within the community but can also be shared across social media platforms. Experience a powerful flywheel effect that expands your gaming audience, captivating both passionate gamers and casual observers alike.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cta-thumb text-end">
                                        <img src={image_3} alt="gamer-img" class="rounded img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-5">
                    <div className="cta-wrapper item-layer-1">
                        <div className="cta-item px-4 px-sm-5 pt-4 pt-sm-5 pt-lg-0" >
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="cta-thumb text-end">
                                        <img src={image_4} alt="gamer-img" class="rounded img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="cta-content">

                                        <h2 className="mb-3">4) <span className="theme-color text-uppercase">You Get Paid</span> From Engagement!</h2>
                                        <p className="mb-4">Reap the rewards of increased engagement as you receive financial compensation. The revenue generated can be reinvested in future game development, enabling you to enhance gameplay experiences by:</p>

                                        <ul>
                                            <li>Addressing pesky bugs</li>
                                            <li>Crafting enticing DLCs</li>
                                            <li>Funding your next groundbreaking game</li>
                                        </ul>
                                       
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowItWorks;