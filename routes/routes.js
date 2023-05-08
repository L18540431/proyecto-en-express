//Ruta de la app
const { request, response } = require('express');
const pool = require('../data/config');
const router = app => {
  //Mostrar mensaje de bienvenida de root
  app.get('/', (request, response) => {
    response.send({
      message: "Bienvenido a Node.js Express REST API!",
    });
  });

                  //****************************** USUARIOS *************************************** */
                  //Mostrar todos los usuarios
                  app.get('/users', (request, response) => {
                    pool.query('SELECT * FROM users', (error, result) => {
                      if (error) throw error;
                      response.send(result);
                        
                    });
                  });

                  //mostar un solo usuario por ID
                  app.get('/users/:id',(request,response)=>{
                    const id = request.params.id;
                    pool.query('SELECT * FROM users WHERE id = ?', id, (error, result)=>{
                      if(error) throw error;

                      response.send(result);
                    });
                  });

                  //Agregar un nuevo usuario
                  app.post('/users', (request,response) =>{
                    pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
                      if (error) throw error;

                      response.status(201).send(`User added whith ID: ${result.insertId}`);
                  });
                  });

                  //Actualizar un usuario existente
                  app.put('/users/:id', (request, response) =>{
                    const id = request.params.id;

                    pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
                      if(error) throw error;
                      response.send('User updated successfully');
                    });
                  });

                //eliminar un usuario
                app.delete('/users/:id',(request,response) => {
                  const id = request.params.id;

                  pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
                    if (error) throw error;
                    response.send('User deleted.');
                  });
                });


                //****************************** PRODUCTOS *************************************** */
                app.get('/productos', (request, response) => {
                  pool.query('SELECT * FROM productos', (error, result) => {
                    if (error) throw error;
                    response.send(result);
                      
                  });
                });

                //mostar un solo usuario por ID
                app.get('/productos/:id',(request,response)=>{
                  const id = request.params.id;
                  pool.query('SELECT * FROM productos WHERE id = ?', id, (error, result)=>{
                    if(error) throw error;

                    response.send(result);
                  });
                });

                //Agregar un nuevo usuario
                app.post('/productos', (request,response) =>{
                  pool.query('INSERT INTO productos SET ?', request.body, (error, result) => {
                    if (error) throw error;

                    response.status(201).send(`User added whith ID: ${result.insertId}`);
                });
                });

                //Actualizar un usuario existente
                app.put('/productos/:id', (request, response) =>{
                  const id = request.params.id;

                  pool.query('UPDATE productos SET ? WHERE id = ?', [request.body, id], (error, result) => {
                    if(error) throw error;
                    response.send('User updated successfully');
                  });
                });

              //eliminar un usuario
              app.delete('/productos/:id',(request,response) => {
                const id = request.params.id;

                pool.query('DELETE FROM productos WHERE id = ?', id, (error, result) => {
                  if (error) throw error;
                  response.send('User deleted.');
                });
              });
                //********************************************************************* */
}

module.exports = router;