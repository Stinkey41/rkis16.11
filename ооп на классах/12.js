class Employee{
    constructor(name,zarplata){
        this.name = name;
		this.zarplata = zarplata;
    }
    show() {
		return this.name;
        
	}
    show2(){
        return this.zarplata;
    }
    pluszp(){
        this.salary = this.zarplata + (this.zarplata / 10);
        return this.salary;
    }
}
let User = new Employee('PupbIn9', 500);
console.log(User.show());
console.log(User.show2());
console.log(User.pluszp());