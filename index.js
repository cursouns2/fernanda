const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'PERSONAL'
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la BD:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos');
});

// Configuración de la ruta
app.get('/', (req, res) => {
  db.query('SELECT * FROM empleados', (err, results) => {
    if (err) {
      res.status(500).send('Error en la consulta de la base de datos');
      return;
    }
    res.json(results); // Muestra los resultados en formato JSON
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
