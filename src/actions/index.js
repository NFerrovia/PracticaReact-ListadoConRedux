//Creador de acción
export const selectSong = (song) => {
  // devuelve una acción
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
