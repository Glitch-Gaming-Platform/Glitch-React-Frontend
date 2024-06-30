import React, { useEffect } from 'react';
import Moment from 'react-moment';

const GameTitle = ({ gameInfo }) => {

  useEffect(() => {
    console.log(gameInfo);
  }, []);

  const renderSection = (title, content) => {
    if (!content) return null;
    return (
      <div className="mb-3">
        <h5 className="text-black">{title}</h5>
        <p className="text-black"><span dangerouslySetInnerHTML={createMarkup(content)}></span></p>
      </div>
    );
  };

  const createMarkup = (htmlContent) => {
    return {__html: htmlContent};
  };

  const getVideoEmbedUrl = (url) => {
    const youtubeMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    const vimeoMatch = url.match(/(?:https?:\/\/)?(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/);
    if (youtubeMatch && youtubeMatch[1]) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    } else if (vimeoMatch && vimeoMatch[2]) {
      return `https://player.vimeo.com/video/${vimeoMatch[2]}`;
    }
    return null;
  };

  const videoEmbedUrl = gameInfo?.video_url ? getVideoEmbedUrl(gameInfo?.video_url) : null;

  return (
    <>
    {gameInfo ? 
    <div >
      <div className="row">
        {videoEmbedUrl ? (
          <div className="col-md-12">
            <iframe 
              src={videoEmbedUrl} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
              style={{ width: "100%", height: "400px" }}>
            </iframe>
          </div>
        ) : (
          gameInfo.image_banner && (
            <div className="col-md-12">
              <img src={gameInfo.image_banner ? gameInfo.image_banner : '/assets/images/titles/no_image_2.png'} className="img-fluid" style={{ width: "100%" }} />
            </div>
          )
        )}
        <div className="col-md-12 mb-4 text-black">
          <h2 className="text-black">{gameInfo.name}</h2>
          <p className="text-black"><span dangerouslySetInnerHTML={createMarkup(gameInfo.long_description || gameInfo.short_description)} /></p>
        </div>
        <div className="col-12 mt-2">
          <div className="row">
            <div className="col-md-6">
              {renderSection('Pricing', `${gameInfo.pricing} ${gameInfo.pricing_currency}`)}
              {renderSection('Age Rating', gameInfo.age_rating)}
              {renderSection('Developer', gameInfo.developer)}
              {renderSection('Publisher', gameInfo.publisher)}
              {renderSection('Release Date', (gameInfo.release_date) ? <Moment format="MM-DD-YYYY">{gameInfo.release_date}</Moment> : '')}
              {renderSection('Gameplay Mechanics', gameInfo.gameplay_mechanics)}
              {renderSection('Narrative Setting', gameInfo.narrative_setting)}
            </div>
            <div className="col-md-6">
              {renderSection('Visual & Audio Style', gameInfo.visual_audio_style)}
              {renderSection('Multiplayer Options', gameInfo.multiplayer_options)}
              {renderSection('DLC & Expansion Info', gameInfo.dlc_expansion_info)}
              {renderSection('System Requirements', gameInfo.system_requirements)}
              {renderSection('Critical Reception', gameInfo.critical_reception)}
              {renderSection('Availability', gameInfo.availability)}
            </div>
          </div>
        </div>
        {(gameInfo.website_url || gameInfo.steam_url || gameInfo.itch_url) ?
        <div className="col-12 mt-1">
          <h5>Links</h5>
          <p>
            {gameInfo.website_url && <a href={gameInfo.website_url} target='_blank' className="btn btn-primary me-2"><i className="fas fa-globe"></i> Website</a>}
            {gameInfo.steam_url && <a href={gameInfo.steam_url} target='_blank' className="btn btn-success me-2"><i className="fab fa-steam"></i> Steam</a>}
            {gameInfo.itch_url && <a href={gameInfo.itch_url} target='_blank' className="btn btn-warning"><i className="fas fa-gamepad"></i> Itch.io</a>}
          </p>
        </div>
        : ''}
            
      </div>
    </div>
    : '' }
    </>
  );
};

export default GameTitle;
