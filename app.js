const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
app.use(express.json({ extended: true }));

app.use("/api", require("./routes/newsLoad.routes"));
app.use("/api/registration", require("./routes/registration.routes"));
app.use("/api/signIn", require("./routes/signIn.rotes"));
app.use("/api/admin", require("./routes/admin.routse"));
app.use("/api/userLoad", require("./routes/userNewLoad.routes"));
app.use("/api/articleCreate", require("./routes/articleCreate.routes"));

const PORT = config.get("port") || 5000;
async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}.......... `)
    );
  } catch (e) {
    process.exit(1);
  }
}

start();
