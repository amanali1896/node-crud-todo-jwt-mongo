import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// refer to https://mongoosejs.com/docs/schematypes.html

/**
 * Database Schema is defined as follows
 * Title, Tasks and Date for a todo list
 */

export const TODOSchema = new Schema({
    title: {
        type: String,
        required: 'Enter the title'
    },
    tasks: {
        type: String,
        required: 'Enter the task'
    },
    date_of_creation: {
        type: Date,
        default: Date.now
    }
});
