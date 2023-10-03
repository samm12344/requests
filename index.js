const express = require ('express')
const app = express()

app.use(express.json())

// http://localhost:3000/sotero/123
app.get('/', (req, res) =>{
    res.json({msg: 'Hello Get'})
})
app.get('/:user/:password', (req, res) =>{
    const {user, password} = req.params
if (user === 'sam' && password === '123'){
    res.json({msg: 'Inicio de Sesion exitoso'})
    return
}
  res.json({msg: 'Fallo en el usuario o contraseña'})
})

//http://localhost:3000/login?user=sam&password=123
app.get('/login', (req, res) => {
    const {user, password} = req.query
    if(!user || !password) {
    res.status(400).json({msg: 'You need to provide <user> and <password> params'})
    }
    
    if (user === 'sam' && password === '123'){
        res.json({msg: 'Sign In succesfully'})
        return
    }
      res.status(404).json({msg: 'Wrong user or password'})
    })
    
    app.post('/login',(req,res)=>{
        const {user,password} = req.body
        if(!user || !password) {
            res.status(400).json({msg: 'You need to provide <user> and <password> params'})
            }
            
            if (user === 'sam' && password === '123'){
                res.json({msg: 'Sign In succesfully'})
                return
            }
              res.status(404).json({msg: 'Wrong user or password'})
            })
        

app.post('/', (request, response) =>{
    response.json("Hola POST")
})
app.put('/', (request, response) =>{
    response.json("Hola PUT")
})
app.patch('/', (request, response) =>{
    response.json("Hola PATCH")
})
app.delete('/', (request, response) =>{
    response.json("Hola DELETE")
})

/**
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listening on port 3000')
})