import React from "react";
import { Button, Main } from "../Style/FireBlogDetailsStyles";
import { useNavigate } from "react-router-dom";
const FireBlogAppDetails = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <div>
        <iframe
          width="660"
          height="369"
          src="https://www.youtube.com/embed/oFkNWRNDP_8"
          title="React_Fire_Blog_App"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          //! Burada allowFullScreen Youtubeden Default olarak F ve S harflari kücük olarak geliyo. Deswegen page de tam ekran özelligi calismiyor.
        ></iframe>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          BACK
        </Button>
      </div>
    </Main>
  );
};

export default FireBlogAppDetails;
