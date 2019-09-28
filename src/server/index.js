const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { validarEsquema } = require('./validaciones');

app.use(bodyParser.json());
//x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

const infracciones = [
    { "fecha": "2018-05-01", "detalles": { "modelo": "Ford Ka", "calle": "Riobamba 2123" }, "velocidad": 100, "patente": "AA 456 AA" },
    { "fecha": "2018-06-01", "detalles": { "modelo": "Toyota Etios", "calle": "Riobamba 2123" }, "velocidad": 110, "patente": "PA 456 AB" },
    { "fecha": "2018-07-02", "detalles": { "modelo": "Volkswagen Gol", "calle": "Riobamba 2123" }, "velocidad": 130, "patente": "AA 456 AC" },
    { "fecha": "2018-08-10", "detalles": { "modelo": "Chevrolet Onix", "calle": "Riobamba 2123" }, "velocidad": 150, "patente": "MA 456 AD" },
    { "fecha": "2018-01-07", "detalles": { "modelo": "Renault Nuevo Sandero", "calle": "Riobamba 2123" }, "velocidad": 60, "patente": "AA 456 AE" },
    { "fecha": "2018-02-09", "detalles": { "modelo": "Renault Kwid", "calle": "Riobamba 2123" }, "velocidad": 80, "patente": "NA 456 AF" },
    { "fecha": "2018-03-16", "detalles": { "modelo": "Volkswagen Amarok", "calle": "Riobamba 2123" }, "velocidad": 70, "patente": "AA 456 AG" },
    { "fecha": "2018-05-17", "detalles": { "modelo": "Peugeot 208", "calle": "Riobamba 2123" }, "velocidad": 90, "patente": "AY 458 AA" },
    { "fecha": "2018-06-02", "detalles": { "modelo": "Fiat Cronos", "calle": "Riobamba 2123" }, "velocidad": 110, "patente": "HA 458 YT" },
    { "fecha": "2018-10-03", "detalles": { "modelo": "Toyota Hilux", "calle": "Riobamba 2123" }, "velocidad": 40, "patente": "BA 459 TR" },
    { "fecha": "2018-11-05", "detalles": { "modelo": "Chevrolet Onix", "calle": "Riobamba 2123" }, "velocidad": 85, "patente": "AA 459 FR" },
    { "fecha": "2018-03-11", "detalles": { "modelo": "Renault Nuevo Sandero", "calle": "Riobamba 2123" }, "velocidad": 75, "patente": "AA 477 GG" },
    { "fecha": "2018-02-10", "detalles": { "modelo": "Toyota Etios", "calle": "Riobamba 2123" }, "velocidad": 100, "patente": "AA 499 FF" }
];

app.get('/infracciones', (req, res, next) => {
    console.log(req.headers);
    res.setHeader('CURSO', 'Angular');
    res.json(infracciones).status(200);
});

app.post('/infracciones',
    (req, res, next) => {
        const nuevaInfraccion = req.body;
        const camposNoEncontraron = validarEsquema(nuevaInfraccion);
        if (camposNoEncontraron)
            next(`No se encontraron los siguientes campos: ${camposNoEncontraron}`);
        else {
            infracciones.push(nuevaInfraccion);
            res.setHeader('CURSO', 'Angular');
            res.json(req.body).status(200);
        }
    });

app.use((err, req, res, next) => {
    res.status(500);
    res.json({ err });
});

const server = app.listen(port, () => {
    console.log(`Escuchando en el puerto ${server.address().port}`);
});