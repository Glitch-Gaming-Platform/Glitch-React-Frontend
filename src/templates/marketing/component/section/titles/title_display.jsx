import React, { useEffect } from 'react';

const GameTitle = ({ gameInfo }) => {


  useEffect(() => {
    console.log(gameInfo);
  }, []);

  const renderSection = (title, content) => {
    if (!content) return null;
    return (
      <div className="mb-3">
        <h5 className="text-black">{title}</h5>
        <p className="text-black">{content}</p>
      </div>
    );
  };

  return (
    <>
    {(gameInfo ) ? 
    <div >
      <div className="row">
        <div className="col-12 mb-4 text-black">
          <h2 className="text-black">{gameInfo.name}</h2>
          <p className="lead">{gameInfo.short_description}</p>
          <img src={(gameInfo.main_image) ? gameInfo.main_image : '/assets/images/titles/no_image_2.png'} />
          
        </div>
        <div className="col-md-6">
          {renderSection('Pricing', `${gameInfo.pricing} ${gameInfo.pricing_currency}`)}
     
          {renderSection('Age Rating', gameInfo.age_rating)}
          {renderSection('Developer', gameInfo.developer)}
          {renderSection('Publisher', gameInfo.publisher)}
          {renderSection('Release Date', gameInfo.release_date)}
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
        {(gameInfo.website_url || gameInfo.steam_url || gameInfo.itch_url) ?
        <div className="col-12 mt-4">
          <h5>Links</h5>
          <p>
            {gameInfo.website_url && <a href={gameInfo.website_url} className="btn btn-primary me-2"><i className="fas fa-globe"></i> Website</a>}
            {gameInfo.steam_url && <a href={gameInfo.steam_url} className="btn btn-success me-2"><i className="fab fa-steam"></i> Steam</a>}
            {gameInfo.itch_url && <a href={gameInfo.itch_url} className="btn btn-warning"><i className="fas fa-gamepad"></i> Itch.io</a>}
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
