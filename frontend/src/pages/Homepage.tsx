import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import Sidebar, { type Song } from "../components/Sidebar";

import PauseIcon from '@mui/icons-material/Pause';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Slider } from "@mui/material";

const mockPlaylists = [
    { id: 1, name: "Top Hits 2025", image: "https://picsum.photos/seed/V07iZ9e5o/640/480" },
    { id: 2, name: "Chill Vibes", image: "https://picsum.photos/seed/rSe1xF/640/480" },
    { id: 3, name: "Workout Mix", image: "https://picsum.photos/seed/j5GwSRTP5/640/480" },
    { id: 4, name: "Jazz Essentials", image: "https://picsum.photos/seed/pxcGhj8GMP/640/480" },
    { id: 5, name: "Lo-fi Beats", image: "https://picsum.photos/seed/FoWxQpj/640/480"},
];

export default function Homepage() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isPlaying, setIsPlaying] = useState(false)
    const [selectedSong, setSelectedSong] = useState<Song | undefined>(undefined);
    const [imgUrl, setImgUrl] = useState("https://seekvectors.com/storage/images/spotify-logo-04.jpg")

    useEffect(() => {
        setImgUrl((prev) =>
            prev == "https://seekvectors.com/storage/images/spotify-logo-04.jpg" ? ""
                : "https://seekvectors.com/storage/images/spotify-logo-04.jpg")
    }, [theme])

    return (
        <>
            <div
                className={`h-screen relative flex flex-col ${theme == "light" ? "bg-white text-black" : "bg-black text-white"
                    }`}
            >
                {/* Top Search Bar */}
                <div className="search flex flex-row h-18 p-2 items-center">
                    <div className="w-3/12 justify-center items-center">
                        <img src={imgUrl} style={{ width: 60 }} alt="" />
                    </div>
                    <div className="flex-1 items-center justify-between">
                        <textarea
                            className={`w-10/12 h-12 rounded-2xl p-2 mx-auto ${theme == "light"
                                ? "bg-white border border-black"
                                : "bg-[#aaa7a757] text-white border-0 outline-0"
                                }`}
                            placeholder="What do you want to play?"
                        />
                    </div>
                    <div className="w-3/12 flex flex-row justify-evenly items-center">
                        <div
                            className={`p-2 rounded-2xl font-bold ${theme == "light"
                                ? "border border-black"
                                : "bg-white text-black"
                                }`}
                        >
                            Explore Premium
                        </div>
                        <div className={`border p-2 rounded-2xl ${theme == "light" ? "border-black" : "border-white"}`}>Account</div>
                    </div>
                </div>

                {/* Main Layout */}
                <div className="flex-1">
                    <div className="flex flex-row ">
                        <Sidebar selectedSong={selectedSong} setSelectedSong={setSelectedSong} />
                        <div className="flex-1 p-6">
                            {/* Greeting */}
                            <h1 className="text-2xl font-bold mb-4">
                                {theme == "light" ? "Good Afternoon"
                                    : "Good Evening"}
                            </h1>

                            {/* Playlist Sections */}
                            <div className="">
                                <h2 className="text-xl font-semibold mb-2">Your Playlists</h2>
                                <div className="flex space-x-4 overflow-x-auto pb-4">
                                    {mockPlaylists.map((playlist) => (
                                        <div
                                            key={playlist.id}
                                            className={`min-w-[160px] rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-200 ${theme == "light"
                                                ? "bg-gray-100"
                                                : "bg-[#181818] hover:bg-[#282828]"
                                                }`}
                                        >
                                            <img
                                                src={playlist.image}
                                                alt={playlist.name}
                                                className="w-full h-32 object-cover rounded-lg mb-2"
                                            />
                                            <p className="font-medium truncate">{playlist.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">Made For You</h2>
                                <div className="flex space-x-4 overflow-x-auto pb-4">
                                    {mockPlaylists.map((playlist) => (
                                        <div
                                            key={playlist.id}
                                            className={`min-w-[160px] rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-200 ${theme == "light"
                                                ? "bg-gray-100"
                                                : "bg-[#181818] hover:bg-[#282828]"
                                                }`}
                                        >
                                            <img
                                                src={playlist.image}
                                                alt={playlist.name}
                                                className="w-full h-32 object-cover rounded-lg mb-2"
                                            />
                                            <p className="font-medium truncate">{playlist.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="h-32">
                    {/* Playing song */}
                    <div className={`h-full px-4 ${theme == "light" ? 'bg-[#e4e4e495]' : 'bg-[#252525]'}`}>
                        <div className="h-full w-full flex flex-row justify-around items-center gap-4">
                            <div className="w-80 flex flex-row gap-5">
                                {/* Thumbnail */}
                                <div className="song-thumbnail w-16 h-16 bg-gray-700 rounded overflow-hidden">
                                    <img
                                        src={selectedSong?.urlPicsumPhotos}
                                        alt="Song Thumbnail"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Song info */}
                                <div className="flex flex-col justify-center">
                                    <span className="font-semibold text-sm">{selectedSong?.songName}</span>
                                    <span className="text-gray-400 text-xs">{selectedSong?.genre}</span>
                                </div>
                            </div>


                            {/* Controls */}
                            <div className="w-1/2 flex flex-col items-center">
                                {/* Buttons */}
                                <div className="flex items-center gap-4 h-10">
                                    <SkipPreviousIcon sx={{ size: 60 }} />
                                    <button className="items-center" onClick={() => setIsPlaying((prev) => !prev)} >
                                        {isPlaying ? <PauseIcon /> : <PlayCircleIcon />}
                                    </button>
                                    <SkipNextIcon />
                                </div>
                                {/* Progress bar */}
                                <div className="flex items-center gap-2 w-full">
                                    <span className="text-xs text-gray-400">0:42</span>
                                    <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                                        <div className="bg-green-500 w-1/3 h-full"></div>
                                    </div>
                                    <span className="text-xs text-gray-400">3:45</span>
                                </div>
                            </div>

                            {/* Volume */}
                            <div className="flex items-center gap-2 w-32">
                                <span>🔊</span>
                                <div className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden">
                                    <div className="bg-green-500 w-2/3 h-full"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Theme Toggle */}
            <div className="absolute bottom-30 right-10 ">
                <button
                    className={`rounded-3xl p-2 w-24 flex flex-row items-center justify-evenly ${theme == "light" ? "bg-white text-black border border-black" : "bg-white text-black "
                        }`}
                    onClick={() =>
                        setTheme((prev: string) => (prev == "light" ? "dark" : "light"))
                    }
                >
                    {theme != "light" ? <>
                        <div className="rouned-3xl">
                            🌞
                        </div>
                        <div className="w-4 h-4 bg-blue-900 rounded-full">

                        </div>
                    </> : <>
                        <div className="w-4 h-4 bg-blue-900 rounded-full">

                        </div>
                        <div className="rouned-3xl">
                            🌜
                        </div>
                    </>}

                </button>
            </div>
            </div>

            
        </>
    );
}
