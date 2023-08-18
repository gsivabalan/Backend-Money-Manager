const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    const mongoUrl = 'mongodb+srv://moneymanager:money123manager@cluster0.fupmznl.mongodb.net/?retryWrites=true&w=majority';
    await mongoose.connect(mongoUrl);
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
