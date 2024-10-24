import audioData from "./data/Audio.tsx";
import Drum from "./components/Drum.tsx"

// data audio
// const audioArray = audioData;



function App() {
  return (
    <main>
      <div id="drum-machine">
        <h1>FCC Drum Machine</h1>
        {audioData.map(audio => (
          <Drum key={audio.id} audio={audio}/>
        ) 
        )}
      </div>
    </main>
  );
}

export default App;
