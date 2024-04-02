import express from 'express';
import { createEmployee, getEmployee, getEmployeeDetailById, updateEmployee } from '../Controllers/employeeController.js';


const router = express.Router()

router.post('/createEmp', createEmployee)   // http://localhost:4000/api/createEmp
router.get('/getEmp', getEmployee)
router.get('/getEmp/:id', getEmployeeDetailById)
router.put('/edit/:id', updateEmployee)
export default router;