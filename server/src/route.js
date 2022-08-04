const UserController = require('./controllers/UserController')
odule.exports = (app) => {
    app.post('/users',UserController.create)

    app.put('/users',UserController.put)
    
    app.delete('/users',UserController.remove)

    app.get('/users',UserController.show)

    app.get('/users',UserController.index)
}