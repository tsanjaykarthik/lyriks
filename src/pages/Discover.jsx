import React from "react";

import { SongCard } from "../components";
//import { genres } from '../assets/constants';
import { useEffect, useState } from "react";

// const Discover = () => {
//   const genreTitle = 'pop';

//   return (
//     <div className="flex flex-col">
//       <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
//         <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>

//         <select
//           onChange={() => {}}
//           value=""
//           className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
//         >
//           {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
//         </select>
//       </div>

//       <div className="flex flex-wrap sm:justify-start justify-center gap-8">
//         {[1,2,3,4,5,6,7,8,9,10].map((song, i) => (
//           <SongCard
//             key={song.key}
//             song={song}
//             i={i}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

const Discover = () => {
  //  const { data, isFetching, error} = useGetAlbumDetailsQuery();
  const genreTitle = "Pop";

  const [music, setMusic] = useState([]);

  const getMusic = async () => {
    const url =
      "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=16&numberOfTopResults=10";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "882b2c50acmshd244b9d3901bfe9p116b52jsn50278117ecec",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMusic(result);
      console.log(result);
    } catch (error) {
      setMusic(error);
    }
  };

  useEffect(() => {
    getMusic();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-between items-center flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">Discover {genreTitle}</h2>
        {/* <select name="" id=""
                className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none mt-5"
            >
              genres.map((genre)=> <option key={genre.value}>{genre.title}</option>)}
            </select> */}
      </div>
      {/* <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-br from-lime-300 to-green-500 p-6 sm:py-12"> */}
        {/* <div class="relative rounded-2xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10"> */}
          <div class="mx-auto max-w-md">
            <form action="" class="relative mx-auto w-max">
              <input
                type="search"
                class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text-cyan-300 focus:border-cyan-300 focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-cyan-500 px-3.5 peer-focus:border-cyan-300 peer-focus:stroke-cyan-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke = "currentColor"
                stroke-width="4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>
        {/* </div> */}
      {/* </div> */}
      <div className="flex flex-wrap justify-center gap-8">
        {music?.users?.items.map((musicData) => (
          <SongCard
            imag={musicData?.data?.image?.largeImageUrl}
            song={musicData?.data?.displayName}
          />
        ))}
      </div>
    </div>
  );
};
export default Discover;
