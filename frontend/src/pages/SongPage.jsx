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
            }))
            .then(setSong)
    }, [])

    return (
        <div style={{ color: 'red' }}>
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