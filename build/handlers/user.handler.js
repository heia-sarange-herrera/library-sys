"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootPage = rootPage;
/**
 * url: /api/user
 */
function rootPage(req, res, next) {
    res.status(200).json({
        message: "OK",
    });
}
