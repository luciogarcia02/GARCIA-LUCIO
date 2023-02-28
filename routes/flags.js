var express = require('express');
var router = express.Router();
var flagsRepo = require('../src/repositories/flags')


/* PATCH flag captured by id. */
router.patch('/capture/:id', async function(req, res, next) {
    if(!flagsRepo.flagExists(req.params.id)){
        return res.status(400).json({
            errorMsg: "MISSING_FLAG"
          })
    }

    let data = await flagsRepo.captureFlagById(req.params.id);
    console.log("FLAG "+req.params.id+" CAPTURED.");
    return res.status(200).json(data);
  });



module.exports = router;
