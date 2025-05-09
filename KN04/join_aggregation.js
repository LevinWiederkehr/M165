// 1. Join Playlist mit Album, um Infos zu Songs zu bekommen
db.Playlist.aggregate([
    { $unwind: "$Songs" },
    {
      $lookup: {
        from: "Album",
        let: { songId: "$Songs._id" },
        pipeline: [
          { $unwind: "$Songs" },
          { $match: { $expr: { $eq: ["$Songs._id", "$$songId"] } } },
          {
            $project: {
              _id: 0,
              AlbumTitel: "$Titel",
              SongTitel: "$Songs.Titel",
              Dauer: "$Songs.Dauer"
            }
          }
        ],
        as: "SongDetails"
      }
    },
    { $unwind: "$SongDetails" },
    {
      $project: {
        _id: 0,
        Playlist: "$Name",
        SongTitel: "$SongDetails.SongTitel",
        Album: "$SongDetails.AlbumTitel",
        Dauer: "$SongDetails.Dauer"
      }
    }
]);
  
  // 2. Join mit zusätzlicher Filterung (z.B. nur Songs länger als 5 Minuten)
db.Playlist.aggregate([
    { $unwind: "$Songs" },
    {
      $lookup: {
        from: "Album",
        let: { songId: "$Songs._id" },
        pipeline: [
          { $unwind: "$Songs" },
          { $match: { $expr: { $eq: ["$Songs._id", "$$songId"] } } },
          { $match: { "Songs.Dauer": { $gt: 5.0 } } },
          {
            $project: {
              _id: 0,
              SongTitel: "$Songs.Titel",
              Dauer: "$Songs.Dauer"
            }
          }
        ],
        as: "LongSongs"
      }
    },
    { $unwind: "$LongSongs" },
    {
      $project: {
        Playlist: "$Name",
        SongTitel: "$LongSongs.SongTitel",
        Dauer: "$LongSongs.Dauer"
      }
    }
]);
  