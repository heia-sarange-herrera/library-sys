import { NextFunction, Request, Response } from "express-serve-static-core";

/**
 * url: /
 * method: get
 */
export function indexHandler(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!req.session || !req.session.isLoggedin) {
    res.status(200).render("index");
  } else {
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
export function loginHandler(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { username, password } = req.body;
  if (!req.body || !req.body.username || !req.body.password) {
    res.status(403).send("<h3>FORBIDDEN LOGIN FIRST</h3>");
  } else {
    if (username === "heia" && password === "123") {
      req.session.isLoggedin = true;
      req.session = req.session || {};
      console.log(username);
      console.log(password);
      res.status(201).render("dashboard", { username });
    } else {
      res.status(404).send("Invalid credential");
    }
  }
}
