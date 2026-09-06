import { useState } from "react";


export default function Update(){

    const [formData, setFormData] = useState({
        name : "",
        age  : "",
        email  : ""
    })

    const handleChange = (e) =>{
        console.log(formData)

        e.preventDefault();

        setFormData((prev) => {
            return {
                ...prev, [e.target.name] : e.target.value
            }
        })

    }

    const handleSubmit = () =>{
        console.log("submit btn") ;
    }


    return(

        <>
         <h2>Update Page</h2>

         <form action="" onClick={handleSubmit}>
            <input type="text" name = "name" placeholder="New name" value = "" onChange={handleChange} />
            <input type="text" name = "age" placeholder="New age" value = "" onChange={handleChange} />
            <input type="text" name = "email" placeholder="New email" value = "" onChange={handleChange} />
            <input type="text" name = "original_email" placeholder="Registered email" value = "" onChange={handleChange} />

            <button >Update</button>
         </form>
        </>

    )



   


}