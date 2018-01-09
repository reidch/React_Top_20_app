import React from 'react';
import SongsList from '../components/SongsList';
import SongDetail from '../components/SongDetail';

class SongsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    // console.log('Component did mount');
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () => {
      if(request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({songs: data.feed.entry});
      }
    });
    request.send();
  }

  render(){
    const song = this.state.songs[this.state.songs.title]
    return (
      <div>
        <h1>UK Top 20 Songs, compiled by iTunes</h1>
        <SongsList songs={this.state.songs}/>
        <SongDetail song={song}/>
      </div>
    );
  }
}

export default SongsContainer;
