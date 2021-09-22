const Contenedor = require('./contenedor');

const contenedor = new Contenedor('productos.json');

// const productoUno = {
//   title: 'Plasticola',
//   price: 76.50,
//   thumbnail: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/151/873/products/20200422_1715001-cca9db13693614094e15875865405912-640-0.jpg'
// };

const main = async () => {
//   const id = await contenedor.save(productoUno);
  
const id = await contenedor.deleteById(2);

  //  const list = await contenedor.getAll();
  //  console.log(list);

//  await contenedor.deleteAll();
};

main();


