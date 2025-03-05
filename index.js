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
  db.query('SELECT * FROM Personas', (err, results) => {
    if (err) {
      res.status(500).send('Error en la consulta de la base de datos');
      return;
    }
    
    // Crear tabla HTML
    let html = '<h1>Datos de la Tabla Personas</h1>';
    html += '<table border="1"><tr><th>ID</th><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Teléfono</th></tr>';
    
    // Recorrer los resultados y agregarlos a la tabla
    results.forEach(person => {
      html += `<tr>
                <td>${person.id}</td>
                <td>${person.nombre}</td>
                <td>${person.apellido}</td>
                <td>${person.edad}</td>
                <td>${person.telefono}</td>
               </tr>`;
    });
    
    html += '</table>';
    
    // Enviar la respuesta con el HTML
    res.send(html);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
