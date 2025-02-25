import "./App.css";
import Message from "./components/Message";
import videoSrc from "./assets/background_video.mp4";

function App() {
  return (
    <>
      <video className="video-background" src={videoSrc} autoPlay loop muted />
      <Message />
    </>
  );
}

export default App;
