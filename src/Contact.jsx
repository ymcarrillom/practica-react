export default function Contact({ name, isOnline }) {
   
    return (
      <li className="contact">
        {isOnline && <span style={{backgroundColor:"green"}}>En linea</span>}
        {name}
      </li>
    );
  }