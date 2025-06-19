enum UserRole {
  Admin,
  Manager,
  Employee,
}
type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}
const user1: User = createUser({
  id: 1,
  name: "Alice",
  role: UserRole.Admin,
  contact: ["alice@gmail.com", "123-456-7890"],
});
console.log(user1);
