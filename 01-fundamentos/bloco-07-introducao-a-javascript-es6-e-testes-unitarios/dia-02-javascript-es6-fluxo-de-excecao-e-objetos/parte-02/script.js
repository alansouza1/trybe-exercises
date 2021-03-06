const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const adddressNumber = order.address.number;
  const apartment = order.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${adddressNumber}, AP: ${apartment}`)
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const name = order.name;
  const pizzas = Object.keys(order.order.pizza);
  const drinkType = order.order.drinks.coke.type;
  const payment = order.payment.total;


  console.log(`Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinkType} é R$ ${payment},00.`)
}

orderModifier(order);