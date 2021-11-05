const mysql = require('mysql2/promise');

const db = {};

db.init = async ({host, user, database}) => {
 
   await db.dropDatabase({host, user, database});
   const connection = db.createDatabase();


   db.createTable();
   db.createTable();
    //istrinti db, jei ji egzistoja
    //sukurti nauja db

    //sukurti z lentere
    //sukurti z lentere
    //sukurti z lentere

    //grazinti connection 
}

db.dropDatabase = async ({host, user, database}) => {
   host = host ? host : 'localhost';
   host = host ? user : 'root';



    

    try {
           const conn = await mysql.createConnection({host, user});
           await conn.execute(`DROP DATABASE IF EXISTS \`${database}\``);
           console.log('Buvusi duombaze istrinta');
    } catch (error) {
            console.log(`Iskilo bedu bandant pasalinti duombaze "${database}"`);
    }
}

db.createDatabase = async ({host, user, database}) => {
    host = host ? host : 'localhost';
    host = host ? user : 'root';
//sukurti databse
try {
    let conn = await mysql.createConnection({host, user});
    await conn.execute(`CREATE DATABASE IF NOT EXISTS \`${database}\``);
    await conn.end();

    conn = await mysql.createConnection({host, user, database});
    console.log('Nauja duombaze sukurta');
    return conn;
}catch (error){
    console.log(`Iskilo bedu bandant sukurti duombaze "${database}"`);
    return error;
}
}

db.createTable = () => {
    //sukuurti lentele
    }
    

module.exports = db;