const mongoose = require("mongoose");
const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.qpikq.mongodb.net/Database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com banco de dados",
          error
        );
      }
      return console.log("🚀🚀 Database connection successful!");
    }
  );
};

module.exports = connectToDataBase;
