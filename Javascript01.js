let n = 5;
for (let i = 1; i <= n; i++) {
let row = "";
for (let j = 1; j <= 2; j++) {
if (i == 1 || i == n || j == 1 || j == 2) {
if (i == 1 && j == 2) continue;
if (i == n && j == 2) continue;
row += "* ";
} else {
 row += "  ";
 }
 }
 console.log(row);
}
for (let i = 1; i <= 3; i++) {
console.log("*   *");
}
console.log("* *");
console.log("*");