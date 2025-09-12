export default async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
//
// export async function UserList() {
//   const users = await getData();
//     console.log(users);
//   return (
//     <div></div>
//       <h2>User List</h2>
//       <div>Total Users: {users.length}</div>
//       <div className="user-list container mt-4 p-4 border rounded shadow bg-light">
//         <ul>
//           {users.map((user) => (
//             <li key={user.id} className="user-card">
//               <div className="user-avatar">
//                 <img
//                   src={`https://robohash.org/${user.id}?size=50x50`}
//                   alt={user.name}
//                 />
//               </div>
// 
//               <div className="user-info">
//                 <div className="user-name">{user.name}</div>
//                 <div className="user-email">{user.email}</div>
//  
//                 <div className="user-meta">
//                   <div>
//                     <strong>City:</strong> {user.address.city}
//                   </div>
//                   <div>
// //                     <strong>Company:</strong> {user.company.name}
//                   </div>
//                   <div>
//                     <strong>Phone:</strong> {user.phone}
//                   </div>
//                   <div>
//                     <strong>Website:</strong> {user.website}
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
