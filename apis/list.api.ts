// type Crud={
//     [key:string]:string,
// } & Record<'get|post|put|delete',string>


const employee={
   get:'/employee',
   post:'/employee',
   put:'/employee/',
   delete:'/employee/',
}

export {
    employee as employeeUrl
}