//callbacks are to deal asynchrnus operations
//createOrder-->proceedtopay--->Sumary--->Update Wallet

//synchronous ops

// console.log("Hi");
// console.log("Hello");
// console.log("Namaste");
// console.log("1234");
// console.log("HI");

//making asynchronous ops using callbacks we can do

// console.log("Hi");
// console.log("Hello");
// setTimeout(() => {
//   console.log("Asybch using vallback");
// }, 2000);
// console.log("Namaste");

// createOrder(cart, function () {
//   proceedtopay(),
//     function () {
//       Sumary(),
//         function () {
//           UpdateWallet();
//         };
//     };
// });

//callback hell piramid of doom
// (1) Inversion of control lost (2) call back hel
//by promises we can overcome issues

const cart = ["Shoes", "Dress", "Laptops", "Mobiles"];
// let cart = [];
// let orderid = createOrder();
// procced(orderid);

function createOrder(cart) {
  let prmse = new Promise(function (resolve, reject) {
    // let cart = [];
    if (!cart || cart.length === 0) {
      let err = new Error("No Cart available");
      reject(err);
      return;
    }
    let order_id = 124;
    if (order_id) {
      resolve(order_id);
    }
  });
  return prmse;
}

function proceedtopay(id) {
  let pmse = new Promise((resolve, reject) => {
    if (id) return resolve({ status: "Payment resolved", orderId: id });
  });
  return pmse;
}

createOrder(cart)
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((id) => {
    return proceedtopay(id);
  })
  .then((data) => {
    console.log(data);
  })
  .then(() => {});

//
// createOrder(cart)
//   .then((data) => data)
//   .then((id) => proceedtopay(id))
//   .then((data) => {
//     console.log(data);
//   })
//   .then(() => {});
