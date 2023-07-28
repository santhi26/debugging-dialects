import React from 'react';

export default function AiFlashcard({data}) {  
  const {title, front, back, image_url, thedefinition, audio} = data

  return (
    <>
      <div className="aicard">
        <img src={image_url} loading="lazy" width="300" height="240" alt="" className="flash-avatar" />
        <div className="flash-content">
          <div className="flash-name flash-title">{front}</div>
          <p className="flash-qualifications"><b>{back}</b></p>
          <p className="flash-bio">{thedefinition}</p>

        </div>
      </div>
    </>
  );
}
