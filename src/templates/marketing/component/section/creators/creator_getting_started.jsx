import React from "react";
import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";

const CreatorGettingStarted = ({ user }) => {

    return (
        <>
            <h3 className='mt-3'>Step 1) Download The Streaming App</h3>

            <p>Start by downloading our <Link target='_blank' to={Navigate.creatorsPage()}>streaming app here</Link>. Our streaming app not only facilitates multicasting to Twitch, YouTube, and other sites but also serves as the application for creating and uploading content.</p>

            <p>While you do not have to use the streaming app for creating content, you must use it for uploading the content as it records the performance of your content.</p>

            <Link target='_blank' to={Navigate.creatorsPage()}>
                <img src="/assets/images/campaigns/download_platform.png" alt="Download The Streaming App" className="img-fluid" style={{
                    border: '2px solid white', // Adjust border thickness and color as needed
                    borderRadius: '8px', // Optional: Add border radius for rounded corners
                    marginBottom: '10px', // Optional: Add margin to create space between images
                }} />
            </Link>

            <h3 className='mt-3'>Step 2) Sign In</h3>

            <p>After downloading the application, sign in using the same login credentials you used to apply for this game campaign.</p>

            <img src="/assets/images/campaigns/streaming-app-login.png" alt="Login To The Streaming App" className="img-fluid" />


            <h3 className='mt-3'>Step 3) Create A New Stream With This Campaign</h3>

            <p>Once signed in, you can create a new stream. Give it a name and description. Most importantly, select the campaign you were approved for from the dropdown. Selecting the correct campaign is crucial for attributing your work correctly.</p>

            <img src="/assets/images/campaigns/first_stream.png" alt="Login To The Streaming App" className="img-fluid" />

            <h3 className='mt-3'>Step 4) Start Streaming</h3>

            <p>Now, open your game and start streaming! Simply select your game window, choose your camera (or no camera), and start streaming. For streaming to Twitch, YouTube, TikTok, and other platforms, click on the Multicasting tab and select the service. Your stream and its viewers, links, etc., will be recorded to track your earnings.</p>

            <p>Important: Remember to enable recording of your content. Your recordings can later be turned into short-form content that also earns you income.</p>





            <div className="row">
                <div className="col">
                    <img src="/assets/images/campaigns/select-game.png" alt="Login To The Streaming App" className="img-fluid" />
                </div>
                <div className="col">
                    <img src="/assets/images/campaigns/mutlicasting.png" alt="Login To The Streaming App" className="img-fluid" />
                </div>
                <div className="col">
                    <img src="/assets/images/campaigns/recording.png" alt="Login To The Streaming App" className="img-fluid" />
                </div>

            </div>


            <h3 className='mt-3'>Step 5) Create Content</h3>

            <p>After finishing your stream and with recording enabled, you can begin creating content. Start by turning your content into short clips. You can edit these clips by speeding them up, adding text, etc.</p>

            <p>Important: If you use third-party software for clip editing, you can import these clips into our app using the 'Add Local Clips' button.</p>

            <img src="/assets/images/campaigns/creating-clip.png" alt="Login To The Streaming App" className="img-fluid" />

            <h3 className='mt-3'>Step 6) Post To Social Media</h3>

            <p>Finally, post your content to social media! Simply click the button for the desired social media platform within the app. All data, including affiliate links, hashtags, and other items, will be automatically included to help you create the desired content with correct attribution.</p>

            <img src="/assets/images/campaigns/post-content.png" alt="Login To The Streaming App" className="img-fluid" />
        </>
    );
}

export default CreatorGettingStarted;