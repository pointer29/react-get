import React  from 'react';
import axios from 'axios';

class About extends React.Component {

    handleSubmit = () => {
        axios.get('https://api.github.com/users/barbier')
        .then(function(response){
          console.log(response.data); // ex.: { user: 'Your User'}
          console.log(response.status); // ex.: 200
        });  
    };

    render() {
       return (
          <div>
             <h1>About.</h1>
             <button onClick={this.handleSubmit}>Bambang</button>
          </div>
       )
    }
 }

 export default About;