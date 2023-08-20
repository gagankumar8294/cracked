import React from "react";
import Youtube from "react-youtube";

const Videofirst = () => {
  const videoId = "W85oD8FEF78";
  const options = {
    width: 640,
    height: 360,
    playerVars: {
      autoplay: 0,
      controls: 0,
    },
  };

  
//   https://www.youtube.com/watch?v=W85oD8FEF78
  return (
    <Youtube
      id={videoId}
      options={options}
      thumbnail={true}
      onReady={() => {
        // The video is ready to be played.
      }}
    />
  );
};

export default Videofirst;