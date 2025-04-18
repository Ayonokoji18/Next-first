async function getUserData(username) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  return res.json();
}

export default async function UserProfilePage({ params }) {
  const { username } = params;
  const user = await getUserData(username);
  return (
    <div>
      <h1>{user.name}</h1>
      <p> {user.bio}</p>
    </div>
  );
}
