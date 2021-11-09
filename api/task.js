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
    console.log("task.get");
};

handlers._task.post = async (data, callback) => {
    // irasom user info
    console.log("task.post");
};

handlers._task.put = async (data, callback) => {
    // atnaujinam user info
    console.log("task.put");
};

handlers._task.delete = async (data, callback) => {
    // istrinam user info
    console.log("task.delete");
};

module.exports = handlers;