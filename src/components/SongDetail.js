import React from 'react';

class SongDetail extends React.Component {
  render() {
    if(!this.props.song) {
      return null;
    }
    return (
      <div>
        <p>{this.props.song.title.label}</p>
      </div>
    )
  }
}

export default SongDetail;
