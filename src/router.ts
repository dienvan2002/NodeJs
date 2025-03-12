import {Router} from 'express'

const router = Router();
/*
*Products
*/
router.get('/product', (req, res)=> {
    res.json({message: req.shhhh_secret})
})
router.get('/product/:id', ()=> {})
router.put('/product/:id', ()=> {})
router.post('/product', ()=> {})
router.delete('/product/:id', ()=> {})

/*
*Updates
*/

router.get('/update', ()=> {})
router.get('/update/:id', ()=> {})
router.put('/update/:id', ()=> {})
router.post('/update', ()=> {})
router.delete('/update/:id', ()=> {})

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => {});
router.get("/updatepoint/:id", (req, res) => {});
router.post("/updatepoint", (req, res) => {});
router.put("/updatepoint/:id", (req, res) => {});
router.delete("/updatepoint/:id", (req, res) => {});


export default router;