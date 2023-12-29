const figlet= require("figlet")
figlet("R a m u     B o d a !!", function (err, data) {
  if (err) {
    console.log("Something wen");
    console.dir(err);
    return;
  }
  console.log(data);
});