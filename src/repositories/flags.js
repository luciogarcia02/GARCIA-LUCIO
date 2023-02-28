const {Flag} = require('../../db/models/');
const db = require('../../db/models');

async function flagExists(id){
    return await Flag.count({
      where: {id}
    }) == 1
  }

  async function getFlags(){
    return await Base.findAll()
  }

  async function getFlagById(id){
    return await Flag.findByPk(id)
  }

  async function setBaseId(id, baseIdParam){
    let myFlag = getFlagById(id);
    myFlag.baseId= baseIdParam;
    myFlag.save();
    return myFlag;
  }

async function captureFlagById(id){
    let myFlag = Flag.findByPk(id);
    myFlag.isCaptured=true;
    myFlag.baseId=0;
    await myFlag.save();
    return myFlag;
}

async function flagIsCaptured(id){
    let myFlag = Flag.findByPk(id);
    return myFlag.isCaptured;
}

async function settleFlag(baseId,flagId){
    return setBaseId(flagId, baseId);
}

async function sameBaseId(baseId,flagId){
    ok=true;
    let miarray = getFlags();
    let baseValor = miarray[0].baseId;
    for (let i = 0; i < miarray.length; i++) {
        if(miarray[0].baseId != baseValor){
            ok=false
        }

      }
    
    return ok;
}
module.exports = {
    flagExists,
    captureFlagById,
    flagIsCaptured,
    setBaseId,
    getFlags,
    settleFlag,
    sameBaseId,
}