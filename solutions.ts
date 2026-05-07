
const filterEvenNumbers = (numbers: number[]): number[]=>{
    return numbers.filter(num => num % 2 === 0);    
}

filterEvenNumbers([1,2,3,4,5,6])



const reverseString = (string: string): string =>{
    let emptyString: string = '';
    for(const str of string){
        emptyString = str + emptyString;
    } 
    return emptyString;
}

reverseString('typescript')


type StringOrNumber = string | number;

const checkType = (value: StringOrNumber) =>{
    if(typeof value === 'string'){
        return 'String';
    }else if(typeof value === 'number'){
        return 'Number';
    }
}
checkType(6);


const user = { id: 1, name: "John Doe", age: 21 };
const getProperty = <Y>(user: Y, key: keyof Y) => {
    return user[key];
};

getProperty(user, 'name')



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}

const toggleReadStatus = <Y>(book: Y): Y =>{
    return {...book, isRead: true};
}

const book = { title: "TypeScript Guide", 
    author: "Jane Doe", 
    publishedYear: 2024, 
 };
toggleReadStatus(book)



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

const student = new Student("Alice", 20, "A");
student.getDetails()



const getIntersection = (array1: number[], array2: number[]): number[] =>{
    const result = array1.filter(value => array2.includes(value));
    return result;
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])