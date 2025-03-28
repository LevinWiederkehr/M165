// Wechseln zur neuen Datenbank "MusicHub"
// use Musik;

// Collection für Künstler erstellen
db.createCollection("kuenstler");

// Collection für Alben erstellen
db.createCollection("album");

// Collection für Songs erstellen
db.createCollection("song");

// Collection für Playlists erstellen
db.createCollection("playlist");

// Collection für die Verbindung zwischen Playlists und Songs erstellen
// (Optional, da in MongoDB auch direkt in der Playlist-Collection
// ein Array von Song-IDs gespeichert werden könnte)
db.createCollection("playlist_song");