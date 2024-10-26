const Pool = require("pg").Pool;

const pool = new Pool({
    user: "giva_final_database_user",
    password: "BoAQwsJMtfjDFZTgBqSuQKw7963g5QSa",
    host: "dpg-cseeonu8ii6s7392e760-a.oregon-postgres.render.com",
    port: 5432,
    database: "giva_final_database"
});

module.exports = pool;
