
import {useEffect, useState} from "react"
import axios from "axios"
import '../CSS/ViewAll.css'


export default function ViewAll() {

    const[loading, setLoading] = useState(true);
    const[Users, setUsers] = useState([]);

    useEffect(() =>{
        const fetchUsers = async() =>{
            try {
               const response = await  axios.get("http://ec2-98-94-95-173.compute-1.amazonaws.com:8080/api/getAllUsers");
               console.log("movies data got fetched");
               

               setUsers(response.data);

            } catch(err) {
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        };

        fetchUsers();

   
    }, [])

    return (
        <>
        <h1>All Registered Users</h1>

        <ul className="container">
            {
                Users.map((user) => {
                    return <li key = {user._id} >{user.name}</li>
                })
                
            }
        </ul>
        </>
    )
}