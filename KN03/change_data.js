// Skript für MongoDB-Datenänderungen entsprechend den Anforderungen

// 1. Verwendung von updateOne() mit _id als Filterung
// Aktualisiert die Informationen eines bestimmten Albums
print("1. Aktualisierung eines Albums mit updateOne():");
db.Album.updateOne(
  { _id: ObjectId('67dd7db2d907ca0d8eb71236') },
  { 
    $set: { 
      Jahr: 2013, // Korrektur des Veröffentlichungsjahrs
      "Künstler.Genre": "Conscious Hip-Hop" // Präzisere Genre-Angabe
    },
    $push: {
      Songs: {
        _id: new ObjectId(),
        Song_ID: 16,
        Titel: "Real",
        Dauer: 7.23,
        Tracknummer: 6
      }
    }
  }
);
print("Album wurde aktualisiert.");

// 2. Verwendung von updateMany() mit ODER-Verknüpfung ohne _id
// Aktualisiert alle Playlists, die vor dem 20. März 2025 erstellt wurden
// oder die weniger als 4 Songs enthalten
print("\n2. Aktualisierung mehrerer Playlists mit updateMany():");
db.Playlist.updateMany(
  { 
    $or: [
      { Erstellungsdatum: { $lt: new Date("2025-03-20") } },
      { $expr: { $lt: [{ $size: "$Songs" }, 4] } }
    ]
  },
  {
    $set: { 
      Aktualisiert: new Date(),
      Kategorie: "Archiviert"
    }
  }
);
print("Mehrere Playlists wurden aktualisiert.");

// 3. Verwendung von replaceOne() zum vollständigen Ersetzen eines Dokuments
// Ersetzt ein Album vollständig durch eine neue Version
print("\n3. Ersetzung eines Albums mit replaceOne():");
const albumToReplace = ObjectId('67dd7db2d907ca0d8eb71238');
db.Album.replaceOne(
  { Album_ID: 3 }, 
  {
    _id: albumToReplace, // Behalten die originale _id bei
    Album_ID: 3,
    Titel: "The College Dropout", // Ändert den Titel zum Debütalbum
    Jahr: 2004, // Ändert das Jahr
    Genre: "Hip-Hop",
    Künstler: {
      _id: ObjectId('67dd7db2d907ca0d8eb7123b'),
      Künstler_ID: 3,
      Name: "Kanye West",
      Land: "USA",
      Genre: "Hip-Hop"
    },
    Songs: [
      {
        _id: new ObjectId(),
        Song_ID: 20,
        Titel: "Through The Wire",
        Dauer: 3.41,
        Tracknummer: 1
      },
      {
        _id: new ObjectId(),
        Song_ID: 21,
        Titel: "Family Business",
        Dauer: 4.38,
        Tracknummer: 2
      },
      {
        _id: new ObjectId(),
        Song_ID: 22,
        Titel: "All Falls Down",
        Dauer: 3.43,
        Tracknummer: 3
      },
      {
        _id: new ObjectId(),
        Song_ID: 23,
        Titel: "Jesus Walks",
        Dauer: 3.13,
        Tracknummer: 4
      },
      {
        _id: new ObjectId(),
        Song_ID: 24,
        Titel: "Slow Jamz",
        Dauer: 5.16,
        Tracknummer: 5
      }
    ],
    Auszeichnungen: ["Grammy Award für Best Rap Album 2005"],
    Verkäufe: "4x Platin (US)"
  }
);
print("Ein Album wurde vollständig ersetzt.");