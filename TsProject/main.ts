

import {ProductService,EmployeeService,UserService} from './services';
import {User,Product,Employee} from './models';

let empSvc: EmployeeService= new EmployeeService();
let employees: Employee[] = empSvc.getEmployees();

let productService: ProductService= new ProductService();
let products:Product[] = productService.getProducts();

let userSvc: UserService= new UserService();
let users:User[] = userSvc.getUsers();