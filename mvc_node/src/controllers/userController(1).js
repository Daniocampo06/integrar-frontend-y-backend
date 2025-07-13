
// exports.getUsers = (req, res) => {
//     res.send("Lista de usuarios");
// };

// exports.getUserById = (req, res) => {
//     res.send(`Usuario con ID: ${req.params.id}`);
// };

const User = require("../models/userModel");

exports.getUsers = (req,res) =>{
    User.getAllUsers((err, users)=>{
        if (err) {
            res.status(500).send("Error obteniendo usuarios");
        }
        else{
            res.json(users);
        }
    });   
};


exports.getUserById= (req,res)=>{
  const userId = req.params.id;
  User.getUserById(userId,(err, user)=>{
    if (err) {
        res.status(500).send("Error obteniendo usuario");
    }
    else if(!user){
        res.status(404).send("Usuario no encontrado");
    } 
    else{
        res.json(user);
    }
  });
};

exports.createUser = (req,res) =>{
    const {nombre, email, telefono} = req.body;
    if(!nombre || !email || !telefono){
        return res.status(400).send("Nombre y email son obligatorios");
    }

    User.createUser(nombre,email, telefono,(err,newUser)=>{
        if (err) res.status(500).send("Error creando usuario");
         else res.status(201).json(newUser);        
    });
};


exports.updateUser = (req,res)=>{
    const userId = req.params.id;
    const {nombre,email,telefono} = req.body;

    if (!nombre || !email || !telefono) {
        return res.status(400).send("Nombre y email son obligatorios");
    }

    User.updateUser(userId, nombre, email,telefono,(err, updateUser)=>{
        if (err){
            res.status(500).send("Error actualizando usuario");
        }
        else{
            res.json(updateUser);
        }       
    });
};

exports.deleteUser = (req, res) =>{
    const userId = req.params.id;
    User.deleteUser(userId,(err,message)=>{
        if (err) {
            res.status(500).send("Error eliminando usuario");
        }
        else{
            res.json(message);
        }
    });
}; 
