// Arrays and for..in
let names = ["Enrique", "Ricardo", "Sarah"];
for (const p in names) {
  console.log(names[p]);
}

console.log("------ Adding a custom property thru prototype ------ ");
Array.prototype.coolFeature = "cool";
for (const p in names) {
  console.log(names[p]);
}
// 1. Possible fix
// for (const p in names) {
//   if (names.hasOwnProperty(p)) {
//     console.log(names[p]);
//   }
// }

// 2. There is another fix even simpler
