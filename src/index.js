const app = require('./app');
const port = 3000;

(async function run() {
  await app.listen(port);
  console.log(`Server running on ${port}`);
  
})(port);