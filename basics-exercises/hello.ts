class StartUp {
    public static main(): number {
        console.log('Calling static method.');
        return 0;
    }

    public getGreeting(): void {
        console.log('Calling non-static method');
    }
    /**
     * Variable declaration
     * var variableName: variableType = variableValue;
     */
    public variables(): void {
        var name: string = "CJ";
        console.log(name);
        var num1: number = 9;
        var num2: number = 8;
        console.log(num1 + num2);

        var inferencedVar = "test";
        console.log(inferencedVar);
        
    }
}

// calling static method
StartUp.main();

// object creation
var obj = new StartUp();
obj.getGreeting();

