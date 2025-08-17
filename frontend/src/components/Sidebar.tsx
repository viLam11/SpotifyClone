import { useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { ThemeContext } from "../providers/ThemeProvider";


export type Song = {
    "genre": string,
    "songName": string,
    "urlPicsumPhotos": string
}

export type SidebarProps = {
    selectedSong?: Song | undefined ;
    setSelectedSong: Dispatch<SetStateAction<Song | undefined>>;
}

export default function Sidebar({setSelectedSong} : SidebarProps) {
    const {theme } = useContext(ThemeContext)
    const [_, setError] = useState(null);
    const [sidebarSongs, setSideBarSongs] = useState<Song[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/sidebar/songs")
            .then((data) => data.json() as  Promise<Song[]>)
            .then((data) => setSideBarSongs(data))
            .catch((error) => setError(error))
    }, [])                    


    return (
        <div className={`w-3/12 mt-4 p-2 rounded-xl ${theme == "light" ? 'text-black bg-[#f4f4f4]' : 'text-white'}`}>
            <div className="search h-10">
            </div>
            <div className={`playlist-list flex flex-col gap-4`}>
                {sidebarSongs.map((playlist, index) => (
                    <div  key={index} onClick={() => setSelectedSong(playlist) }>
                        <PlaylistSideBar title={playlist.songName} img={playlist.urlPicsumPhotos}
                    />
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

function PlaylistSideBar({ title, img }: { title: string | undefined, img: string }) {
    return (
        <div className={`h-16 w-full p-2 rounded-md mx-auto hover:-translate-y-1 transition-transform duration-300 `} >
            <div className="flex flex-row gap-2">
                <img src={img} alt="" style={{ width: "3em", height: "3em", borderRadius: "10px" }} />
                <div className="flex flex-col">
                    <div className="font-semibold">{title}</div>
                    <div className="text-[#989696]">EP . Hoang Dung</div>
                </div>
            </div>
        </div>
    )
}