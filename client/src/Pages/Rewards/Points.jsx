import React, { useState, useEffect } from "react";
import treasure from "../../assets/treasure.png";

const PointSystem = () => {
  const [points, setPoints] = useState(0);
  const [lastClaimTime, setLastClaimTime] = useState(null);

  const handleClaim = () => {
    const currentTime = new Date();
    if (!lastClaimTime || currentTime - lastClaimTime >= 24 * 60 * 60 * 1000) {
      // Claim 1 point and update last claim time
      setPoints(points + 1);
      setLastClaimTime(currentTime);

      // Save updated points and last claim time to local storage
      localStorage.setItem("points", points + 1);
      localStorage.setItem("lastClaimTime", currentTime.toString());
    } else {
      alert("You can claim 1 point per day. Next claim available in 24 hours.");
    }
  };

  useEffect(() => {
    // Load user's points and last claim time from local storage
    const savedPoints = localStorage.getItem("points");
    const savedLastClaimTime = localStorage.getItem("lastClaimTime");

    if (savedPoints && savedLastClaimTime) {
      setPoints(parseInt(savedPoints, 10));
      setLastClaimTime(new Date(savedLastClaimTime));
    }
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="pl-16 navBar py-96">
      <div className="absolute top-1 mt-12 flex flex-col gap-6 items-center">
        <h2 className="text-3xl text-white font-black  ">Rewards System</h2>

        <p className="text-gray-500 text-lg ">
          At Moonhub Dao, we believe users should be rewarded actively. We
          designed our points system to be fair and encourage daily activity
        </p>
      </div>
      <div className="flex flex-col items-center justify-center absolute top-40">
        <img src={treasure} alt="treasure" className="w-60" />
        <h2 className="text-xl text-white">Points: {points}</h2>
        <button
          className="text-white text-2xl bg-gray-500 p-2 rounded-xl "
          onClick={handleClaim}
        >
          Claim 1 Point
        </button>
      </div>
    </div>
  );
};

export default PointSystem;
