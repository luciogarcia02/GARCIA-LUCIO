const {Flag} = require('../../db/models/');
const db = require('../../db/models');

async function flagExists(id){
    return await Flag.count({
      where: {id}
    }) == 1
  }


async function captureFlagById(id){
    return ;
}

module.exports = {
    flagExists,
    captureFlagById
}