const fs = require('fs');

class Contenedor {
  constructor(file) {
    this.file = file;
  }
  
  async save(producto) {
    try {
      const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
  
      let productos = [];
      if (contenido === '') {
        producto.id = 1;
        productos.push(producto);
      } else {
        const listaDeProducto = JSON.parse(contenido);
    
        producto.id = listaDeProducto[listaDeProducto.length - 1].id + 1;
        listaDeProducto.push(producto);
        productos = listaDeProducto;
      }
  
      const productosString = JSON.stringify(productos, null, 2);
      await fs.promises.writeFile(`./${this.file}`, productosString);

      return producto.id; 
    } catch (error) {
      console.error('Error:', error);
    };
  }
  async getById(id) {
    try {
        const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
        const listaDeProducto = JSON.parse(contenido);
        if (listaDeProducto === '') {
          return null;
        } else { const elementoEncontrado = listaDeProducto.filter(elemento => elemento.id == id);
        }
    }catch (error) {
      console.error('Error:', error);
    };
  }
  async getAll() {
    try {
      const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
      const listaDeProducto = JSON.parse(contenido);
    
      return listaDeProducto;
    } catch (error) {
      console.error('Error:', error);
    };
  }
  async deleteById(id) {
    try {
      const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
      const listaDeProducto = JSON.parse(contenido);
      if (listaDeProducto === '') {
      } else { const elementoEncontrado = listaDeProducto.filter(elemento => elemento.id !== id);
        console.log(elementoEncontrado)
        const productosString = JSON.stringify(listaDeProducto, null, 2);
        await fs.promises.writeFile(`./${this.file}`, productosString);
      }
    }catch (error) {
      console.error('Error:', error);
    };
  }  

  async deleteAll() {
    try {
      await fs.promises.writeFile(`./${this.file}`, '');
    } catch (error) {
      console.error('Error:', error);
    };
  }
}

module.exports = Contenedor;