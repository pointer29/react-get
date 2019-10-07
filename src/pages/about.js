import React  from 'react';
import axios from 'axios';

class About extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        data:'kosong'
      };
    }

    handleSubmit = () => {
      //   axios.get('https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/users')
      //   .then(function(response){
           
      //       // let kumpulandata=response.data;
      //       // let i;
      //       // console.log(kumpulandata);
           
      //       // for (i = 0; i < kumpulandata.length; i++) {
      //       //    console.log(kumpulandata[i].city);
      //       //  }
      //        this.setState({data:'kumpulandata'});
      //        //this.state.bind(this);
      //       //console.log(response.data); // ex.: { user: 'Your User'}
      //       //console.log(response.status); // ex.: 200
      //   });  

        axios.get('https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/users')
        .then((response)=>{
           
            let kumpulandata=response.data;
            let i;
            console.log(kumpulandata);
            
            for (i = 0; i < kumpulandata.length; i++) {
               console.log(kumpulandata[i].city);
               this.setState({data:kumpulandata[i].city});
             }
             
             //this.state.bind(this);
            //console.log(response.data); // ex.: { user: 'Your User'}
            //console.log(response.status); // ex.: 200
        }); 
    };

    render() {
       return (
          <div>
             <h1>About.</h1>
             <h1>{this.state.data}</h1>
             <button onClick={this.handleSubmit}>Bambang</button>
          </div>
       )
    }
 }

 export default About;