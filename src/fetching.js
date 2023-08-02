import React from "react"
// const App = () => {
//   const [users, setUsers] = useState([])

//   const fetchUserData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchUserData()
//   }, [])

//   return (
//     <div>
//         <button onClick={fetchUserData}>submit</button> 

//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;
// import React from 'react'

let arr=[]
export const display=()=>{
  console.log("hi")
  return (
    <div>
      <h1>helloo</h1>
      {arr.map((item)=>{
        <p>{item.id}</p>
      })}
    </div>
  )
}
export const Fetching = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then ((response)=>response.json()).then ((js)=>{
      arr.push(js)
  })
  console.log(arr)
return (
  <div>
    <button onClick={display}>Fetching</button>
  </div>
)
}
export default Fetching;