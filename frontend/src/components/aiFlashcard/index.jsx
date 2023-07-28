import React from 'react';

export default function AiFlashcard({data}) {  
  const {title, front, back, image_url, thedefinition, audio} = data

  return (
    <>
      <div className="aicard">
        <img src={image_url} loading="lazy" width="300" height="240" alt="" className="flash-avatar" />
        <div className="flash-content">
          <div className="flash-name flash-title"><center>{front}</center></div>
          <p className="flash-qualifications"><b><center>{back}</center></b></p>
          <p className="flash-bio"><center>{thedefinition}</center></p>

        </div>
      </div>
    </>
  );
}
