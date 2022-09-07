import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
// setelah table terbuat hapus
// import Users from './models/userModel.js';
const app= express();

try {
    await db.authenticate();
    console.log('Connected to database MySql....');
    // setelah table terbuat hapus
    // await Users.sync();
} catch (error) {
    console.error(error);
}
app.use(express.json);
app.use(router);
const PORT = 5000
app.listen(PORT, 'localhost', () => {
  console.log(`Server running on port ${PORT}`)
})