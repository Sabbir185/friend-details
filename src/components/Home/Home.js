import React from 'react';
import { useEffect, useState } from 'react';
import Friend from './../Friend/Friend';

const Home = () => {
    const [friend, setFriend] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriend(data))
    },[]);
  
    return (
        <div>
            {
                friend.map( friend=> <Friend friend={friend}></Friend> )
            }
        </div>
    );
};

export default Home;