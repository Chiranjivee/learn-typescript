class StartUp {
    public static main(): number {
        console.log('Calling static method.');
        return 0;
    }

    public getGreeting(): void {
        console.log('Calling non-static method');
    }
}

// calling static method
StartUp.main();

// object creation
var obj = new StartUp();
obj.getGreeting();