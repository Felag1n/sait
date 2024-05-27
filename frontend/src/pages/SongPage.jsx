import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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
    }, [])

    useEffect(() => {
        console.log(song)
    }, [song])

    return (
        <div style={{ color: 'red' }}>
            {/* <a href="#">
                <div className="box genre">
                    <img className="Image" src={song.cover}  />
                </div>
                <div className="song-name">{song.name}</div>
            </a> */}
            {/* <Link to={`/song/${song.id}`} key={song.id}>
                <div className="box alternative">
                <img className="Image" src={song.cover}  />
                </div>
                <div className="song-name">{song.name}</div>
            </Link> */}
            <PlayButton
                onClick={() => setSongAtStore(song.songUrl)}
            />
            {/* <button
                disabled={!song}
            >
            </button> */}
        </div>
    )
}