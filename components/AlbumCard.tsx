import { Album } from '../utils/types.ts';

export default function AlbumCard({album}: {album: Album}) {
  return (
    <a
      href={`/albums/${album.id}`}
      class=" cursor-pointer my-2 p-2 rounded border-2 border-gray-500 font-semibold group transition duration-200 hover:bg-white hover:shadow-xl hover:border-transparent"
    >
      <li class="group-hover:text-green-300 text-gray-900 active:shadow-md transition duration-200 ease-in-out">
        {album.title}
      </li>
    </a>
  );
}