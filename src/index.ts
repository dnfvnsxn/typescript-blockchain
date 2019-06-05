interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "dnfvnsxn",
    age: 28,
    gender: "male"
}

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, yau are a ${person.gender}`;
};

console.log(sayHi(person));
// typescript의 법칙
// 이 파일이 모듈이 된다는 것 이해할 수 있도록하기 위함
export { };
