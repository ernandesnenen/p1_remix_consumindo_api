import { useLoaderData } from "remix";

export interface User{
  name:string,
  email:string,
}

export interface LoaderDataProps{
  data : User[]
 
}


export const loader = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  const data = users.map((user:User)=>{
    return(
      {
        name: user.name,
        email: user.email,
      }
    )
  })
  console.log('::>>',data)
  return data

}


export default function Index() {
  const data = useLoaderData<LoaderDataProps>();

  return (
    <>
    {data.map((user:User) => {
      return(      
        <div key={user.name}>
          <p>{user.name}</p><br/>
          <p>{user.email}</p>
        </div>
        )
    })}
    </>
  );
}
