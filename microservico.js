const eventBus = {
  events: {},
  emit(event, data) {
      if (this.events[event]) {
          this.events[event].forEach(fn => fn(data));
      }
  },
  on(event, fn) {
      if (!this.events[event]) {
          this.events[event] = [];
      }
      this.events[event].push(fn);
  }
};

const userService = {
  createUser: (userData) => {
      console.log('Usuário criado:', userData);
      eventBus.emit('userCreated', userData);
  }
};

const productService = {
  createProduct: (productData) => {
      console.log('Produto criado:', productData);
      eventBus.emit('productCreated', productData);
  }
};

eventBus.on('userCreated', (userData) => {
  console.log('Evento de usuário criado recebido:', userData);
});

eventBus.on('productCreated', (productData) => {
  console.log('Evento de produto criado recebido:', productData);
});
