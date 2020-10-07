import { Router, Request, Response } from 'express';

export const router = Router();

router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Todo correcto bro'
    })
})

router.post('/messages', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        mensaje: `Todo ok, se recibio ${cuerpo} de ${de}`
    })
})

router.post('/messages/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        cuerpo,
        de,
        mensaje: `Todo ok, se recibio ${cuerpo} de ${de}`,
        id
    })
})
