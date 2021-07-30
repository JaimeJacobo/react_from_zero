

const NewComponent = ({name, alive})=>{
  return alive ? null : <h1>Hello {name}!</h1> 
}

export default NewComponent

