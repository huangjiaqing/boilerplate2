// require('./dev');
const isProductionMode = (process.env.NODE_ENV === 'production');
const app = isProductionMode ? require('./app.prod') : require('./app.dev');

if (!isProductionMode) {
  process.env.NODE_ENV = 'development';
}

const PORT = process.env.PORT || 4455;

app.listen(PORT, () => {
  console.log(`running in ${isProductionMode ? 'production' : 'development'} mode`);
  console.log(`「 Coopteam 」request post is starting at port ${PORT}`);
});