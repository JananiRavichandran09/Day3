import { Employee } from "../Models/employeeSchema.js";

export const createEmployee = async(req,res)=>{

    try {
        // const {} = req.body
        const newEmployee = new Employee(req.body)
        await newEmployee.save();
         res.status(200).json({message:"New  Employee Added Successfully", data:newEmployee})
    }
    catch (error) {
        console.log(error);
    }

}
// get employee
    
export const getEmployee = async (req, res) => {
  
    try {
        const employee = await Employee.find()
        res.status(200).json({data:employee})
    }
    catch (error) {
        console.log(error);
    }
}

//get by id

export const getEmployeeDetailById = async (req, res) => {
  
    try {
        const empId = req.params.id
        const employee = await Employee.findById(empId)
        if (!employee) {
            return res.status(404).json({message:"Employee Not Found"})
        }
        res.status(200).json({data:employee})
    }
    catch (error) {
        console.log(error);
    }
}

//update call

export const updateEmployee = async (req, res) => {
    try {
        const empId = req.params.id
        const { firstName, lastName, email, designation } = req.body
        
        const result = await Employee.updateOne({ _id: empId }, { firstName, lastName, email, designation })
        console.log(result);
        if (result.matchedCount === 0) {
            return res.status(404).json({message:"Employee Not Found"})
        }
        const updateEmp = await Employee.findById(empId)
        res.status(200).json({data:updateEmp})
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" })
    }
}