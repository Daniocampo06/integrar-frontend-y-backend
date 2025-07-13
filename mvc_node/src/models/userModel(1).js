const db = require('../config/db');

exports.getAllUsers = (callback)=>{
    db.query("SELECT * FROM usuarios",(err, results)=>{
        if(err){          
          callback(err,null);
        }
        else{
         callback(null,results)
        }
    })
}

exports.getUserById = (id,callback)=>{
    db.query("SELECT * FROM usuarios WHERE id = ?",[id],(err,results)=>{
       if(err){
          callback(err, null)
       } else{
        callback(null,results[0])
       }
    })
}

exports.createUser = (nombre, email,telefono,callback)=>{
    db.query("INSERT INTO usuarios(nombre,email,telefono) VALUES(?,?,?)",[nombre,email,telefono],(err,result)=>{
        if(err){
          callback(err, null)
        }
        else{
            callback(null,{id:result.insertId, nombre,email,telefono})
        }
    })    
}

exports.updateUser = (id,nombre,email,telefono,callback)=>{
    db.query("UPDATE usuarios SET nombre = ?, email = ?, telefono = ? WHERE id = ?",[nombre,email,telefono,id],(err,results)=>{
     if(err){
       callback(err,null)
     }
     else{
        callback(null, {message:"Usuario actualizado correctamente"})
     }
    });
}

exports.deleteUser = (id, callback)=>{
  db.query("DELETE FROM usuarios WHERE id = ?", [id],(err,result)=>{
     if (err) {
         callback(err,null);
     }
     else{
        callback(null, {message:"Usuario eliminado correctamente"})
     }
  })
}