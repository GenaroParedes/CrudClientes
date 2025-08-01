Proyecto Migrado de Json-server a MockAPI para poder desplegarlo en Netlify o Github Pages

Con json-server utilizamos la URL http://localhost:4000/clientes en los fetch y tenemos que ejecutar el comando
json-server --watch db.json --port 4000
por lo tanto no podia desplegarse.

con mockApi creamos una API que si puede desplegarse tranquilamente. 
La URL nueva -> https://688cfcebcd9d22dda5cf237b.mockapi.io/api/v1/clientes