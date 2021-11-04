const enviroments = {};

enviroments.dev = {
    httpPort:3000,
    envName: "dev",
};

enviroments.production = {
    httpPort:5000,
    envName: "production",
};

module.exports = enviroments;