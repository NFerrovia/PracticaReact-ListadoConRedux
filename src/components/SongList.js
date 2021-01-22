import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        // se le da como llave a cada articulo el titulo de la cancion ya que es muy poco probable que se repita.
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              // al click, se activa nuestro creador de acción
              onClick={() => this.props.selectSong(song)}
            >
              Seleccionar
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list"> {this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
