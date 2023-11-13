import { DBConnection } from "./DBConnection.js";

export class DBquerys extends DBConnection {
  static TABLE_MUSICAS = "musicas";
  static TABLE_DISCOS = "discos";

  postAlbumIntoDB = async (album) => {
    await DBConnection.connection(DiscosDatabase.TABLE_DISCOS).insert(album);
  };

  postSongsIntoDB = async (songsList) => {
    for (let i = 0; songsList.length > i; i++) {
      const songs = songsList[i];
      await DBConnection.connection(DiscosDatabase.TABLE_MUSICAS).insert(songs);
    }
  };
}
