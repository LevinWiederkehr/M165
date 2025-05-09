// 1. UND-Verknüpfung mit Aggregation ($match zweimal)
db.Album.aggregate([
    { $match: { Genre: "West Coast Hip Hop" } },
    { $match: { Jahr: { $gte: 2010 } } }
]);
  
  // 2. $match + $project + $sort
db.Album.aggregate([
    { $match: { Jahr: { $gte: 2010 } } },
    { $project: { _id: 0, Titel: 1, Jahr: 1, Genre: 1 } },
    { $sort: { Jahr: -1 } }
]);
  
  // 3. $sum zur Zählung von Songs pro Album
db.Album.aggregate([
    {
      $project: {
        Titel: 1,
        AnzahlSongs: { $size: "$Songs" }
      }
    }
]);
  
  // 4. $group – Anzahl Alben pro Genre
db.Album.aggregate([
    {
      $group: {
        _id: "$Genre",
        AnzahlAlben: { $sum: 1 }
      }
    }
]);
  