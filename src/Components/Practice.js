import React from 'react'

// export const Practice = () => {
//     async function getData(){
//   return "Namaste";
// }
const p = new Promise((resolve,reject )=> {
    resolve("Promise resolved value!!");
});

export const Practice = () => { 
    async function getData(){
  return p; 
}
const dataPromise = getData();
console.log(dataPromise+"It is the promise!");
dataPromise.then(res=> console.log(res+" I am getting loaded!"));
  return (
    <div>Practice</div>
  ) 
}
