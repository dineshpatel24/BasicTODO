let todo = [];
let req = prompt("enter your request");
while (true) {
    if (req == 'quit') {
        console.log("you quit app");
        break;
    }

    if (req == "list") {
        console.log("--------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("--------------------");

    } else if (req == "add") {
        let addTask = prompt("type task that you want to add");
        todo.push(addTask);
        console.log(`${addTask} added to todo list`);
    } else if (req == "remove") {
        let removeTask = prompt("enter index of task that you want to delete");
        console.log(`${todo[removeTask]}  removed`);

        todo.splice(removeTask, 1);
        // console.log(`${todo[removeTask]}  removed`);
    } else {
        console.log("Invailed request");
    }
    req = prompt("enter your request");

}