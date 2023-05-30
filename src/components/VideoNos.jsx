import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import "../assets/css/Nosotros.css";

const VideoNos = (nosotros) => {
  return (
    <div className="Video">
      <ReactPlayer
        url={nosotros.video}
        width={"1064px"}
        height={"659px"}
        controls
        volume={"80"}
      />
    </div>
  );
};

export default VideoNos;
