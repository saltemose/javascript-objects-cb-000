var playlist = {
  JanetJackson: "All Night Don't Stop",
  MeredithBrooks: "Bitch"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  playlist
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  playlist;
};
