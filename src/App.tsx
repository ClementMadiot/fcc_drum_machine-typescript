import audioData from "./data/Audio.tsx";
import Drum from "./components/Drum.tsx";

// data audio
// const audioArray = audioData;

function App() {
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioData.find((clip) => clip.key === e.key.toUpperCase());
    if (!clip) return;
    (document.getElementById(clip.key) as HTMLAudioElement)
      ?.play()
      .catch(console.error);

      document.getElementById("drum-" + clip.key)?.focus();
      document.getElementById("display")!.innerText = clip.id
  };
  return (
    <main>
      <div className="container" id="drum-machine" onKeyDown={playAudio}>
        <h1>FCC Drum Machine</h1>
        {audioData.map((audio) => (
          <Drum key={audio.id} audio={audio} />
        ))}
      </div>
      <div id="display">fwe</div>
    </main>
  );
}

export default App;
