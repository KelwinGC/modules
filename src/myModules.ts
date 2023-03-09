// export 
const PI = 3.1416;

// export 
interface Person{
    id: number;
    name:  string;

}

// export
 function generateRandomNumber(){
    return Math.floor(Math.random() * 100);
}

export {PI,Person,generateRandomNumber}