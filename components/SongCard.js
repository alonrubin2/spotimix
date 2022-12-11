const SongCard = ({ song }) => {
  return (
    <div className="song-card" key={song.id}>
      <h2>{song.name}</h2>
      <h4>{song.artists.map((artist) => artist.name)}</h4>
      <h6>{song.album.name}</h6>
    </div>
  );
};

export default SongCard;
