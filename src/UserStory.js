
const UserStory = (props)=>{

  const compressName = ()=>{
    let compressedName =(props.firstName + props.lastName).toLowerCase()
    
    if(compressedName.length > 10){
      compressedName = compressedName.split('').splice(0, 10).join('') + '...'
    }
    return compressedName
  }

  const selectImageStye = ()=>{
    const style = {borderRadius: '100px', width: '50px', padding: '2px'}
    if(props.gender === 'male'){
      style.border = '3px solid red'
    } else if (props.gender === 'female'){
      style.border = '3px solid green'
    }
    return style
  }

  return(
    <div>
      <img style={selectImageStye()} src={props.image} alt="user"></img>
      <p>{compressName()}</p>
    </div>
  )
}

export default UserStory