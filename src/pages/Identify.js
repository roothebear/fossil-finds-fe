import { React, useState } from "react";
import axios from "axios";
import OfflineCamera from "../components/identify/OfflineCamera";

export default function Identify() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [cleanOrMessy, setCleanOrMessy] = useState("");
  const [predictedVal, setPredictedVal] = useState("");
  const [apiUrl, setApiUrl] = useState("");

  const fileSelectedHandler = (event) => {
    setSelectedFile({
      selectedFile: event.target.files[0],
    });
  };

  const fileUploadHandler = () => {
    var fd = new FormData();
    fd.append("file", selectedFile);
    axios.post(apiUrl, fd).then((res) => {
      setCleanOrMessy({
        isLoaded: true,
        cleanOrMessy: res.data["is_clean"],
        predictedVal: res.data["predictedVal"],
      });
      setPredictedVal({
        predictedVal: res.data["predictedVal"],
      });
      return res;
    });
  };

  const offlineCameraAppHandler = () => {
    var x = document.getElementById("camera1");
    var y = document.getElementById("camera");
    x.classList.toggle("App-camera");
    y.classList.add("App-camera");
  };

  // const openCameraHandler = () => {
  //   var x = document.getElementById("camera");
  //   var y = document.getElementById("camera1");
  //   x.classList.toggle("App-camera");
  //   y.classList.add("App-camera");
  // };

  return (
    <main className="idenfify_main">
      <h1>Identify your find!</h1>
      <p>Try taking a photo of it using our fossil identifier below.</p>
      {/* <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button> */}
      {/* <button onClick={openCameraHandler}>take a photo of your find</button> */}
      {/* <button className="button_main" onClick={offlineCameraAppHandler}>
        take a photo of your find
      </button> */}
      {/* <div>reacc
        <h3>This fossil might be a: {cleanOrMessy.cleanOrMessy}</h3>
      </div>
      <div>
        <h3>We are {predictedVal.predictedVal} confident!</h3>
      </div> */}
      <div id="camera" className="App-camera">
        <OfflineCamera />
      </div>
      {/* <div id="camera1" className="App-camera">
        <OfflineCamera />
      </div> */}
    </main>
  );
}
