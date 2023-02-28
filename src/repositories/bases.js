const {Base} = require('../../db/models/');
//var flagsRepo = require('../src/repositories/flags')

async function getBases(){
    return await Base.findAll({
        attributes : {
            exclude : ['createdAt','updatedAt']
        }
    })
}

async function baseExists(id){
    return await Base.count({
      where: {id}
    }) == 1
  }

async function addPoint(baseIdParams){
   
        myBase = Base.findByPk(baseIdParams);
        basesPoints = myBase.points;
        basesPoints++;
        myBase.points=basesPoints;
        myBase.save();
        return "BASE "+baseIdParams+" +1 POINTS";
    
  }

module.exports = {
    baseExists,
    addPoint,
    getBases,
}