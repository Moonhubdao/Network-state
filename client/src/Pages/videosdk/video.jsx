import { useState } from "react";
import Videos from "./videocomp";
import { Link } from "react-router-dom";

const Video = () => {
  const [join, setJoin] = useState(false);
  const toggleJoin = () => {
    setJoin(!join);
  };

  return (
    <div className="w-full h-full gap-20 items-center flex flex-col pl-12 py-96 navBar ">
      <h2 className="text-white text-3xl"> Video Room </h2>
      <p className="text-white text-xs">
        Because the agora sdk used issues a temp token or a server side code
        model, for test purposes the video feature will be on demo
      </p>
      <div>
        {!join && (
          <div className="text-white bg-gray-600 w-24 p-2 rounded-xl">
            <div className="mb-4">
              <button onClick={toggleJoin}>Join Room</button>
            </div>
            <Link to='/dashboard'>Dashboard</Link>
          </div>
        )}

        {join && <Videos onLeaveChannel={() => setJoin(false)} />}
      </div>
    </div>
  );
};

export default Video;
