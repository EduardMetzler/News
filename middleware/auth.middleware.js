const jwt = require("jsonwebtoken");
config = require("config");
module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    console.log("eeeeeeeeeeeeeeeee");

    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1]; //Bearer TOKEN
    console.log("TOKEN::::::::::", token);

    if (!token) {
      console.log("nooooooooooooooooooooooooooo");
      return res.status(401).json({ message: "keine Auth" });
    }
    const decoded = jwt.verify(token, config.get("jwtSecter"));
    req.user = decoded;
    console.log("2", decoded.userId);
    next();
  } catch (e) {
    res.status(401).json({ message: "keine Auth" });
  }
};
