import React from 'react';
import SongDetail from './SongDetail';

class SongsList extends React.Component {
  render() {
    const songsList = this.props.songs.map((song, index) => {
      return (
        <SongDetail value={index} key={song.title.label} />
      )
    })

    return (
      <div className="songs-list">
        {songsList}
      </div>
    );
  }
}

export default SongsList;
