class Human {
    // public: calss 밖에서 접근 가능
    // private: class 밖에서 접근 불가 
    public name: string;
    public age: number;
    public gender: string;
    // 생성자 
    // 클래스로부터 객체를 만들 때마다 호출되는 method
    // 
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const ddunddaen = new Human("ddunddaen", 24, "famale")

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, yau are a ${person.gender}`;
};

console.log(sayHi(ddunddaen));
// typescript의 법칙
// 이 파일이 모듈이 된다는 것 이해할 수 있도록하기 위함
export { };
