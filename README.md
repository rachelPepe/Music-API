# Music-API-Project

This was a practice project for me to create a web application that calls a web API from the browser using the fetch API to send HTTP requests.  A Music API uses Mongoose to access/save/delete data in MongoDB on my local storage.

The routes and API functionality are organized into separate Node.js modules to manage complexity.

Public folder:
  songsShow.html - allows the user to see list of songs currently in the musicDB on local storage
  songsAdd.html - allows users to add songs to the local musicDB database via the music API
  songsDelete - allows users to delete songs from the database

Models folder:
  song.js - creates the Song model from the schema

API folder:
  songs.js - defines the song routes

musicDb.js - connects to the local musicdb database
musicServer.js - acts as the web server

