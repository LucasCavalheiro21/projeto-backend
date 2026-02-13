import express from "express"

const app = express();
app.use(express.json());

const usuarios = [

    {id: 1, nome: "Lucas", idade: 24},
    {id: 2, nome: "Fernanda", idade: 23},
    {id: 3, nome: "Marcela", idade: 44},
    {id: 4, nome: "Thiago", idade: 45},
    {id: 5, nome: "Bruno", idade: 3}

]

app.get("/usuarios", (request, response) => {

    response.status(200).json(usuarios)

})

app.post("/usuarios", (request, response) => {

    const {id, nome, idade} = request.body;
    usuarios.push({id, nome, idade});    
    response.status(201).json(usuarios)

})

app.put("/usuarios/:id", (request, response) => {

    const {nome, idade} = request.body;
    const {id} = request.params;
    const index = usuarios.findIndex(u => u.id == id);

    if(index < 0){

        return response.status(404).json("User Not Found :(");
    
    }

    usuarios[index] = {id: parseInt(id), nome, idade};    
    response.status(200).json(usuarios);

})

app.delete("/usuarios/:id", (request, response) => {

    const {id} = request.params;
    const index = usuarios.findIndex(u => u.id == id);

    if(index < 0){

        return response.status(404).json("User Not Found :(");
    
    }

    usuarios.splice(index, 1);    
    response.status(200).json(usuarios);

})

app.listen(8080, () => {

    console.log("Running on port 8080")

})