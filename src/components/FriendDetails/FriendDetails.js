import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
        .catch(err => alert('Not found!'))
    },[]);

    const {name, email, phone, website} = friend;
    const detailStyle = {
        border:'1px solid gray',
        borderRadius:'20px',
        textAlign:'center'
    }
    return (
        <div>
            <h2>This is friend details component : {friendId}</h2>
            <div style={detailStyle}>
                <h4>Name : {name}</h4>
                <h4>Email : {email}</h4>
                <h4>Phone : {phone}</h4>
                <h4>Website : {website}</h4>
            </div>
        </div>
    );
};

export default FriendDetails;