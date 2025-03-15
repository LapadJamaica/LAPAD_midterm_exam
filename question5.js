// Import required libraries
const express = require('express');
const app = express();
const { Sequelize, DataTypes } = require('sequelize'); // Sequelize ORM and data types
const mysql = require('mysql2/promise'); // MySQL promise-based client

// Create an empty object to store the models (in this case, User model)
const db = {};

// GET request to retrieve all users
app.get('/users', (req, res) => {
    db.User.findAll() // Using Sequelize to fetch all users from the database
        .then(users => res.json(users)) // Return the users as a JSON response
        .catch(err => res.status(500).json({ message: err.message })); // Catch and handle errors
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Define the User model
function model(sequelize) {
    // Define the attributes for the User model
    const attributes = {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true }, // ID as primary key
        name: { type: DataTypes.STRING, allowNull: false }, // Name attribute, cannot be null
        email: { type: DataTypes.STRING, allowNull: false }, // Email attribute, cannot be null
        status: { type: DataTypes.STRING, allowNull: false }, // Status attribute, cannot be null
    };

    // Return the defined Sequelize model
    return sequelize.define('User', attributes);
}

// Initialize the database connection and models
async function initialize() {
    // Define the database credentials (host, port, user, password, and database)
    const host = 'localhost';
    const port = 3306;
    const user = 'root';
    const password = '';
    const database = 'user';

    // Create a MySQL connection to the database
    const connection = await mysql.createConnection({ host, port, user, password });
    // Create the database if it doesn't already exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // Create a new Sequelize instance, passing in the database credentials
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // Define the User model using Sequelize
    db.User = model(sequelize);

    // Sync the model with the database (alter the table structure if needed)
    await sequelize.sync({ alter: true });
}

// Run the initialize function to set up the database and models
initialize();
