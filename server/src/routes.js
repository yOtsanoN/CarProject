const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')
const BlogController = require('./controllers/BlogController')
const CarController = require('./controllers/CarController');
module.exports = (app) => {
    /* RESFUL Api for users management */
    // create user
    app.post('/user',
        UserController.create
    )
    // edit user, suspend, active
    app.put('/user/:userId',
        UserController.put
    )
    // delete user
    app.delete('/user/:userId',
        UserController.remove
    )
    // get user by id
    app.get('/user/:userId',
        UserController.show
    )
    // get all user
    app.get('/users',
        isAuthenController,
        UserController.index
    )
    app.post('/login',
        UserAuthenController.login
    )

    // blog route
    // create blog
    app.post('/blog',
        BlogController.create
    )
    // edit blog, suspend, active
    app.put('/blog/:blogId',
        BlogController.put
    )
    // delete blog
    app.delete('/blog/:blogId',
        BlogController.remove
    )
    // get blog by id
    app.get('/blog/:blogId',
        BlogController.show
    )
    // get all blog
    app.get('/blogs',
        BlogController.index
    )
     /* Car routes */
    // Create car
    app.post('/car',
         CarController.create
    );
    // Edit car
    app.put('/car/:carId',
        CarController.put
    );
    // Delete car
    app.delete('/car/:carId',
        CarController.remove
    );
    // Get car by ID
    app.get('/car/:carId',
        CarController.show
    );
    // Get all cars
    app.get('/cars',
        CarController.index
    );
}