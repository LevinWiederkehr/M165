// Skript zum Löschen aller Collections in der Datenbank

// Album-Collection löschen
db.Album.drop();

// Playlist-Collection löschen
db.Playlist.drop();

// Bestätigungsmeldung
print("Alle Collections wurden erfolgreich gelöscht.");