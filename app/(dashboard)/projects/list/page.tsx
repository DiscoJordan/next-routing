'use client'
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


interface userType{
  id:number;
  name:string;
  username:string;
  phone:string;
  email:string;
  website:string;
  company?:any;
  adress?:any

}
export default function ProjectList() {

 
  const [users, setUsers] = useState<userType[]>([]);
  let getUsers = async () => {
    let res = await axios("https://jsonplaceholder.typicode.com/users")
    setUsers(res.data)
    console.log(res.data);
    

  }
  useEffect(() => {
      getUsers();
  }, []);


  return (
    <main>
      <h1>List</h1>
       <ul>
        {users.map(user =><li key={user.id}><Link href={`/projects/list/${user.name}`}>{user.name}</Link></li>)}
       </ul>


    </main>
  );
}
