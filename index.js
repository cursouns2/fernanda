const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const datos = [
  {
    id: 1,
    nombre: 'Fernanda',
    apellidos: 'Montenegro Carrascal',
    edad: 22,
    telefono: '949218455',
    correo: 'fernanda123@gmail.com',
  },
  // Puedes agregar más datos aquí
];

app.get('/datos', (req, res) => {
  let tablaHTML = `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Edad</th>
          <th>Teléfono</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
  `;

  datos.forEach((dato) => {
    tablaHTML += `
        <tr>
          <td>${dato.id}</td>
          <td>${dato.nombre}</td>
          <td>${dato.apellidos}</td>
          <td>${dato.edad}</td>
          <td>${dato.telefono}</td>
          <td>${dato.correo}</td>
        </tr>
      `;
  });

  tablaHTML += `
      </tbody>
    </table>
  `;

  res.send(tablaHTML);
});

app.get('/', (req, res) => {
  res.send('<h1>Bienvenido</h1><p><a href="/datos">Ver datos</a></p>');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
