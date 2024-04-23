import express from "express";
import { Card, CardsResponse } from "../interfaces/mgtcards";
import path from "path";
import { render } from "ejs";

const app = express();
app.set("view engine", "ejs");
app.set("port", 3000);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//const api 
let cards: Card[] = [];

app.get("/cardinfo", async (req, res) => {
    res.render("cardinfo", { cards })
})

app.get("/cardinfodetail", async (req, res) => {
    res.render("cardinfodetail", { cards })
})

app.get("/deckdetail", async (req, res) => {
    res.render("deckdetail", { cards: cards })
})

app.get("/decklist", async (req, res) => {
    res.render("decklist", { cards })
})

app.get("/detail", async (req, res) => {
    res.render("detail", { cards })
})

//index page (landing) 
app.get("/", async (req, res) => {
    res.render("index")
})

app.get("/login", async (req, res) => {
    res.render("login", { cards })
})

app.get("/main", async (req, res) => {
    res.render("main", { cards })
})

app.get("/overview", async (req, res) => {
    res.render("overview", cards)
})

app.get("/register", async (req, res) => {
    res.render("register", cards)
})

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), async () => {
    let response = await fetch("https://api.magicthegathering.io/v1/cards");
    let arrayOfCards = await response.json() as CardsResponse;
    cards = arrayOfCards.cards as Card[];
    console.log("[server] http://localhost:" + app.get("port"))
});



