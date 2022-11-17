class Employee {
	#name;
	#age;
	#salary;
	
	  constructor(name, age, salary) {
		  this.#name = name;
		  this.#age = age;
		  this.#salary = salary;
	  }
	  kto() {
		  return this.#name + ', ' + this.#age + ' ne zhenat, zarplata: ' + this.#salary + ' mileonav';
	  }
  }
  
  let User = new Employee('PupbIn9', 28, 500);
  
  console.log(User.kto());