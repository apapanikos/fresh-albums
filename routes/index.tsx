import { Handlers, PageProps } from "$fresh/server.ts";
import { h } from "preact";
import AlbumCard from "../components/AlbumCard.tsx";
import Header from "../components/Header.tsx";
import { Album } from "../utils/types.ts";

export const handler: Handlers<{albums: Album[], query: string}> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const filter = query ? `?q=${encodeURIComponent(query)}` : "";
    const albums = await fetch(`https://jsonplaceholder.typicode.com/albums${filter}`).then((res) => res.json());
    if (!albums) {
      return new Response("Albums Not found", { status: 404 });
    }
    return ctx.render({
      albums,
      query
    })
  }
}

export default function Home(props: PageProps<{albums: Album[], query: string}>) {
  const { albums, query } = props.data;

  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <Header />
      <form class = "flex w-full gap-2" method="GET">
        <input
          class = "flex-grow w-full shadow-sm focus:outline-none focus:ring-2 focus:border-transparent focus-visible:ring-green-300 focus:ring-green-300 focus:border-green-300 block sm:text-lg border-1 rounded-md p-3"
          type="text"
          name="q"
          value={query}
          placeholder="Search for albums"
        />
        <button
          type="submit"
          class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 px-10"
        >
          Search
        </button>
      </form>
      <ul class="grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-2">
        {albums.map((album) => (
          <AlbumCard album={album} key={album.id}/>
        ))}
      </ul>
    </div>
  );
}
