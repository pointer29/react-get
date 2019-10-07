import React  from 'react';
import axios from 'axios';
import './../css/basestyle.css';

class About extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        data:'kosong'
      };
    }

    users_get = () => {
          axios.get('https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/users')
          .then((response)=>{
              let kumpulandata=response.data;
              let i;
              for (i = 0; i < kumpulandata.length; i++) {
                // console.log(kumpulandata[i].createdAt);
                create_element_get1(kumpulandata[i].createdAt,kumpulandata[i].name,kumpulandata[i].avatar)
               }
          }); 
      };
    
    posting_get = () => {
        axios.get('https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/photos')
        .then((response)=>{
           
            let kumpulandata=response.data;
            let i;

            for (i = 0; i < kumpulandata.length; i++) {
               console.log(kumpulandata[i].createdAt);
               create_element_get2(kumpulandata[i].createdAt,kumpulandata[i].photos,kumpulandata[i].count_likes)
             }
        }); 
    };

    render() {
       return (
          <div>
             <h1>Variable Get Post.</h1>
             {/* <h1>{this.state.data}</h1> */}
             <div class="widh-full">
                <div class="left-side"> 
                    <div id="variableget">
                    <button onClick={this.users_get}>GET</button>
                        <table border="1" id="tables1">
                            <tr>
                                <td>Created</td>
                                <td>Name</td>
                                <td>Avatar</td>
                            </tr>
                            {/* <tr>
                                <td>2019-09-30T17:14:38.699Z</td>
                                <td>Cristopher </td>
                                <td><img src="https://s3.amazonaws.com/uifaces/faces/twitter/iamsteffen/128.jpg"/></td>
                            </tr> */}
                        </table>
                    </div>
                </div>
                <div class="right-side"> 
                    <div id="variablepost">
                    <button onClick={this.posting_get}>GET</button>
                        <table border="1" id="tables2">
                            <tr>
                                <td>Created</td>
                                <td>Avatar</td>
                                <td>Count</td>
                            </tr>
                            {/* <tr>
                                <td>2019-09-30T17:14:38.699Z</td>
                                <td>Cristopher </td>
                                <td><img src="https://s3.amazonaws.com/uifaces/faces/twitter/iamsteffen/128.jpg"/></td>
                            </tr> */}
                        </table>
                    </div>
                </div>
            </div>
          </div>
       )
    }
 }

 function create_element_get1(created_at,name,url_img) {
    //alert('ok');
    var tr1 = document.createElement("tr");
    var tdcreatedat = document.createElement("td");
    var tdname = document.createElement("td");
    var tdimg = document.createElement("td");
    var images = document.createElement("IMG");
    var stringcreated=document.createTextNode(created_at);
    var stringname=document.createTextNode(name);
    images.src=(url_img);
    tdimg.appendChild(images);
    tdname.appendChild(stringname);
    tdcreatedat.appendChild(stringcreated);
    tr1.appendChild(tdcreatedat);
    tr1.appendChild(tdname);
    tr1.appendChild(tdimg);
    document.getElementById("tables1").appendChild(tr1);
  }
  function create_element_get2(created_at,url_img,counting) {
    //alert('ok');
    var tr1 = document.createElement("tr");
    var tdcreatedat = document.createElement("td");
    var tdcounting = document.createElement("td");
    var tdimg = document.createElement("td");
    var images = document.createElement("IMG");
    var stringcreated=document.createTextNode(created_at);
    var stringcounting=document.createTextNode(counting);
    images.className = "max-image";
    images.src=(url_img);
    tdimg.appendChild(images);
    tdcounting.appendChild(stringcounting);
    tdcreatedat.appendChild(stringcreated);
    tr1.appendChild(tdcreatedat);
    tr1.appendChild(tdimg);
    tr1.appendChild(tdcounting);
    document.getElementById("tables2").appendChild(tr1);
  }

 export default About;