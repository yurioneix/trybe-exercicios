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
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const customer = order.name;
    const customerPhone = order.phoneNumber;
    const customerStreet = order.address.street;
    const customerAdressNumber = order.address.number;
    const customerApartment = order.address.apartment;
    
    console.log(`Olá! Me chamo ${deliveryPerson}, entrega para: ${customer}, telefone: ${customerPhone}, ${customerStreet}, nº: ${customerAdressNumber}, AP: ${customerApartment}`);
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    let newCustomer = order.name;
    newCustomer = 'Luiz Silva'; 
    let newTotalPayment = order.payment.total;
    newTotalPayment = 50;
    
    const pizzas = Object.keys(order['order'].pizza);
    const coke = order['order'].drinks.coke.type;
    
    console.log(`Olá ${newCustomer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${coke} é R$ ${newTotalPayment}`);
  };
  
  orderModifier(order);