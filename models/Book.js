const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users',
    // },
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
        maxlength: [100, "Title can not be more than 100 characters"]
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, "Title can not be more than 500 characters"]
    },
    game: {
        type: String,
        required: [true, 'Please add a game title']
    },
    bookImage: {
        type: String,
        trim: true,
    },
    chapters: [{
        image: {
            type: String
        },
        text: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        stats: {
            type: Object,
        },
        comments: [{
            // user: {
            //     type: Schema.Types.ObjectId,
            //     ref: 'users'
            // },
            text: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now
            }
        }],
        date: {
            type: Date,
            default: Date.now
        }
    }],
    likes: [{
        // user: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'users'
        // }
    }],
    comments: [{
        // user: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'users'
        // },
        text: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Book', BookSchema)