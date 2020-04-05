import React from 'react';
import VideoPlayer from './VideoPlayer';
import ReactHLS from 'react-hls';

function App() {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [{
      src: 'https://res.cloudinary.com/demo/video/upload/sp_hd/dog.m3u8',
      type: 'application/x-mpegURL'
    }]
  }
  return (
    <div>
      <ReactHLS url={"http://localhost:8000/live/test/index.m3u8"} width='700' height='500'/>
      {/* <VideoPlayer { ...videoJsOptions } /> */}
    </div>
  );
}

export default App;
