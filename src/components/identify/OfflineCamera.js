import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./ImagePreview";
import * as tf from "@tensorflow/tfjs";
import { imgWidth, imgHeight } from "../../config";
import styles from "./OfflineCamera.module.css";

export default function OfflineCamera() {
  const [dataUri, setDataUri] = useState("");
  const [state, setState] = useState(0);
  async function handleTakePhoto(dataUri) {
    const model = await tf.loadLayersModel("/tfjs/model.json");
    var img = new Image();
    img.width = imgWidth;
    img.height = imgHeight;
    img.src = dataUri;
    var tensorImg = tf.browser
      .fromPixels(img)
      .resizeNearestNeighbor([imgWidth, imgHeight])
      .toFloat()
      .expandDims();
    var prediction = model
      .predict(tensorImg)
      .data()
      .then((res) => {
        setState(res);
      });
    setDataUri(dataUri);
  }
  const isFullscreen = false;
  return (
    <div>
      {dataUri ? (
        <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
      ) : (
        <Camera
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
        />
      )}
      <h2 className={styles.h2}>
        Your find is a fossil:{" "}
        {state == 0 ? "" : state < 0.5 ? "True" : "False"}
      </h2>
      <p className={styles.p}>We are {state}% confident!</p>
    </div>
  );
}
