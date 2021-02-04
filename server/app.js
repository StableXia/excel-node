const fs = require("fs");
const Koa = require("koa");

const app = new Koa();

const Json2csvParser = require("json2csv").Parser;
const fields = ["car", "price", "color", "for"];

// let myData = fs.readFileSync("./data.json");

const json2csvParser = new Json2csvParser({ fields });

const csv = json2csvParser.parse([
  {
    car: "Audi",
    price: 40000,
    color: "blue",
    for: "",
    sss: "",
  },
  {
    car: "BMW",
    price: 35000,
    color: "black",
    for: "",
  },
  {
    car: "Porsche",
    price: 60000,
    color: "green",
    for: "",
  },
]);

fs.writeFile("./data.csv", csv, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});

// response
app.use((ctx) => {
  ctx.body = "excel";
});

app.listen(3000, () => {
  console.log("服务已启动");
});
