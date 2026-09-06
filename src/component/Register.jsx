import {useState} from "react"
import axios from "axios"


export default function Register(){

    const [formData, setFormData] = useState({
        name : "",
        age : "",
        email : ""
    });


    const handleSubmit = async (e) =>{
        e.preventDefault();
        setFormData({
        name : "",
        age : "",
        email : ""
    });

        try {
            console.log(formData)
         await axios.post("http://ec2-98-94-95-173.compute-1.amazonaws.com:8080/api/addUser",
        formData
        )
        console.log("User register success");
        } catch(err){
            console.log(err);   
        }

    }
    const handleChange = (e) =>{

        setFormData((prev) => {
            return {
                ...prev, [e.target.name] : e.target.value
            }
        })

    }



return (

    <>
    <h2>User Register</h2>

    <form action="" onSubmit ={handleSubmit} >

        <input
        value ={formData.name}
        onChange={handleChange}
        placeholder="Name"
        type = "text"
        name = "name"
         />

        <input
        value = {formData.age}
        onChange={handleChange}
        placeholder="Age"
        type = "Number"
        name = "age" />



        <input
        value ={formData.email}
        onChange= {handleChange}
        placeholder="email"
        type = "email"
        name = "email" />
            

        <button>Submit</button>


        
    </form>

    </>
)


}