import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
import chessimage from "../assets/images/image-chess.webp";

const Profile = ({
  image,
  name,
  status,
  chessimg,
  anonce,
  cnames2,
  time,
  comment,
}) => {
  const [isActive, setIsactive] = useState(false);
  const ref = useRef(null);

  let count = 0;
  console.log(count);
  let fun = () => {
    setIsactive(!isActive);
  };

  return (
    <div
      ref={ref}
      className={isActive ? "profile" : "profile-without"}
      onClick={fun}
    >
      <img className="profile__image" src={image} alt="" />
      <div className={cnames2}>
        <div className="profile__namecontainer">
          <p>
            <b>{name}</b>
            <span className="status">{status}</span>{" "}
            <span className="anonce">{anonce}</span>{" "}
          </p>
          <p className="timesago">{time}</p>
        </div>
        {chessimg && (
          <div className="chess__container">
            <img className="chess__image" src={chessimage} alt=""></img>
          </div>
        )}
        {comment && (
          <div className="comment__container">
            {" "}
            <p>
              Hello thanks for setting up the chess Club. I've been a member for
              a few weeks now and I'm already having lots of fun and improving
              my game.
            </p>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
