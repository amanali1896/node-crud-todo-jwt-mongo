import mongoose from 'mongoose';
import { TODOSchema } from '../models/taskModel';

const Task = mongoose.model('Task', TODOSchema);/** pass the new task
to the model */

export const addnewTask = (req, res) => {
    let newTask = new Task(req.body); //passing data from the body of request

    newTask.save((err, task) => {
        if (err) {
            res.send(err); //send an error if you get an error
        }
        res.json(task); // if no error then send the task
    });
}

export const getTasks = (req, res) => {
    Task.find({}, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
}

export const getTaskID = (req, res) => {
    Task.findById(req.params.taskID, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
}

export const updateTask = (req, res) => {
    Task.findOneAndUpdate({ _id: req.params.taskID}, req.body, { new: true, useFindAndModify: false }, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
}

export const deleteTask = (req, res) => {
    Task.deleteOne({ _id: req.params.taskID}, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'task has been deleted'});
    });
}

