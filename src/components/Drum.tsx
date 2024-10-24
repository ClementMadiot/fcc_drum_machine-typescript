import { AudioClip } from "../data/Audio";

interface AudioProps {
  audio: AudioClip;
}

const Drum = ({ audio }: AudioProps) => {
  const playAudio = (clip: AudioClip) => {
    (document.getElementById(clip.key) as HTMLAudioElement)
      ?.play()
      .catch(console.error)
  };

  return (
    <button
      key={audio.key}
      className="drum-pad"
      id={`drum-${audio.key}`}
      onClick={() => playAudio(audio)}
    >
      {audio.key}
      <audio id={audio.key} src={audio.url} className="clip" />
    </button>
  );
};

export default Drum;
