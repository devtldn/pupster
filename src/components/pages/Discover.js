import React from 'react';
import axios from 'axios';

class Discover extends React.Component {
    render() {
        return (
            axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
                console.log(res.data);
                
                <img alt="randompup" src={res.data.message} />
            })
        )
    }
}
    
    

export default Discover;