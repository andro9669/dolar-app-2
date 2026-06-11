import express from "express";
const app = express();

const API_KEY = "858478";

function validarKey(req, res, next) {
  const key = req.headers["x-api-key"];

  if (key !== API_KEY) {
    return res.status(401).json({ error: "No autorizado" });
  }

  next();
}

async function entregarDolar(req, res) {
  try {
    const respuesta = await fetch("https://cot.yumsistemas.com/api");
    const datos = await respuesta.json();
    res.json(datos);
  } catch {
    res.status(500).json({ error: "Error al conectar con la API" });
  }
}
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.options("/dolar", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.sendStatus(200);
});
app.get("/dolar", validarKey, entregarDolar);
app.listen(3000);
