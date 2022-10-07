import "./HeaderNotify.css";
import React from "react";
import Profile from "./Profile";
import markimage from "../assets/images/avatar-mark-webber.webp";
import angelaimage from "../assets/images/avatar-angela-gray.webp";
import jacobimage from "../assets/images/avatar-jacob-thompson.webp";
import rizkyimage from "../assets/images/avatar-rizky-hasanuddin.webp";
import nathanimage from "../assets/images/avatar-nathan-peterson.webp";
import annaimage from "../assets/images/avatar-anna-kim.webp";
import kimberlyimage from "../assets/images/avatar-kimberly-smith.webp";

const HeaderNotify = () => {
  return (
    <div className="headernotify">
      <div className="headernotify__main">
        <h1 className="headernotify__notify">
          Notifcation{" "}
          <span>
            <button className="headernotify__number" id="notifynumber">
              {}
            </button>{" "}
          </span>
        </h1>
        <p className="headernotify__markasread" id="markasread">
          Mark all as read
        </p>
      </div>

      <div className="headernotify__pofiles">
        <Profile
          image={markimage}
          name="Mark Webber"
          status="reacted to your recent post"
          anonce="My first tournament today!"
          cnames2={"profile__nameandcomment"}
          time={"1m ago"}
        />
        <Profile
          image={angelaimage}
          name="Anglea Gray"
          status="followed you"
          cnames2={"profile__nameandcomment"}
          time={"1m ago"}
        />
        <Profile
          image={jacobimage}
          name="Jacob Thompson"
          status="has joined your group"
          cnames2={"profile__nameandcomment"}
          anonce="Chess Club"
          time={"1 ago"}
        />
        <Profile
          image={rizkyimage}
          name="Rizky Hasanuddin"
          status="sent you a private message"
          cnames2={"profile__nameandcomment"}
          time={"5 days ago"}
          comment={true}
        />
        <Profile
          image={kimberlyimage}
          name="Kimberly Smith"
          status="commented on your picture"
          cnames2={"profile__nameandphoto"}
          chessimg={true}
          time={"1 week ago"}
        />
        <Profile
          image={nathanimage}
          name="Nathan Peterson"
          status="reacted to your recent post"
          anonce="5 end-game strategies to increase your win rate"
          cnames2={"profile__nameandcomment"}
          time={"2 weeks ago"}
        />
        <Profile
          image={annaimage}
          name="Anna Kim"
          status="left the group"
          cnames2={"profile__nameandcomment"}
          anonce="Chess Club"
          time={"2 weeks ago"}
        />
      </div>
    </div>
  );
};

export default HeaderNotify;
