const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://AdminTask:mern_stack@admin-task-list.qmhsn.mongodb.net/file_upload?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
