import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    
    const friendStyle = {
        margin:'20px',
        padding:'20px',
        border:'1px solid gray',
        borderRadius:'20px',
        textAlign:'center'
    }

    const history = useHistory();
    const onClickHandler = () =>{
        history.push(`/friend/${id}`);
    }
    
    return (
        <div style={friendStyle}>
            <h1>Name : {name}</h1>
            <h2>Email : {email}</h2>
            {/* <h4>Click for details : <Link to={`/friend/${id}`}>{name}</Link> </h4> */}
            <button onClick={onClickHandler}>Details info</button>
        </div>
    );
};

export default Friend;