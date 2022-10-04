import { Album } from '../utils/types.ts';

export default function AlbumCard({album}: {album: Album}) {
  return (
    <li class="group active:shadow-md transition duration-200 ease-in-out cursor-pointer my-2 p-2 rounded border-2 border-gray-500 hover:bg-white hover:shadow-xl hover:border-transparent">
      <a
        href={`/albums/${album.id}`}
        class="text-gray-900 font-semibold group-hover:text-green-300 transition duration-200"
      >
        {album.title}
      </a>
    </li>
  );
}