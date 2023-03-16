"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface IScrobbleResponse {
  recenttracks: {
    track: {
      "@attr": {
        nowplaying: string;
      };
      artist: {
        "#text": string;
      };
      name: string;
      attr: {
        nowplaying: string;
      };
    }[];
  };
}

function SpotifyCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState<{ artist: string; name: string } | null>(
    null
  );
  const [_error, setError] = useState<string | null>(null);

  useEffect(() => {
    const scrobbleSongs = async () => {
      try {
        const data = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=10&user=andreaserhard&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json`,
          { cache: "no-store", next: { revalidate: 15 } }
        );
        const res = (await data.json()) as IScrobbleResponse;
        const songs = Array.from(res.recenttracks.track);
        setSong({ name: songs[0].name, artist: songs[0].artist["#text"] });
        setIsPlaying(true);
      } catch (err) {
        console.error(err);
        setIsPlaying(false);
        setError(err as string);
      }
    };

    scrobbleSongs();
    const interval = setInterval(() => scrobbleSongs(), 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isPlaying && (
        <div className="flex gap-2 mb-4 text-zinc-900/70 dark:text-white/80 text-sm items-center">
          <Image
            src="/project-icons/spotify.svg"
            width={16}
            height={16}
            alt="spotify logo"
            className="aspect-square"
          />
          Listening to {song?.artist} - {song?.name}
          <span className="spotifybars"></span>
        </div>
      )}
    </>
  );
}
export default SpotifyCard;
