class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlistName) {
      this.playlists.push(playlistName);
  };

  addPlaylistTrack(trackName, playlistName) {

    this.playlists.forEach((playlist) => {
      if(playlist.name === playlistName) {
        playlist.tracks.push(trackName);
      }
    });
  }
};

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }

  overallTrackRating() {
    let averageRating = 0;

    for(const track of this.tracks) {
      averageRating += track.rating;
    }
    console.log("The average rating of " + this.name + " is " + averageRating / this.tracks.length
      + ".");
  }

  totalDuration() {
    let totalLength = 0;

    for(const track of this.tracks) {
      totalLength += track.length;
    }
    console.log("The total length of " + this.name + " is " + totalLength / 60 + "minutes.");
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}


const newLibrary = new Library('Happy-times', 'Colin');
const newPlaylist = new Playlist('Wam-Jam');
const secondPlaylist = new Playlist('Rompy');
const newTrack = new Track('Demon of Cheese', 4, 666);
const secondTrack = new Track("Gabe's a babe", 2, 69);


newLibrary.addPlaylist(newPlaylist);
newLibrary.addPlaylist(secondPlaylist);
newLibrary.addPlaylistTrack(newTrack, 'Rompy');
newLibrary.addPlaylistTrack(secondTrack, 'Rompy');
newLibrary.playlists[1].overallTrackRating();
newLibrary.playlists[1].totalDuration();
















