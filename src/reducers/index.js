import { combineReducers } from 'redux';

// Inicialización de los reductores, que mantienen la información para la aplicación

const songsReducer = () => {
  return [
    { title: 'Canción 1', duration: '4:05' },
    { title: 'Canción 2', duration: '2:30' },
    { title: 'Canción 3', duration: '3.15' },
    { title: 'Canción 4', duration: '1:45' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
