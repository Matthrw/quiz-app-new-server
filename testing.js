const MyModel = require('./models/my-model');

const docs = [{ name: 'John' }, { name: 'Jane' }];

MyModel.insertMany(docs)
  .then(() => {
    console.log('Documents inserted successfully');
  })
  .catch((error) => {
    console.error(error);
  });
