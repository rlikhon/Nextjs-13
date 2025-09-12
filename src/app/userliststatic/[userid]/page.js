import React from "react";
import getUsers from "../../../../services/getUsers";

const page = async (props) => {
  const getUserList = getUsers();
  const users = await getUserList;
  const currentId = props.params.userid;
  const userData = users[currentId - 1];
  console.log(users[currentId - 1]);

  return (
    <>
      <div>User Static Details</div>
      <h2>ID: {userData.id}</h2>
      <h2>Name: {userData.name}</h2>
      <h2>Email: {userData.email}</h2>
      <div className="user-meta">
        <div>
          <strong>City:</strong> {userData.address.city}
        </div>
        <div>
          <strong>Company:</strong> {userData.company.name}
        </div>
        <div>
          <strong>Phone:</strong> {userData.phone}
        </div>
        <div>
          <strong>Website:</strong> {userData.website}
        </div>
      </div>
    </>
  );
};

export default page;

export async function generateStaticParams() {
  const getUserList = getUsers();
  const users = await getUserList;
  return users.map(user => ({
    userId: user.id.toString()
  }))
}
