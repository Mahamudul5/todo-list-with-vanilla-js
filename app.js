let input = prompt("what would you like do?");
const toDos = ["brush my teeth", "eat my brakfast"];
while (input !== "quit") {
  if (input === "list") {
    console.log("***************");
    for (i = 0; i < toDos.length; i++) {
      console.log(`${i}:${toDos[i]}`);
    }
    console.log("***************");
  } else if (input === "new") {
    const newTodo = prompt("what you want to add");
    toDos.push(newTodo);
  } else if (input === "delete") input = prompt("what would you like do?");
}
console.log("ok,quit the app");
