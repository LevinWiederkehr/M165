// Skript für MongoDB-Abfragen entsprechend den Anforderungen

// 1. Abfrage zur Album-Collection mit ODER-Verknüpfung und _id-Projektion
print("1. Alben aus den Jahren 2010 oder 2014:");
db.Album.find(
  { $or: [{ Jahr: 2010 }, { Jahr: 2014 }] },
  { _id: 1, Titel: 1, Jahr: 1, Genre: 1 }
).forEach(printjson);

// 2. Abfrage zur Playlist-Collection mit DateTime-Filterung und ohne _id-Projektion
// Sucht nach Playlists, die nach dem 15. März 2025 erstellt wurden
print("\n2. Playlists, die nach dem 15. März 2025 erstellt wurden:");
db.Playlist.find(
  { Erstellungsdatum: { $gte: new Date("2025-03-15") } },
  { _id: 0, Name: 1, Erstellungsdatum: 1, "Songs.Titel": 1 }
).forEach(printjson);

// 3. Abfrage zur Album-Collection mit UND-Verknüpfung
// Sucht nach Hip-Hop-Alben, die zwischen 2010 und 2013 veröffentlicht wurden
print("\n3. Hip-Hop-Alben zwischen 2010 und 2013:");
db.Album.find({
  $and: [
    { Genre: "Hip-Hop" },
    { Jahr: { $gte: 2010 } },
    { Jahr: { $lte: 2013 } }
  ]
}).forEach(printjson);

// 4. Abfrage zur Album-Collection mit Regex für Teilstring-Suche in Songs
// Sucht nach Alben, die Songs mit "Light" im Titel enthalten
print("\n4. Alben mit Songs, die 'Light' im Titel enthalten:");
db.Album.find({
  "Songs.Titel": { $regex: /Light/i }
}).forEach(printjson);

// 5. Abfrage zur Playlist-Collection mit komplexer Filterung
// Sucht nach Playlists mit mehr als 3 Songs
print("\n5. Playlists mit mehr als 3 Songs:");
db.Playlist.find({
  $expr: { $gt: [{ $size: "$Songs" }, 3] }
}).forEach(printjson);

// 6. Abfrage zur Album-Collection, die nach Songs mit Dauer > 5 Minuten sucht
print("\n6. Alben mit Songs, die länger als 5 Minuten sind:");
db.Album.find({
  "Songs.Dauer": { $gt: 5.0 }
},
{
  Titel: 1,
  "Songs": { $elemMatch: { Dauer: { $gt: 5.0 } } }
}).forEach(printjson);

// 7. Abfrage nach Alben eines bestimmten Künstlers
print("\n7. Alle Alben von Kendrick Lamar:");
db.Album.find(
  { "Künstler.Name": "Kendrick Lamar" },
  { _id: 0, Titel: 1, Jahr: 1, "Künstler.Name": 1 }
).forEach(printjson);