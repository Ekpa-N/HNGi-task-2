const stacks = ["Frontend-Developer", "Backend-Developer", "Incredibly Fun Guy", "Absolute Team Player"]
const stackHolder = document.getElementById('my-Stack')



let stackIndex = 0;
const stackLooper = () => {
    // debugger
    for(i=0; i<stacks.length; i++) {
        
}
stackIndex ++;
if (stackIndex > stacks.length) {
    stackIndex = 1;
}
let something = stackIndex-1
stackHolder.innerText = stacks[something]
setTimeout(stackLooper, 2000);
}

stackLooper()









