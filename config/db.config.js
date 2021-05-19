module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "bd_curso_bezkoder",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };