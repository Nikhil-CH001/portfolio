import React from "react";
import nikhil from "../../../image/profile.jpeg"
function ProfileImage() {
    return (
      <div className="w-full md:w-1/2 relative flex justify-center">
        <div className="relative z-10">
          <img
            className="rounded-full w-[50%] sm:w-[60%] md:w-[70%] lg:w-[55%] xl:w-[50%] mx-auto outline outline-[0.5rem] sm:outline-[0.7rem] outline-offset-[0.1rem] outline-blue-400/30 shadow-lg shadow-blue-500/50"
            src={nikhil}
            alt="Nikhil's Profile"
          />
        </div>
      </div>
    );
  }
  
  export default ProfileImage;