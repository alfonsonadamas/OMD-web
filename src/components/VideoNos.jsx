import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import '../assets/css/Nosotros.css'

const VideoNos = () => {
    return (
        <div className="Video">
            <ReactPlayer
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            width={'1064px'}
            height={'659px'}
            controls
            volume={'80'}
            />
        </div>
    );
}

export default VideoNos;