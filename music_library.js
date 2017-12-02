var Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(playlistName) {
  this.playlists.push(playlistName);
};

Library.prototype.addPlaylistTrack = function(trackName, playlistName) {

  this.playlists.forEach((playlist) => {
    if(playlist.name === playlistName) {
      playlist.tracks.push(trackName);
    }
  });
}

var Playlist = function(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.overallTrackRating = function() {
  var averageRating = 0;

  for(var track of this.tracks) {
    averageRating += track.rating;
  }
  console.log("The average rating of " + this.name + " is " + averageRating / this.tracks.length
    + ".");
}

Playlist.prototype.totalDuration = function() {
  var totalLength = 0;

  for(var track of this.tracks) {
    totalLength += track.length;
  }
  console.log("The total length of " + this.name + " is " + totalLength / 60 + "minutes.");
}


var Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}



var newLibrary = new Library('Happy-times', 'Colin');
var newPlaylist = new Playlist('Wam-Jam');
var secondPlaylist = new Playlist('Rompy');
var newTrack = new Track('Demon of Cheese', 4, 666);
var secondTrack = new Track("Gabe's a babe", 2, 69);


newLibrary.addPlaylist(newPlaylist);
newLibrary.addPlaylist(secondPlaylist);
newLibrary.addPlaylistTrack(newTrack, 'Rompy');
newLibrary.addPlaylistTrack(secondTrack, 'Rompy');
newLibrary.playlists[1].overallTrackRating();
newLibrary.playlists[1].totalDuration();

