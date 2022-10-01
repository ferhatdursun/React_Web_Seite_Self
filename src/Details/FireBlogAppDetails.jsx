import React from "react";
// import deneme from "../assets/fireblog.gif"
// import "node_modules/video-react/dist/video-react.css"; // import css

const FireBlogAppDetails = () => {
  return (
    <div>
      <iframe
        width="960"
        height="569"
        src="https://www.youtube.com/embed/oFkNWRNDP_8"
        title="React_Fire_Blog_App"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        //!   Burada allowFullScreen Youtubeden Default olarak F ve S harflari kücük olarak geliyo. Deswegen page de tam ekran özelligi calismiyor.
      ></iframe>
    </div>
  );
};

export default FireBlogAppDetails;
