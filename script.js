// Generate random messages to the console
const messages = 
[
    'Random 1',
    'Random 2',
    'Random 3',
    'Random 4'
]
let randomIndex = Math.floor(Math.random() * messages.length + 1)

console.log(messages[randomIndex]);