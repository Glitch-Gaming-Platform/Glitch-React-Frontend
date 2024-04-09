import React from "react";
import FollowButton from "../followbutton";

const CreatorHeader = ({user}) => {

    return (
        <div className="product-details">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                            <div className="single-thumb">
                                <img src={(user.avatar) ? user.avatar : "https://storage.googleapis.com/glitch-production-images/template1-images/gamer.png"} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    
                    <div className="post-content mt-4">
                        <h4>{user.username}</h4>
                        <h6>({user.first_name} {user.last_name})</h6>


                        <div className="social-media">
                        
                        </div>

                        <p>{user.bio}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatorHeader;