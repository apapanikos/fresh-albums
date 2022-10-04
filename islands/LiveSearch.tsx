import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import AlbumCard from "../components/AlbumCard.tsx";
import { Album } from "../utils/types.ts";

export default function LiveSearch() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((albums) => setAlbums(albums));
    }, [query]);

    return (
     <Fragment>
      <form class = "w-full">
        <input
          class = "flex-grow w-full shadow-sm focus:outline-none focus:ring-2 focus:border-transparent focus-visible:ring-green-300 focus:ring-green-300 focus:border-green-300 block sm:text-lg border-1 rounded-md p-3"
          type="text"
          name="q"
          value={query}
          placeholder="Search for albums"
          onKeyUp={(e) => setQuery(e.currentTarget.value)}
        />
      </form>

      <ul class="grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-2">
        {albums.map((album) => (
          <AlbumCard album={album} key={album.id}/>
        ))}
      </ul>
     </Fragment>
    )
}