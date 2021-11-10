const handlers = {};

handlers.task = (data, callback) => {
    const acceptableMethods = ["get", "post", "put", "delete"];

    if (acceptableMethods.includes(data.httpMethod)) {
        return handlers._task[data.httpMethod](data, callback);
    }

    return callback(405, { error: "Nepriimtinas uzklausos metodas" });
};

handlers._task = {};

handlers._task.get = async (data, callback) => {
    // gaunam user info
    const db = data.db;
    const payload = data.queryStringObject;
  
    try {
        const query = "SELECT * FROM `tasks` WHERE id=" + payload.get("Id");
        console.log(payload);
        console.log(query);
        const dataFromDB = await db.execute(query);
        console.log(dataFromDB[0][0]);
        return callback(200,dataFromDB[0][0]);
    } catch (error) {
        console.log("Nepavyko gauti task'o");
        console.log(error);
        return callback(404,"Nepavyko gauti task'o");
        
    }   

};

handlers._task.post = async (data, callback) => {
    // irasom user info
    const db = data.db;
    const payload = data.payload;
  
    try {
        const query = "INSERT INTO `tasks`(`text`, `status`) VALUES ('" + payload.textAreavalue+"','"+payload.taskStatus+"')";
        await db.execute(query);
        return callback(200,"Pavyko sukurti task'a");
    } catch (error) {
        console.log("Nepavyko sukurti uzduociu lenteles");
        console.log(error);
        return callback(404,"Nepavyko sukurti task'o");
        
    }   
    
};

handlers._task.put = async (data, callback) => {
    // atnaujinam user info
    console.log("task.put");

};

handlers._task.delete = async (data, callback) => {
    // istrinam user info

    const db = data.db;
    const payload = data.payload;
  
    try {
        const query = "DELETE FROM `tasks` WHERE `tasks`.`id` =" + payload;
        await db.execute(query);
        return callback(200,"Užduotis sėkmingai ištrinta");
    } catch (error) {
              
        return callback(404,"Užduoties nepavyko ištrinti");
        
    }

};



module.exports = handlers;