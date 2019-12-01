import { addnewTask, getTasks, getTaskID, updateTask, deleteTask } 
from '../controllers/taskController';
import { login, register, loginRequired} from '../controllers/userControllers';

//routes for endpoints are defined here 

const routes = (app) => {
    app.route('/task') //creating all the routes
      
        .get(loginRequired, getTasks) //will work only if user has logged in
                                     //that is why loginRequired is added
    

        .post(loginRequired, addnewTask);

    app.route('/task/:taskID') //id based query to update a particular note
        .get(loginRequired, getTaskID) //id based query to read a particular note
        

        .put(loginRequired, updateTask) //id based query to update a particular note
        

        .delete(loginRequired, deleteTask);//id based query to delete a particular note

    // registration route
    app.route('/auth/register')
        .post(register);

    // login route
    app.route('/auth/login')
        .post(login);
        
}

export default routes; //export the routes to be used in index.js
