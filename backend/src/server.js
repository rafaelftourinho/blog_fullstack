// const path = require('path');
const app = require('./app');
// require('dotenv').config({ path: path.resolve(__dirname, '../', '../', '.env') });
require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

module.exports = app;
