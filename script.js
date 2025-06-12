// Generate random messages to the console
const messages = 
[
    'What does a baby computer call his father? Data',
    'I hate my job-all I do is crush cans all day. Its soda deppresing',
    'What do you call a bundle of hay in a church? Christan Bale',
    'How does cereal pay its bills? With Chex', 
    'Wood fired pizza? hows pizza gonna get a job now'
]
let randomIndex = Math.floor(Math.random() * messages.length + 0)

console.log(messages[randomIndex]);