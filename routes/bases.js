var express = require('express');
var router = express.Router();
var basesRepo = require('../src/repositories/bases')
var flagsRepo = require('../src/repositories/flags')


/* GET Bases score. */
router.get('/', async function(req, res, next) {

    let dev =await basesRepo.getBases()
    res.json(dev);
  
  });

/*POST Settle flag by id. */
router.post('/settleFlag/', async function(req, res, next) {
    if(!flagsRepo.flagExists(req.body.flagId)){
        return res.status(400).json({
            errorMsg: "MISSING_FLAG"
          })
    }
    if(!basesRepo.baseExists(req.body.baseId)){
        return res.status(400).json({
            errorMsg: "MISSING_BASE"
          })
    }
    if(!flagsRepo.flagIsCaptured(req.body.flagId)){
        return res.status(400).json({
            errorMsg: "INVALID_FLAG",
            description:"You can't settle a flag that is not captured."
          })
    }

    await flagsRepo.settleFlag(req.params.baseId,req.params.flagId);
    let flagsHaveSameBase = await flagsRepo.sameBaseId()
    let data
    if(flagsHaveSameBase){
      data = addPoint(req.params.baseId);
      //aca deberia reestablecer los valores predeterminados de las flags para que pueda volver a empezar el juego
    }else{
      data="FLAG_SETTLED"
    }
    
    console.log(data);
    let dev ={ message:data}
    return res.status(200).json(dev);
  });



module.exports = router;
