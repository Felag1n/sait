import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { usePlayerStore } from "../store/playerStore"
import PlayButton from "../components/PlayerButton/PlayButton"

export function SongPage() {
    const params = useParams()
    const id = +params.id
    const setSongAtStore = usePlayerStore((state) => state.setSong)

    const [song, setSong] = useState(null)

    useEffect(() => {
        axios
            .get(`http://localhost:1337/api/songs/${id}?populate=*`)
            .then(r => r.data)
            .then(r => ({
                songUrl: "http://localhost:1337" + r.data.attributes.Song.data.attributes.url,
                name: r.data.attributes.Name,
                cover: 'http://localhost:1337' + r.data.attributes.Cover.data[0].attributes.url
            }))
            .then(setSong)
    }, [id])

    useEffect(() => {
        console.log(song)
    }, [song])

    if (!song) {
        return <div>Loading...</div>
    }

    return (
        <div className="group-genre">
            <div className="box genre">
                <img className="image" src={song.cover} alt={song.name} />
                <div className="play-button">
                    <PlayButton
                        onClick={(e) => {
                            e.preventDefault(); // Prevent link navigation on button click
                            setSongAtStore(song.songUrl);
                        }}
                    />
                </div>
            </div>
          
            <div className="song-name">{song.name}</div>
        </div>
    )
}

