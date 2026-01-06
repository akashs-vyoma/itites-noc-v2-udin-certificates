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
import { data as dpr_declaration_single } from "./dummy-data/dpr/single/dpr_declaration_single.js";
import { data as dpr_final_single } from "./dummy-data/dpr/single/dpr_final_single.js";
import { data as dpr_provisional_single } from "./dummy-data/dpr/single/dpr_provisional_single.js";
import { data as dpr_declaration_multi } from "./dummy-data/dpr/multi/dpr_declaration_multi.js";
import { data as dpr_multi_final } from "./dummy-data/dpr/multi/dpr_multi_final.js";
import { data as dpr_multi_provisional } from "./dummy-data/dpr/multi/dpr_multi_provisional.js";
import { data as dpr_multi_declaration_single } from "./dummy-data/dpr/multi/dpr_multi_declaration_single.js";
import { data as te_declaration_single } from "./dummy-data/tax-exemption/single/te_declaration_single.js";
import { data as te_final_single } from "./dummy-data/tax-exemption/single/te_final_single.js";
import { data as te_provisional_single } from "./dummy-data/tax-exemption/single/te_provisional_single.js";
import { data as te_final_multi } from "./dummy-data/tax-exemption/multi/te_final_multi.js";
import { data as renting_renewal_single_party_declaration } from "./dummy-data/renting/renewal/single/renting_renewal_single_party_declaration.js";
import { data as renting_renewal_single_party_final } from "./dummy-data/renting/renewal/single/renting_renewal_single_party_final.js";
import { data as renting_renewal_multi_owner_declaration } from "./dummy-data/renting/renewal/multi/renting_renewal_multi_owner_declaration.js";
import { data as renting_renewal_multi_owner_final } from "./dummy-data/renting/renewal/multi/renting_renewal_multi_owner_final.js";
import { data as renting_renewal_multi_owner_provisional } from "./dummy-data/renting/renewal/multi/renting_renewal_multi_owner_provisional.js";
import { data as renting_renewal_multi_owner_single_declaration } from "./dummy-data/renting/renewal/multi/renting_renewal_multi_owner_single_declaration.js";
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


/*------------------- Renting Normal ----------------*/
// Single Party
app.get("/renting-single-declaration", (req, res) => {
    res.render("renting/normal/single/renting-single-declaration", { data: renting_single_declaration });
});
app.get("/renting-single-final", (req, res) => {
    res.render("renting/normal/single/renting-single-final", { data: renting_single_final });
});
app.get("/renting-single-provisional", (req, res) => {
    res.render("renting/normal/single/renting-single-provisional", { data: renting_single_provisional });
});

// Multi Party
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

/*------------------- Renting Renewal ----------------*/
// Single Party
app.get("/renting-renewal-single-party-declaration", (req, res) => {
    res.render("renting/renewal/single/renting-renewal-single-party-declaration", { data: renting_renewal_single_party_declaration });
});
app.get("/renting-renewal-single-party-final", (req, res) => {
    res.render("renting/renewal/single/renting-renewal-single-party-final", { data: renting_renewal_single_party_final });
});
// Multi Party
app.get("/renting-renewal-multi-owner-declaration", (req, res) => {
    res.render("renting/renewal/multi/renting-renewal-multi-owner-declaration", { data: renting_renewal_multi_owner_declaration });
});
app.get("/renting-renewal-multi-owner-provisional", (req, res) => {
    res.render("renting/renewal/multi/renting-renewal-multi-owner-provisional", { data: renting_renewal_multi_owner_provisional });
});
app.get("/renting-renewal-multi-owner-final", (req, res) => {
    res.render("renting/renewal/multi/renting-renewal-multi-owner-final", { data: renting_renewal_multi_owner_final });
});
app.get("/renting-renewal-multi-owner-single-declaration", (req, res) => {
    res.render("renting/renewal/multi/renting-renewal-multi-owner-single-declaration", { data: renting_renewal_multi_owner_single_declaration });
});

/*------------------- DPR ----------------*/
// Single Party
app.get("/dpr-declaration-single", (req, res) => {
    res.render("dpr/single/dpr-declaration-single", { data: dpr_declaration_single });
});
app.get("/dpr-final-single", (req, res) => {
    res.render("dpr/single/dpr-final-single", { data: dpr_final_single });
});
app.get("/dpr-provisional-single", (req, res) => {
    res.render("dpr/single/dpr-provisional-single", { data: dpr_provisional_single });
});
// Multi Party
app.get("/dpr-declaration-multi", (req, res) => {
    res.render("dpr/multi/dpr-declaration-multi", { data: dpr_declaration_multi });
});
app.get("/dpr-multi-declaration-single", (req, res) => {
    res.render("dpr/multi/dpr-multi-declaration-single", { data: dpr_multi_declaration_single });
});
app.get("/dpr-multi-final", (req, res) => {
    res.render("dpr/multi/dpr-multi-final", { data: dpr_multi_final });
});
app.get("/dpr-multi-provisional", (req, res) => {
    res.render("dpr/multi/dpr-multi-provisional", { data: dpr_multi_provisional });
});

/*------------------- Tax Exemption ----------------*/
// Single Party
app.get("/te-declaration-single", (req, res) => {
    res.render("tax-exemption/single/te-declaration-single", { data: te_declaration_single });
});
app.get("/te-final-single", (req, res) => {
    res.render("tax-exemption/single/te-final-single", { data: te_final_single });
});
app.get("/te-provisional-single", (req, res) => {
    res.render("tax-exemption/single/te-provisional-single", { data: te_provisional_single });
});
// Multi Party
app.get("/te-final-multi", (req, res) => {
    res.render("tax-exemption/multi/te-final-multi", { data: te_final_multi });
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
