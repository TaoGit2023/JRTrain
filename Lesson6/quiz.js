// console.log(1);
// setTimeout(() => {
//   console.log('t1');
// }, 10);
// console.log(2);
// const t2 = () => {
//   setTimeout(() => {
//     console.log('t2');
//   });
// };
// console.log(3);
// t2();
// console.log(4);
console.log('-----------------------------------------------------------------------------------------------------------------------------');
// console.log(1);
// const foo = () => {
//   console.log('foo');
// };
// console.log(2);
// setTimeout(foo, 1000);
// console.log(3);
// const t22 = () => {
//   setTimeout(() => {
//     console.log('t2');
//   });
// };
// console.log(4);
// setTimeout(() => {
//   console.log('t3');
//   t22();
// }, 1000);
// console.log(5);
// t22();
// console.log(6);
setTimeout(() => console.log(1));//0ms
Promise.resolve().then(() => console.log(2));
setTimeout(() => {
  console.log(3);
  Promise.resolve().then(() => console.log(3.1));
});
setTimeout(() => console.log(4));
Promise.resolve().then(() => {
  console.log(5);
  Promise.resolve().then(() => console.log(5.1));
  setTimeout(() => console.log(5.2));
});
Promise.resolve().then(() => console.log(6));