import { useState } from "react";
import Webcam from "react-webcam";



const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  
  const WebcamCapture = () => {
    const [cameraSRC, setImagen]= useState("");
    return (
        <>
    
<Webcam
audio={false}
height={360}
screenshotFormat="image/jpeg"
width={640}
videoConstraints={videoConstraints}
>
    

{({ getScreenshot }) => (
    
<button

onClick={() => {
setImagen(getScreenshot());

}}
>
Capture photo
</button>
      )}
    </Webcam>
    <img src={cameraSRC} />
</>
  );
        };
        export default WebcamCapture;