function UserList (props){
    return props.users.map((user)=> <p key={user.id}>
      {user.name}</p> )
  }

  export default UserList;