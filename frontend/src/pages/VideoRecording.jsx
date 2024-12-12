import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const VideoRecording = () => {
    const [question, setQuestion] = useState("Describe your favorite hobby and why you enjoy it.");
    const [recording, setRecording] = useState(false);
    const [videoBlob, setVideoBlob] = useState(null);
    const [cameraOn, setCameraOn] = useState(false);
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const recordedChunks = useRef([]);

    const handleCameraToggle = async () => {
        if (cameraOn) {
            // Stop camera
            const stream = videoRef.current.srcObject;
            if (stream) {
                stream.getTracks().forEach((track) => track.stop());
                videoRef.current.srcObject = null;
            }
            setCameraOn(false);
        } else {
            // Start camera
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            videoRef.current.play();
            setCameraOn(true);
        }
    };

    const handleStartRecording = () => {
        const stream = videoRef.current.srcObject;
        if (stream) {
            mediaRecorderRef.current = new MediaRecorder(stream);
            recordedChunks.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    recordedChunks.current.push(event.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                const blob = new Blob(recordedChunks.current, { type: "video/webm" });
                setVideoBlob(blob);
            };

            mediaRecorderRef.current.start();
            setRecording(true);
        }
    };

    const handleStopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setRecording(false);
        }
    };

    const handlePlayRecording = () => {
        if (videoBlob) {
            const videoURL = URL.createObjectURL(videoBlob);
            window.open(videoURL);
        }
    };

    const handleSubmit = async () => {
        if (!videoBlob) {
            alert("Please record a video before submitting.");
            return;
        }

        // Convert videoBlob to MP3
        const videoFile = new File([videoBlob], "response.webm", { type: "video/webm" });
        const formData = new FormData();
        formData.append("question", question);
        formData.append("video", videoFile);

        try {
            // Upload MP3 to server
            const response = await fetch("https://plugin-5vmd.onrender.com/analyze", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Audio analyzed and video submitted successfully!");
            } else {
                alert("Failed to submit video for analysis.");
            }
        } catch (error) {
            console.error("Error submitting video for analysis:", error);
            alert("Error submitting video for analysis.");
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full filter blur-2xl opacity-30"></div>
                <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400 to-teal-400 rounded-full filter blur-2xl opacity-25 animate-pulse"></div>
            </div>

            <div className="relative z-10 flex flex-col w-11/12 max-w-lg p-8 bg-gray-800 rounded-lg shadow-2xl">
                <h2 className="text-3xl font-extrabold text-center text-white">
                    Video Recording
                </h2>
                <p className="mt-2 text-sm text-center text-gray-400">
                    Please answer the following question by recording a video.
                </p>

                <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-300">{question}</h3>
                    <div className="mt-4 flex flex-col items-center space-y-4">
                        <video
                            ref={videoRef}
                            className="w-full max-w-md rounded-lg bg-black"
                            autoPlay
                            muted
                        ></video>

                        <div className="flex space-x-4">
                            <button
                                onClick={handleCameraToggle}
                                className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600"
                            >
                                {cameraOn ? "Turn Off Camera" : "Turn On Camera"}
                            </button>
                            <button
                                onClick={recording ? handleStopRecording : handleStartRecording}
                                className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-md hover:from-green-600 hover:to-blue-600"
                                disabled={!cameraOn}
                            >
                                {recording ? "Stop Recording" : "Start Recording"}
                            </button>
                        </div>

                        {videoBlob && (
                            <button
                                onClick={handlePlayRecording}
                                className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-md hover:from-yellow-600 hover:to-orange-600"
                            >
                                Play Recording
                            </button>
                        )}
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    className="mt-6 w-full px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600"
                >
                    Submit Response
                </button>

                <p className="mt-4 text-sm text-center text-gray-400">
                    <Link
                        to="/"
                        className="font-medium text-blue-400 hover:text-blue-300"
                    >
                        Go back to home
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default VideoRecording;
