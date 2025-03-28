// MongoDB Insert-Skript gemäß den Anforderungen

// use Musik;

// ObjectIds für Alben
let kendrickAlbumId = new ObjectId();
let jColeAlbumId = new ObjectId();
let kanyeAlbumId = new ObjectId();

// ObjectIds für Künstler
let kendrickId = new ObjectId();
let jColeId = new ObjectId();
let kanyeId = new ObjectId();

// ObjectIds für Songs
let song1Id = new ObjectId();
let song2Id = new ObjectId();
let song3Id = new ObjectId();
let song4Id = new ObjectId();
let song5Id = new ObjectId();
let song6Id = new ObjectId();
let song7Id = new ObjectId();
let song8Id = new ObjectId();
let song9Id = new ObjectId();
let song10Id = new ObjectId();
let song11Id = new ObjectId();
let song12Id = new ObjectId();
let song13Id = new ObjectId();
let song14Id = new ObjectId();
let song15Id = new ObjectId();

// ObjectIds für Playlists
let playlist1Id = new ObjectId();
let playlist2Id = new ObjectId();
let playlist3Id = new ObjectId();

// Album-Kollektion mit insertMany()
db.Album.insertMany([
  {
    _id: kendrickAlbumId,
    Album_ID: 1,
    Titel: "good kid, m.A.A.d city",
    Jahr: 2012,
    Genre: "West Coast Hip Hop",
    Künstler: {
      _id: kendrickId,
      Künstler_ID: 1,
      Name: "Kendrick Lamar",
      Land: "USA",
      Genre: "West Coast Hip Hop"
    },
    Songs: [
      {
        _id: song1Id,
        Song_ID: 1,
        Titel: "Sherane a.k.a Master Splinter's Daughter",
        Dauer: 4.33,
        Tracknummer: 1
      },
      {
        _id: song2Id,
        Song_ID: 2,
        Titel: "Bitch, Don't Kill My Vibe",
        Dauer: 5.10,
        Tracknummer: 2
      },
      {
        _id: song3Id,
        Song_ID: 3,
        Titel: "Backseat Freestyle",
        Dauer: 3.32,
        Tracknummer: 3
      },
      {
        _id: song4Id,
        Song_ID: 4,
        Titel: "The Art of Peer Pressure",
        Dauer: 5.25,
        Tracknummer: 4
      },
      {
        _id: song5Id,
        Song_ID: 5,
        Titel: "Money Trees",
        Dauer: 6.26,
        Tracknummer: 5
      }
    ]
  },
  {
    _id: jColeAlbumId,
    Album_ID: 2,
    Titel: "2014 Forest Hills Drive",
    Jahr: 2014,
    Genre: "Conscious Hip Hop",
    Künstler: {
      _id: jColeId,
      Künstler_ID: 2,
      Name: "J. Cole",
      Land: "USA",
      Genre: "Conscious Hip Hop"
    },
    Songs: [
      {
        _id: song6Id,
        Song_ID: 6,
        Titel: "Intro",
        Dauer: 2.08,
        Tracknummer: 1
      },
      {
        _id: song7Id,
        Song_ID: 7,
        Titel: "January 28th",
        Dauer: 4.02,
        Tracknummer: 2
      },
      {
        _id: song8Id,
        Song_ID: 8,
        Titel: "Wet Dreamz",
        Dauer: 3.59,
        Tracknummer: 3
      },
      {
        _id: song9Id,
        Song_ID: 9,
        Titel: "03' Adolescence",
        Dauer: 4.17,
        Tracknummer: 4
      },
      {
        _id: song10Id,
        Song_ID: 10,
        Titel: "A Tale of 2 Citiez",
        Dauer: 4.29,
        Tracknummer: 5
      }
    ]
  },
  {
    _id: kanyeAlbumId,
    Album_ID: 3,
    Titel: "My Beautiful Dark Twisted Fantasy",
    Jahr: 2010,
    Genre: "Pop Rap",
    Künstler: {
      _id: kanyeId,
      Künstler_ID: 3,
      Name: "Kanye West",
      Land: "USA",
      Genre: "Pop Rap"
    },
    Songs: [
      {
        _id: song11Id,
        Song_ID: 11,
        Titel: "Dark Fantasy",
        Dauer: 4.40,
        Tracknummer: 1
      },
      {
        _id: song12Id,
        Song_ID: 12,
        Titel: "Gorgeous",
        Dauer: 5.57,
        Tracknummer: 2
      },
      {
        _id: song13Id,
        Song_ID: 13,
        Titel: "Power",
        Dauer: 4.52,
        Tracknummer: 3
      },
      {
        _id: song14Id,
        Song_ID: 14,
        Titel: "All of the Lights",
        Dauer: 5.00,
        Tracknummer: 4
      },
      {
        _id: song15Id,
        Song_ID: 15,
        Titel: "Monster",
        Dauer: 6.18,
        Tracknummer: 5
      }
    ]
  }
]);

// Playlist-Kollektion mit insertOne()
db.Playlist.insertOne({
  _id: playlist1Id,
  Playlist_ID: 1,
  Name: "Favourites",
  Erstellungsdatum: new Date(),
  Songs: [
    {
      _id: song2Id
    },
    {
      _id: song5Id
    },
    {
      _id: song7Id
    },
    {
      _id: song8Id
    },
    {
      _id: song12Id
    },
    {
      _id: song13Id  
    },
    {
      _id: song14Id
    }
  ]
});

// Weitere Playlists mit insertMany
db.Playlist.insertMany([
  {
    _id: playlist2Id,
    Playlist_ID: 2,
    Name: "Guete Morge zum Zmorge",
    Erstellungsdatum: new Date(),
    Songs: [
      {
        _id: song5Id
      },
      {
        _id: song7Id
      },
      {
        _id: song14Id
      }
    ]
  },
  {
    _id: playlist3Id,
    Playlist_ID: 3,
    Name: "DLHMJTDAMEDKIDKZB",
    Erstellungsdatum: new Date(),
    Songs: [
      {
        _id: song3Id
      },
      {
        _id: song10Id
      },
      {
        _id: song13Id
      },
      {
        _id: song15Id
      }
    ]
  }
]);