import React, { useEffect, useState } from "react";
import "./QuickConnectBanner.css";
import QuickConnectCharts from "../QuickConnectCharts/QuickConnectCharts"
import {ReactFlowProvider} from 'reactflow';
const QuickConnectBanner = () => {
  const [refresh, setRefresh] = useState(0);
  // List of random image URLs from the web
  const backgroundImages = [
    //"https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=1380&t=st=1696263163~exp=1696263763~hmac=dcd6280ff45545a8d96183f7e5abeac8eb6cbd37462a6cf7511054fa70e951cb"
    "/img/fwf.png"
    // "https://coolbackgrounds.io/images/backgrounds/red/red-contour-ca688a95.svg",
    // "https://coolbackgrounds.io/images/backgrounds/black/black-trianglify-b6181ec2.jpg"
    // Add more image URLs here
  ];
  const refreshBackground = (e) => {
    e.preventDefault();
    setRefresh(refresh + 1);
  };

  // Randomly select a background image
  const randomImage =
    backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

  // Generate random values for x and y position
  const randomX = Math.random();
  const randomY = Math.random();

  return (
    <>
      <button onClick={(e) => refreshBackground(e)}>Refresh</button> <br />
      <br />
      <div
        className="banner"
        style={{
          backgroundImage: `url(${randomImage})`,
          // Set the random x and y position
          "--x": randomX,
          "--y": randomY
        }}
      >                <ReactFlowProvider>

        <div className="box-container">
        <QuickConnectCharts/>
        </div>
        </ReactFlowProvider>
      </div>
    </>
  );
};

export default QuickConnectBanner;
