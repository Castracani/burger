var orm = require("../config/orm.js");

var burger = {
  select: function(cb) {
    orm.select("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.export = burger;