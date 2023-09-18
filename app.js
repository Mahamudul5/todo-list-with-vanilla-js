let input = prompt("what would you like do?");
const toDos = ["brush my teeth", "eat my brakfast"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("***************");
    for (i = 0; i < toDos.length; i++) {
      console.log(`${i}:${toDos[i]}`);
    }
    console.log("***************");
  } else if (input === "new") {
    const newTodo = prompt("what you want to add");
    toDos.push(newTodo);
  } else if (input === "delete") {
    const index = parseInt(prompt("type index number to delete"));

    if (!Number.isNaN(index)) {
      const deleted = toDos.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("invalid index");
    }
  }
  input = prompt("what would you like do?");
}
console.log("ok,quit the app");
