// import { useState } from "react";
// import axios from "axios";


// export default function Update(){

//     const [formData, setFormData] = useState({
//         name : "",
//         age  : "",
//         email  : "",
//         newEmail : ""
//     })

//     const handleChange = (e) =>{
//         console.log(formData)

        

//         setFormData((prev) => {
//             return {
//                 ...prev, [e.target.name] : e.target.value
//             }
//         })

//     }

//     const handleSubmit =  async(e) =>{
//         e.preventDefault();
        
//         console.log("submit btn") ;
//         try {
//             console.log(formData);
//          await axios.put("http://ec2-98-94-95-173.compute-1.amazonaws.com:8080/api/updateUser",
//         formData
//         )
//         console.log("User register success");
//         } catch(err){
//             console.log(err);   
//         }

//     }


//     return(

//         <>
//          <h2>Update Page</h2>

//          <form action="" onSubmit={handleSubmit}>
//             <input type="text" name = "name" placeholder="New name" value = {formData.name} onChange={handleChange} />
//             <input type="number" name = "age" placeholder="New age" value = {formData.age} onChange={handleChange} />
//             <input type="text" name = "newEmail" placeholder="New email" value = {formData.newEmail} onChange={handleChange} />
//             <input type="text" name = "email" placeholder="Registered email" value = {formData.email} onChange={handleChange} />

//             <button >Update</button>
//          </form>
//         </>

//     )



   


// }


import { useState } from "react";
import axios from "axios";

export default function Update() {

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        newEmail: "",
        email: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                "http://ec2-98-94-95-173.compute-1.amazonaws.com:8080/api/updateUser",
                formData
            );

            console.log(response.data);

        } catch (err) {
            console.log(err.response?.data || err.message);
        }
    };

    return (
        <>
            <h2>Update User</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="New name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="age"
                    placeholder="New age"
                    value={formData.age}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="newEmail"
                    placeholder="New email"
                    value={formData.newEmail}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Registered email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <button type="submit">
                    Update
                </button>

            </form>
        </>
    );
}