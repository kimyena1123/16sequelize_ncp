//sequelize-cli 자동 생성한 파일

'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development']; //저기 파일로 가서 development 값을 가져온다.
//const a = require(__dirname + '/../config/config.json')['development'];
//const a = {
//   "development": {
//     "username": "user",
//     "password": "1234",
//     "database": "kdt",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {},
//   "production": {}
// }
                
const db = {}; // 빈 객체를 만드는 db 변수


// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
let sequelize = new Sequelize(
  config.database, 
  config.username,
  config.password, 
  config
  );
//sequelize 객체 선언시 매개변수로 위 정보를 받음


db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db = {sequelize: sequelize, Sequelize : Sequelize}


db.Visitor = require('./Visitor')(sequelize, Sequelize); //const Visitor = function(Sequelize, DataTypes)함수랑 같다고 생각하기
//models/Visitor.js 정의한 model이 db.Visitor에 들어감.
//db = {sequelize: sequelize, Sequelize : Sequelize, Visitor: 모델폴더에 있는 함수-> model을 리턴함 }
db.User = require('./User')(sequelize, Sequelize);

module.exports = db;
//db 변수 내보냄 -> 다른 파일에서 사용하기 때문.