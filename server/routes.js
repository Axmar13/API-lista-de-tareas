const {Router, response} = require('express');
const db = require('./db.js')

const router = Router();

router.post('/nuevo', async (req, res)=>{
    let {nombre, estado} = req.body;

    let resultado = await db.query(`INSERT INTO tareas (nombre, estado) VALUES ('${nombre}','${estado}')`);

    if(resultado.affectedRows ==1){
        res.status(201).json({
            id:resultado.insertId
        });
    }else{
        res.status(400).json({mensaje:'No se pudo guardar la tarea'});
    }

    
});

router.get('/tarea/:id', async (req, res)=>{
    let {id} = req.params;

    let resultado = await db.query(`SELECT * FROM tareas WHERE id=${id}`);

    res.json(resultado[0]);
});

router.get('/tareas', async (req, res)=>{
    let resultado = await db.query("SELECT * FROM tareas")
    
    res.json(resultado);
});

router.put('/tarea/:id', async (req, res)=>{
    let {id} = req.params;
    let {nombre,estado} = req.body;

    let resultado = await db.query(`UPDATE tareas SET nombre='${nombre}' 'estado'='${estado}' WHERE id=${id}`);
    res.json(resultado);
});

router.delete('/tarea/:id', async (req, res)=>{
    let {id} = req.params;
    let resultado = await db.query(`DELETE FROM tareas WHERE id=${id}`);
    res.json(resultado);
});

module.exports = router;