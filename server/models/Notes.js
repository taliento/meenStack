var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
    title: 'string',
      content: 'string',
      author: 'string'
});

mongoose.model('Note',noteSchema);

