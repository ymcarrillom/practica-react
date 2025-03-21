//import UserList from "./List";
import Contact from "./Contact";
import dataWithId from "./utils";
//import ListTwo from "./ListTwo";
//import { dato } from "./utils";



function App() {
  return (
  <>
  <h1>Bienvenidos usuarios</h1>
  {dataWithId.map(user => <Contact key={user.id} name={user.name} isOnline={user.isOnline}/>)}

  </>
  )
}

export default App
