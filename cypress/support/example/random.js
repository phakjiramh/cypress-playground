//function ที่กำหนด legth ตายตัว
// Cypress.Commands.add("randomStringOfLength", (length) => {
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//   let result = "";

//   const charactersLength = characters.length;
//   for (let index = 0; index < length; index++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }

//   return result;
// });

Cypress.Commands.add("randomStringAndNumber", (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  const charactersLength = characters.length;
  for (let index = 0; index < length; index++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
});

//function ที่กำหนด lengthตาม min max
Cypress.Commands.add("randomStringOfLength", (length) => {
  function randomStringOfLength({ min, max }) {
    const length = Math.random() * (max - min + 1) + min;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      console.log();
    }

    return result;
  }
  return randomStringOfLength({ min: 5, max: 15 });
});
