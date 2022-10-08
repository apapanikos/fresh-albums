import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../../components/Header.tsx";
import { Album, AlbumPhoto } from "../../utils/types.ts";

export const handler: Handlers<{album: Album, photos: AlbumPhoto[]}> = {
  async GET(req, ctx) {
    const album = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${ctx.params.id}`
    ).then((res) => res.json());
    const albumPhotos = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${ctx.params.id}/photos`
    ).then((res) => res.json());
    if (!album) {
      return new Response("Album Not found", { status: 404 });
    }
    return ctx.render({album: album, photos: albumPhotos});
  }
}

export default function Details(props: PageProps<{album: Album, photos: AlbumPhoto[]}>) {
  const { album } = props.data;
  const { photos } = props.data;
  return (
    <div class = "p-4 mx-auto max-w-screen-md">
      <Header />
      <h1 class="text-2xl font-bold">{album.title}</h1>
      <ul class="grid sm:grid-cols-4 md:grid-cols-5 mt-8 gap-2">
        {photos.map((photo) => (
          <li>
            <div>
              <img src = {photo.thumbnailUrl} alt="photo.id" />
              <h4 class="text-sm font-semibold">{photo.title}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}