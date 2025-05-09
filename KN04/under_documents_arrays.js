// 1. Felder aus Unterdokumenten (Songs) anzeigen
db.Album.find(
    {},
    {
      _id: 0,
      Titel: 1,
      "Songs.Titel": 1,
      "Songs.Dauer": 1
    }
);
  
  // 2. Nach Feldern im Unterdokument filtern (Songs länger als 6 Minuten)
db.Album.find(
    { "Songs.Dauer": { $gt: 6.0 } },
    {
      _id: 0,
      Titel: 1,
      "Songs.$": 1
    }
);
  
  // 3. $unwind – Songs aufsplitten
db.Album.aggregate([
    { $unwind: "$Songs" },
    {
      $project: {
        _id: 0,
        Album: "$Titel",
        SongTitel: "$Songs.Titel",
        Dauer: "$Songs.Dauer"
      }
    }
]);
  