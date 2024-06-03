import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const recipeJSON =
  '[{"id":"0001","type":"cutlet","name":"Chicken Cutlet","price":2.99,"ingredients": {"protein":{"name":"Chicken","preparation":"Breaded and Fried"},"salsa":{"name":"Mint Chutney","spiciness":"Medium"},"toppings":[{"name":"Onion Rings","quantity":"1 cup","ingredients":["Onion","Flour","Spices"]},{"name":"Coriander","quantity":"1/2 cup","ingredients":["Fresh Coriander"]},{"name":"Lemon Wedges","quantity":"4 pieces","ingredients":["Lemon"]}]}},{"id":"0002","type":"cutlet","name":"Beef Cutlet","price":3.49,"ingredients":{"protein":{"name":"Beef","preparation":"Minced and Fried"},"salsa":{"name":"Tamarind Chutney","spiciness":"Hot"},"toppings":[{"name":"Sliced Onions","quantity":"1/4 cup","ingredients":["Red Onion","White Onion"]},{"name":"Mint","quantity":"2 tablespoons","ingredients":["Fresh Mint Leaves"]},{"name":"Green Chilies","quantity":"2 pieces","ingredients":["Green Chilies"]}]}},{"id":"0003","type":"cutlet","name":"Fish Cutlet","price":4.99,"ingredients":{"protein":{"name":"Fish","preparation":"Mashed and Fried"},"salsa":{"name":"Coconut Chutney","spiciness":"Mild"},"toppings":[{"name":"Cabbage Slaw","quantity":"1 cup","ingredients":["Shredded Cabbage","Carrot","Mayonnaise","Lime Juice","Salt"]},{"name":"Tomato Slices","quantity":"1/2 cup","ingredients":["Tomato"]},{"name":"Yogurt Dip","quantity":"2 tablespoons","ingredients":["Yogurt","Lime Juice","Salt"]}]}}]';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
  res.render("index.ejs",{ recipe: data });
});

app.post("/recipe", (req, res) => {
  switch(req.body.choice){
      case "chicken":
        data = JSON.parse(recipeJSON)[0];
        break;
      case "beef":
        data = JSON.parse(recipeJSON)[1];
        break;
      case "fish":
        data = JSON.parse(recipeJSON)[2];
        break;
      default:
        break;
  }

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
