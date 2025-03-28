// Skript zum Löschen einzelner Datensätze 
db.Album.deleteOne({ _id: ObjectId('67dd767428adba12fdb71236') });
print("Ein Album wurde gelöscht.");

db.Playlist.deleteMany({ 
  $or: [
    { _id: ObjectId('67dd767428adba12fdb7124b') },  // Erste Playlist löschen
    { _id: ObjectId('67dd767428adba12fdb7124c') }   // Zweite Playlist löschen
  ]
});
print("Mehrere, aber nicht alle Playlists wurden gelöscht. playlist3Id bleibt erhalten.");