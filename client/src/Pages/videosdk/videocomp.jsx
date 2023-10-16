import React, { useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import VideoPlayer from "./VideoPlayer";

const APP_ID = "e5b81dc86dae41bdbdf2621000b5dcce";
const TOKEN =
  "007eJxTYDjyTb0seLunYIP3NMujrEZbBDPPrZKrduyaMUVcUfLLjP8KDKmmSRaGKckWZimJqSaGSSlJKWlGZkaGBgYGSaYpycmpokt0UhsCGRk8fQ6xMjJAIIjPwpCbmJnHwAAA9LoeNw==";
const CHANNEL = "main";

const client = AgoraRTC.createClient({
  mode: "rtc",
  codec: "vp8",
});

const Videos = ({ onLeaveChannel }) => {
  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);
  const [isSharingEnabled, setIsSharingEnabled] = useState(false);
  const [isMuteVideo, setIsMuteVideo] = useState(false);
  const [localAudioVolume, setLocalAudioVolume] = useState(100);
  const [remoteAudioVolume, setRemoteAudioVolume] = useState(100);

  // FXNS {FOr all fxns }

  const toggleScreenSharing = async () => {
    if (isSharingEnabled) {
      // Stop screen sharing and replace it with the local video track
      const [audioTrack, videoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks();
      await client.unpublish(localTracks);
      await client.publish([audioTrack, videoTrack]);

      setLocalTracks([audioTrack, videoTrack]);
    } else {
      // Start screen sharing
      const screenTrack = await AgoraRTC.createScreenVideoTrack();
      await localTracks[1].replaceTrack(screenTrack, true);
    }

    setIsSharingEnabled(!isSharingEnabled);
  };

  const handleLocalAudioVolumeChange = (evt) => {
    const volume = parseInt(evt.target.value);
    setLocalAudioVolume(volume);
    localTracks[0].setVolume(volume);
  };

  const handleRemoteAudioVolumeChange = (evt) => {
    const volume = parseInt(evt.target.value);
    setRemoteAudioVolume(volume);
    // Set remote audio volume for each remote user
    users.forEach((user) => {
      user.audioTrack.setVolume(volume);
    });
  };

  const toggleAudio = async () => {
    console.log("Toggle Audio");
    const [audioTrack] = localTracks;
    await audioTrack.setEnabled(!audioTrack.isEnabled);
  };

  const toggleVideo = () => {
    const [videoTrack] = localTracks;
    videoTrack.setEnabled(!isMuteVideo);
    setIsMuteVideo(!isMuteVideo);
  };

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);
    if (mediaType === "video") {
      setUsers((previousUsers) => [...previousUsers, user]);
    }
    if (mediaType === "audio") {
      // Handle audio tracks if needed
      user.audioTrack.play();
    }
  };

  const handleUserLeft = (user) => {
    setUsers((previousUsers) =>
      previousUsers.filter((u) => u.uid !== user.uid)
    );
  };

  const leaveChannel = async () => {
    for (let localTrack of localTracks) {
      localTrack.stop();
      localTrack.close();
    }
    client.leave();

    if (typeof onLeaveChannel === "function") {
      onLeaveChannel();
    }
  };

  useEffect(() => {
    client.on("user-published", handleUserJoined);
    client.on("user-unpublished", handleUserLeft);

    
    const joinChannel = async () => {
      try {
        await client.join(APP_ID, CHANNEL, TOKEN, null);
        const [audioTrack, videoTrack] =
          await AgoraRTC.createMicrophoneAndCameraTracks();
        await client.publish([audioTrack, videoTrack]);
        setUsers([{ uid: client.uid, videoTrack, audioTrack }]);
        setLocalTracks([audioTrack, videoTrack]);

        if (isSharingEnabled) {
          toggleScreenSharing();
        }
      } catch (error) {
        console.error("Error joining channel: ", error);
      }
    };

    joinChannel();

    if (isSharingEnabled) {
      toggleScreenSharing();
    }

    // Cleanup on component unmount
    return () => {
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      client.off("user-published", handleUserJoined);
      client.off("user-unpublished", handleUserLeft);
      client.unpublish(localTracks).then(() => client.leave());
    };
  }, [isSharingEnabled]);

  return (
    <div className="flex  flex-col items-center justify-center ">
      <h1 className="text-white font-bold text-xl">Video Room</h1>
      <div className="grid grid-cols-2 w-full">
        {users.map((user) => (
          <VideoPlayer
            key={user.uid}
            user={user}
            leaveChannel={leaveChannel}
            toggleAudioMute={toggleAudio}
            toggleVideoMute={toggleVideo}
            toggleScreenSharing={toggleScreenSharing}
            handleLocalAudioVolumeChange={handleLocalAudioVolumeChange}
            handleRemoteAudioVolumeChange={handleRemoteAudioVolumeChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;
