const name = "dnfvnsxn",
    age = 28,
    gender = "male";

const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, yau are a ${gender}`;
};

console.log(sayHi(name, age, gender));
// typescript의 법칙
// 이 파일이 모듈이 된다는 것 이해할 수 있도록하기 위함
export {};
