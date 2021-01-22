import React from 'react';
import { connect } from 'react-redux';

// componente que muestra información ficticia sobre el elemento de la lista seleccionada.

const SongDetail = ({ song }) => {
  // en el caso que no haya una canción seleccionada, devuelve un mensaje de ayuda.
  if (!song) {
    return <div>¡Selecciona una canción para ver detalles!</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Título: {song.title}
        <br />
        Duración: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
