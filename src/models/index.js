'use strict';

require('dotenv').config();


const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://samah@localhost:5432/authdb";

const { Sequelize, DataTypes } = require('sequelize');
var sequelize = new Sequelize(POSTGRES_URI, {});

const Users = require('./users-model');
const Collection = require('./library/collection');

const userModel = Users(sequelize , DataTypes);
const userCollection = new Collection(userModel);


module.exports = {
    db : sequelize,
    User : userCollection
}