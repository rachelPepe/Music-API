const Song = require("../models/song");
const router = require("express").Router();

// Get list of all songs in the database
router.get("/", async (req, res) => {
    try {
      const songs = await Song.find();
      res.json(songs);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// Add a new song to the database
router.post("/", function(req, res) {
   const song = new Song(req.body);
   song.save(function(err, song) {
      if (err) {
         res.status(400).send(err);
      } 
      else {
         res.status(201).json(song);
      }
   });
});

router.put("/:id", function(req, res) {
    // Song to update sent in body of request
    const song = req.body;
 
    // Replace existing song fields with updated song
    Song.updateOne({ _id: req.params.id }, song, function(err, result) {
       if (err) {
          res.status(400).send(err);
       } 
       else if (result.matchedCount === 0) {
          res.sendStatus(404);
       } 
       else {
          res.sendStatus(204);
       }
    });
 });

 router.delete("/:id", function(req, res) {
    Song.deleteOne({ _id: req.params.id }, function(err, result) {
        if(err){
            res.status(400).send(err);
        }
        else if (result.matchedCount === 0) {
            res.sendStatus(404);
        }
        else {
            res.sendStatus(204);
        }
    });
 });

module.exports = router;