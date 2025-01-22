function Profile (props) {

    console.log(props);
    

    return (
        <div className="max-w-48">
           <p>Nom: {props.userName} </p> 
           <p>Age: {props.userAge} </p> 
        </div>
    )
}

export default Profile;