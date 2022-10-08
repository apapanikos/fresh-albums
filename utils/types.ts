export type Album = {
  id: number;
  title: string;
  userId: number;
}

export type AlbumPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}