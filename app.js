const express = require('express');
const app = express();

app.use(express.json());

// const librerias = [
//     {id: 1, name: "El Librote", location:"Av. Libertador 1460" , phonenumber: 3514563344,},
//     {id: 2, name: "El Librito", location:"Av. Paraiso 2069" , phonenumber: 3514563345,}
// ];

// app.get('/', (req, res)=>{
//     res.send('NodeJS libreria api')
// });

// app.get('/api/librerias', (req, res) =>{
//     res.send(librerias);
// });

// app.get('/api/librerias/:id', (req, res) => {
//     const libreria = librerias.find(c => c.id === parseInt(req.params.id));
//     if(!libreria) return res.status(404).send('No se encontro la libreria');
//     else res.send(libreria)
// });


// app.post('/api/librerias', (req, res)=>{
//     const libreria = {
//         id: librerias.length +1,
//         name: req.body.name,
//         location: parseInt
//     };
//     librerias.push(libreria);
//     res.send(libreria); 
// });

// app.delete('/api/librerias/:id', (req, res)=>{
//     const libreria = librerias.find(c=> c.id === parseInt(req.params.id));
//     if (!libreria) return res.status(404).send('Libreria no encontrada');
    
//     const index = librerias.indexOf(libreria);
//     librerias.splice(index, 1);
//     res.send(libreria);
// });

// const port = process.env.port || 80;
// app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));
