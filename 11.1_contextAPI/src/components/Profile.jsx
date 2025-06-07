import { userContext } from "../context/UserContextProvider";

function Profile() {
  const { user } = userContext();
  if (user.username) return <p>{user.username}</p>;
  return <h1>Go and Login MF</h1>;
}

export default Profile;
