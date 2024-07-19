"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexHandler = indexHandler;
exports.loginHandler = loginHandler;
/**
 * url: /
 * method: get
 */
function indexHandler(req, res, next) {
    if (!req.session || !req.session.isLoggedin) {
        res.status(200).render("index");
    }
    else {
        res.status(200).render("dashboard", {
            username: req.body.username,
        });
    }
    next();
}
/**
 * url: /
 * method: get
 */
function loginHandler(req, res, next) {
    const { username, password } = req.body;
    if (!req.body || !req.body.username || !req.body.password) {
        res.status(403).send("<h3>FORBIDDEN LOGIN FIRST</h3>");
    }
    else {
        if (username === "heia" && password === "123") {
            req.session.isLoggedin = true;
            req.session = req.session || {};
            console.log(username);
            console.log(password);
            res.status(201).render("dashboard", { username });
        }
        else {
            res.status(404).send("Invalid credential");
        }
    }
}
