module.exports = function(app) {
    const todoList = require('../Controller/Signup_Controller');
    const AdminController = require('../Controller/Admincontroller');
    
    
   
     app.route('/Signup')
    .get(todoList.get_a_data)
    .post(todoList.signup);

    app.route('/Signin')
    .post(todoList.userSignin);
    
    

    app.route('/Singup/:SingupId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);


    app.post('/markets', AdminController.markets);
    app.get('/getbyMarketId/:marketId1', AdminController.getSingleVolunByMrktId);
    app.get('/getbyMarketId', AdminController.getVolunByMrktId);
    app.get('/getallVolunteers', AdminController.getallVolunteers);
    app.post('/volunteer', AdminController.volunteers);
    app.get('/getbyVolunteerId/:volunteersId1', AdminController.getProductsByVolunId);
    app.post('/products', AdminController.products); 
    app.get('/allproducts', AdminController.getProductsDetails);
    app.get('/getallProductDetails', AdminController.getallProductDetails);
    
};






   