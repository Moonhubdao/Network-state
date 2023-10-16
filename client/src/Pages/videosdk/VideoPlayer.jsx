import React, { useEffect, useRef, useState } from "react";

const VideoPlayer = ({
  user,
  toggleAudioMute,
  toggleVideoMute,
  leaveChannel,
  toggleScreenSharing,
  handleLocalAudioVolumeChange,
  handleRemoteAudioVolumeChange,
  isSharingEnabled,
  isMuteVideo,
  localAudioVolume,
  remoteAudioVolume,
}) => {
  const videoRef = useRef(null);
  const { uid, audioTrack } = user;

  useEffect(() => {
    if (audioTrack) {
      audioTrack.play();
    }

    if (videoRef.current && user.videoTrack) {
      user.videoTrack.play(videoRef.current);

      // Cleanup function to stop video track when component is unmounted
      return () => {
        user.videoTrack.stop();
      };
    }
  }, [user]);

  return (
    <div className="video-player">
      <div className="video-container" ref={videoRef}></div>
      <div className="user-info text-white">Uid: {uid}</div>

      <div className="button-container flex gap-2">
        <button className="text-white bg-gray-500 p-2 rounded-xl font-bold hover:bg-pink-600" onClick={toggleScreenSharing}>
          {isSharingEnabled ? "Stop Sharing" : "Share Screen"}
        </button>

        <button
        className="text-white bg-gray-500 p-2 rounded-xl font-bold hover:bg-pink-600"
         onClick={toggleAudioMute}>
          {audioTrack.isEnabled ? "Mute Audio" : "Unmute Audio"}
        </button>

        <button 
        className="text-white bg-gray-500 p-2 rounded-xl font-bold hover:bg-pink-600"
        onClick={toggleVideoMute}>
          {isMuteVideo ? "Unmute Video" : "Mute Video"}
        </button>

        <button 
        className="text-white bg-gray-500 p-2 rounded-xl font-bold hover:bg-pink-600"
        onClick={leaveChannel}>Leave Channel</button>
      </div>

      <div className="volume-controls">
        <label>Local Audio Level: {localAudioVolume}</label>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={localAudioVolume}
          onChange={handleLocalAudioVolumeChange}
        />
        <label>Remote Audio Level: {remoteAudioVolume}</label>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={remoteAudioVolume}
          onChange={handleRemoteAudioVolumeChange}
        />
      </div>

      <style jsx>{`
        .video-player {
          margin: 20px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }

        .video-container {
          width: 200px;
          height: 200px;
          border-radius: 6px;
        }

        .user-info {
          margin-top: 10px;
        }

        .button-container {
          margin-top: 10px;
        }

        button {
          margin-right: 10px;
        }

        .volume-controls {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;
