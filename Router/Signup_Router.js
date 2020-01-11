module.exports = function(app) {
    const todoList = require('../Controller/Signup_Controller');
    const Product = require('../Controller/Admincontroller');
    
    //  const isAuth=require('../Middleware/isAuth')
    
   
     app.route('/Signup')
    .get(todoList.get_a_data)
    .post(todoList.signup);

    app.route('/Signin')
    .get(todoList.userSignin);
    
    

    app.route('/Singup/:SingupId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
    



//     module.exports = function(app) {
// const todoList = require('../Controller/Controller');
// const desktop = require('../Controller/DesktopController');
// const laptop = require('../Controller/LaptopController');
// const miscellaneous = require('../Controller/MiscellaneousController');
// const isAuth=require('../Middleware/isAuth')


// app.route('/Signup')
// .get(todoList.get_a_data)
// .post(todoList.signup);

// app.route('/Signin')
// .get(todoList.userSignin);

// app.route('/Singup/:SingupId')
// .get(todoList.read_a_task)
// .put(todoList.update_a_task)
// .delete(todoList.delete_a_task);



// app.route('/Desktop')
// .get(desktop.get_a_data)
// .post(desktop.update_a_task)



// app.route('/Laptop')
// .get(laptop.get_a_data)
// .post(laptop.update_a_task)
// app.route('/Laptop')
// .get(laptop.get_a_data)
// .post(laptop.update_a_task);
 app.route('/Admin')
 .get(Product.get_a_data)
 .post(Product.update_a_task);
};