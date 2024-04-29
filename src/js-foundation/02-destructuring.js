console.log(process.env);

const {SHELL, LOGNAME} = process.env;
console.table({SHELL, LOGNAME});

const characters = ['Flash', 'Superman', 'Batman'];
const [_, __, batman] = characters;
console.log(batman);
