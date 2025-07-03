import chalk from "chalk";
const error = chalk.bold.red;



export const singup = (req,res)=>{
  const {fullName, email, password} = req.body
  try {
    //hash password
    

  } catch (error) {
    console.log(error(error));
    
  }
};




export const login = (req,res)=>{
    res.send("Log_in route")
};
export const logout = (req,res)=>{
    res.send("Log_out route")
};