const passport = require("passport");

passport.serializeUser((user, done) => {
  console.log("serializeUser");
});

passport.deserializeUser((id, done) => {
  console.log("deserializeUser");
});
