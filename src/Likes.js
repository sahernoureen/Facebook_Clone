import React, { useState } from "react";

function Likes({ postKey }) {
  const [likes, setLikes] = useState(0);
  console.log("I m in Like");
  const handleLikes = () => {
    setLikes(likes + 1);
    console.log(likes);
  };

  return <div className="Likes"> {likes}</div>;
}

export default Likes;
