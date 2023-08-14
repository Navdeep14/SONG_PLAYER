import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import logo from "./assets/logo.svg";

import TrackRow from "./components/TrackRow";
import AudioPlayer from "./components/AudioPlayer";
import Accordion from "./components/Accordian";
import PlaylistTrackRow from "./components/PlaylistTrackRow";

function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState();
  const [currentTab, setCurrentTab] = useState("tracks")

  useEffect(() => {
    fetch("http://0.0.0.0:8000/tracks/", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => setTracks(data));
  }, []);

  const playlistArray = [{
    playlistTitle: "playlist1",
    playlistTracks: 
      [
      {
        "id": "FKYVlOXV8Q",
        "title": "Slum Village",
        "length": 166,
        "bpm": 148,
        "genres": [
          "Mainstream Hip Hop"
        ],
        "moods": [
          "Dark",
          "Restless"
        ],
        "main_artists": [
          "Tilden Parc"
        ],
        "featured_artists": [],
        "audio": "https://storage.googleapis.com/tech-coding-interview-assets/FKYVlOXV8Q.mp3",
        "cover_art": "https://storage.googleapis.com/tech-coding-interview-assets/FKYVlOXV8Q.jpg",
        "waveform": "https://storage.googleapis.com/tech-coding-interview-assets/FKYVlOXV8Q.json",
        "spotify": "http://link.epidemicsound.com/FKYVlOXV8Q/spotify"
      },
      {
        "id": "ZkuGOyOiiE",
        "title": "Se Acabó",
        "length": 168,
        "bpm": 98,
        "genres": [
          "Modern Latin"
        ],
        "moods": [
          "Happy",
          "Restless"
        ],
        "main_artists": [
          "Lawd Ito"
        ],
        "featured_artists": [],
        "audio": "https://storage.googleapis.com/tech-coding-interview-assets/ZkuGOyOiiE.mp3",
        "cover_art": "https://storage.googleapis.com/tech-coding-interview-assets/ZkuGOyOiiE.jpg",
        "waveform": "https://storage.googleapis.com/tech-coding-interview-assets/ZkuGOyOiiE.json",
        "spotify": "http://link.epidemicsound.com/ZkuGOyOiiE/spotify"
      }]
  },
  ]

  const onclick = (value) => {

    setCurrentTab(value)
    if (value==="tracks")
    {

    }
    else 
    {
      
    }
  }

  const handlePlay = (track) => setCurrentTrack(track);

  return (
    <>
      <main className={styles.app}>
        <nav>
          <img src={logo} className={styles.logo} alt="Logo" />
          <ul className={styles.menu}>
            <li onClick={() => setCurrentTab("tracks")}>
              <a href="#" className={currentTab === "tracks" ? styles.active : {}}>
                Tracks
              </a>
            </li>
            <li onClick={() => setCurrentTab("playlists")}>
              <a href="#" className={currentTab === "playlists" ? styles.active : {}} >Playlists</a>
            </li>
          </ul>
        </nav>
        <section>
          {currentTab === "tracks" ?
            <>
              {tracks.map((track, ix) => (
                <TrackRow key={ix} track={track} handlePlay={handlePlay} />
              ))}
            </>
            :
            <>
            {playlistArray.map((playlistItem)=>{
              return <Accordion title={playlistItem.playlistTitle} content={<>
                {playlistItem.playlistTracks.map((track, ix) => (
                  <PlaylistTrackRow key={ix} track={track} handlePlay={handlePlay} />
                ))}
              </>} />
            })}
              <button>+ Add Playlist </button>
            </>

          }

        </section>
      </main>
      {currentTrack && <AudioPlayer track={currentTrack} />}
    </>
  );
}

export default App;
