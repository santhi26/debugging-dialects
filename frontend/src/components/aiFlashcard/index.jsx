import React from 'react';

export default function AiFlashcard({data}) {  
  const {title, front, back, image_url, thedefinition, audio} = data

  return (
    <>
      <div class="aicard">
        <img src={image_url} loading="lazy" width="90" height="90" alt="" class="flash-avatar" />
        <div class="flash-content">
          <div class="flash-name flash-name">{front}</div>
          <p class="flash-qualifications"><b>{back}</b></p>
          <p class="flash-bio">{thedefinition}</p>

        </div>
      </div>
    </>
  );
}
