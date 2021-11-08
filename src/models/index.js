'use strict';

require('dotenv').config();


const DATABASE_URL = process.env.DATABASE_URL || "postgres://samah@localhost:5432/authdb";

const { Sequelize, DataTypes } = require('sequelize');
var sequelize = new Sequelize(DATABASE_URL, {});

const Users = require('./users-model');
const Collection = require('./library/collection');

const userModel = Users(sequelize , DataTypes);
const userCollection = new Collection(userModel);


module.exports = {
    db : sequelize,
    User : userCollection
}