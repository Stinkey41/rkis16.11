class Empoloyee{
    show(name, salary){
        return name + ' пошёл за сасисками и зарплатой'+ salary;
    }
}


let user = new Empoloyee();
user.name = "PypbIn9";
user.salary = 500;
console.log(user.name);
console.log(user.salary);



let user2 = new Empoloyee();
user2.name = "Bat9 PupbIni";
user2.salary = 4500000000;

console.log(user2.name);
console.log(user2.salary);
console.log(user.show('Bat9 PupbIni' , 'PupbIni'));