function ListTwo (props){
    return props.users.map((user)=> <p key={user.username}>
      {user.name}</p> )
      
  }
  export default ListTwo