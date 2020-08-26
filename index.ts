import axios from 'axios';
import coin from './logic/coin';

const url = 'https://jsonplaceholder.typicode.com/todos/2';
interface Todo {
    id: number;
    title:string;
    completed:boolean;
}
axios.get(url).then(response =>{
    const todo = response.data as Todo;
    //console.log(response.data);
    //id
    //title
    //completed
    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;
    logTodo(id, title,finished);

});

const logTodo = (id:number, title:string, completed:boolean)=>{
    console.log(`
    The todo with ID: ${id}
    HAS A TITLE OF : ${title}
    Is it finished : ${completed}
    `)
}
let coins = coin(20);
console.log("Number of coins needed"+coins);