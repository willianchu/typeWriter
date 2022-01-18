const sentence = "hello there from lighthouse labs";
let i = 0;
for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), i);
  i += 50;
}
console.log("\n");
