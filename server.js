import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
// import dummy data
import { data as renting_single_declaration } from "./dummy-data/renting/normal/single/renting_single_declaration.js";
import { data as renting_single_final } from "./dummy-data/renting/normal/single/renting_single_final.js";
import { data as renting_single_provisional } from "./dummy-data/renting/normal/single/renting_single_provisional.js";
import { data as renting_multi_owner_declaration } from "./dummy-data/renting/normal/multi/renting_multi_owner_declaration.js";
import { data as renting_multi_owner_provisional } from "./dummy-data/renting/normal/multi/renting_multi_owner_provisional.js";
import { data as renting_multi_owner_single_declaration } from "./dummy-data/renting/normal/multi/renting_multi_owner_single_declaration.js";
import { data as renting_multi_owner_final } from "./dummy-data/renting/normal/multi/renting_multi_owner_final.js";
dotenv.config();

const app = express();

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set ejs engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// API to show the certificate page
// Renting Single Party
app.get("/renting-single-declaration", (req, res) => {
    res.render("renting/normal/single/renting-single-declaration", { data: renting_single_declaration });
});
app.get("/renting-single-final", (req, res) => {
    res.render("renting/normal/single/renting-single-final", { data: renting_single_final });
});
app.get("/renting-single-provisional", (req, res) => {
    res.render("renting/normal/single/renting-single-provisional", { data: renting_single_provisional });
});

// Renting Multi Party
app.get("/renting-multi-owner-declaration", (req, res) => {
    res.render("renting/normal/multi/renting-multi-owner-declaration", { data: renting_multi_owner_declaration });
});
app.get("/renting-multi-owner-single-declaration", (req, res) => {
    res.render("renting/normal/multi/renting-multi-owner-single-declaration", { data: renting_multi_owner_single_declaration });
});
app.get("/renting-multi-owner-provisional", (req, res) => {
    res.render("renting/normal/multi/renting-multi-owner-provisional", { data: renting_multi_owner_provisional });
});
app.get("/renting-multi-owner-final", (req, res) => {
    res.render("renting/normal/multi/renting-multi-owner-final", { data: renting_multi_owner_final });
});

// Root redirect
app.get("/", (req, res) => {
    res.redirect("/renting-single-declaration");
});

// Server start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Certificate Server running at http://localhost:${PORT}`);
});
