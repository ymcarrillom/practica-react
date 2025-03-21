const data = [
    { username: "mica-123", name: "Micaela", position: "Frontend Developer", isOnline: true },
    { username: "si-simon",name: "Simon", position: "Backend Developer", isOnline: true},
    { username: "miguelito",name: "Miguel", position: "Fullstack Developer" , isOnline: false},
  ];
  
  export const dataWithId = data.map( user => {
    user.id = crypto.randomUUID()
    return user
  })

  


  

export default dataWithId
