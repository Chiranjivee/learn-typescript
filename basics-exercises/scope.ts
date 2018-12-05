var globalNum  = 10; // global var

class Numbers {
    num: number = 14; // class field var is not required here.
    static numStatic: number = 15;

    public methodScope(): void {
        var localVar:number = 12;
        console.log('local' + localVar);
    }
}

console.log(globalNum);
console.log(Numbers.numStatic);

var numbers = new Numbers();
console.log(numbers.num);
numbers.methodScope();


