import { useEffect, useState } from "react";
import { Howl } from "howler";

import Home from "./pages/Home";
import GalaxyAwakening from "./pages/GalaxyAwakening";
import MemoryPage from "./pages/MemoryPage";
import DreamscapeRealm from "./pages/DreamscapeRealm";
import StarlightGarden from "./pages/StarlightGarden";
import EternalLove from "./pages/EternalLove";

// 🎵 Import all background music
import bg1 from "./sounds/background.mp3";
import bg2 from "./sounds/galaxy.mp3";
import bg3 from "./sounds/memory.mp3";
import bg4 from "./sounds/dreamscape.mp3";
import bg5 from "./sounds/starlight.mp3";
import bg6 from "./sounds/eternity.mp3";

const tracks = [bg1, bg2, bg3, bg4, bg5, bg6];

function App() {
  const [phase, setPhase] = useState(1);
  const [sound, setSound] = useState(null);
  const [musicKey, setMusicKey] = useState(0); // 👈 forces re-run of music effect

  // 🎧 Play/fade between background music
  useEffect(() => {
    if (phase < 1 || phase > tracks.length) return;

    // Stop any previous track
    if (sound) {
      sound.fade(0.5, 0, 2000);
      setTimeout(() => {
        sound.stop();
        sound.unload();
      }, 2000);
    }

    // Start a new track
    const newSound = new Howl({
      src: [tracks[phase - 1]],
      volume: 0,
      loop: true,
      html5: true,
      onplay: () => newSound.fade(0, 0.5, 2000),
    });

    newSound.play();
    setSound(newSound);

    // Clean up on unmount
    return () => {
      newSound.stop();
      newSound.unload();
    };
  }, [phase, musicKey]); // 👈 re-triggers when reset

  // 🌸 Restart adventure from beginning
  const restartAdventure = () => {
    if (sound) {
      sound.fade(0.5, 0, 2000);
      setTimeout(() => {
        sound.stop();
        sound.unload();
      }, 2000);
    }
    setPhase(1);
    setMusicKey((k) => k + 1); // 👈 forces music reload for phase 1
  };

  return (
    <>
      {phase === 1 && <Home onStart={() => setPhase(2)} />}
      {phase === 2 && <GalaxyAwakening onNext={() => setPhase(3)} />}
      {phase === 3 && <MemoryPage onNext={() => setPhase(4)} />}
      {phase === 4 && <DreamscapeRealm onNext={() => setPhase(5)} />}
      {phase === 5 && <StarlightGarden onNext={() => setPhase(6)} />}
      {phase === 6 && <EternalLove onRestart={restartAdventure} />}
    </>
  );
}

export default App;
