import { Component } from "react";
import { Link } from "react-router-dom";
import VideoJSPlayer from "./videojsplayer";
import videojs from "video.js";
import Info from "../alerts/Info";
import Danger from "../alerts/Danger";
import recording_state from "../../../../constants/recording_state";


class RecordingVideo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        let video = '';

        if (this.props.video.video_processing_state == recording_state.FINISHED) {
            const videoJsOptions = {
                autoplay: true,
                controls: true,
                responsive: true,
                fluid: true,
                sources: [{
                  src: this.props.video.video_mp4,
                  type: 'video/mp4'
                }]
              };
            
              const handlePlayerReady = (player) => {
                //playerRef.current = player;
            
                // You can handle player events here, for example:
                player.on('waiting', () => {
                  videojs.log('player is waiting');
                });
            
                player.on('dispose', () => {
                  videojs.log('player will dispose');
                });
              };

            video = (<VideoJSPlayer options={videoJsOptions} onReady={handlePlayerReady} />);
        } else if (this.props.video.video_processing_state == recording_state.UNPROCESSED) {
            video = <div className="text-center lead"><Info message={"Recording requires processing, please check back later."}></Info></div>
        } else if (this.props.video.video_processing_state == recording_state.PROCESSING) {
            video = <div className="text-center lead"><Info message={"Recording is currently processing, please check back soon!"}></Info></div>
        } else if (this.props.video.video_processing_state == recording_state.PROBLEM) {
            video = <div className="text-center lead"><Danger message={"Recording is currently processing, please check back soon!"}></Danger></div>
        } else {
            video = <div className="text-center lead"><Info message={"Unkown Processing State."}></Info></div>
        }

        return (

                <div className="container">
                    <h3>Watch Recording</h3>
                    {video}
                </div>

        );
    }
}

export default RecordingVideo;