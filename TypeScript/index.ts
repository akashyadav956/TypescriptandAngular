
class Employee{
    name: string="";
    age: number=0;
    dateOfJoin: Date= new Date();
    salary: number=0;
    isMarried: boolean=false;
}

var emp: Employee = new Employee();
emp.name= "Akash";
emp.age= 25;
emp.salary= 15000;
emp.dateOfJoin= new Date(2019,5,25);
emp.isMarried= false;

console.log(JSON.stringify(emp));