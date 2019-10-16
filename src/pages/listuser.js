import React from 'react';
import axios from 'axios';
import moment from 'moment';
import './../css/basestyle.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { DatePicker,Icon, Input, Form, Modal, Button } from 'antd';

class ListUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: 'kosong',
            username: 'z',
            email: 'z',
            createdAt:'',
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    users_get = () => {
        axios.get('https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/users')
            .then((response) => {
                let kumpulandata = response.data;
                let i;

                for (i = 0; i < kumpulandata.length; i++) {
                    // console.log(kumpulandata[i].createdAt);
                    create_element_get1(fix_waktu(kumpulandata[i].createdAt), kumpulandata[i].name, kumpulandata[i].avatar)
                        //console.log(kumpulandata[i].createdAt);
                        ;
                }
            });
    };

    posting_get = () => {
        axios.get('https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/photos')
            .then((response) => {

                let kumpulandata = response.data;
                let i;

                for (i = 0; i < kumpulandata.length; i++) {
                    //console.log(kumpulandata[i].createdAt);
                    create_element_get2(fix_waktu(kumpulandata[i].createdAt), kumpulandata[i].photos, kumpulandata[i].count_likes)

                }
            });
    };

    post_user = () => {
        console.log(this.state.username);
        // const dataForm = new FormData();
        // dataForm.append('name', this.state.username);
        // dataForm.append('email', this.state.email);
        // dataForm.append('createdAt', this.state.createdAt);
        axios.post('https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/users',{name: this.state.username, email: this.state.email, createdAt: moment(this.state.createdAt).format()})
        .then((response) => {
            let kumpulandata = response.data;
            console.log(kumpulandata);
            // this.setState({
            //     createdAt: kumpulandata.createdAt,
            // });
        });
        console.log(this.state);
    }

    onchange = e => {
        
        let ids = e.target.id;
        let value = e.target.value;
        // console.log([ids]);
        // console.log([value]);
        this.setState({
            [ids]: value,
        });
    };

    datechanged = (date, dateString)=>{
        console.log(dateString);
        this.setState({
            createdAt: dateString,
        });
    }


    render() {
        return (
            <div>
                <h1>Variable Get Post.</h1>
                {/* <h1>{this.state.data}</h1> */}
                <div class="widh-full">
                    <div class="left-side">
                        <div id="variableget">

                            <Button onClick={this.users_get} type="primary">GET</Button>
                            <Button type="primary" onClick={this.showModal}>
                                Open Modal
                            </Button>
                            <Modal
                                title="Basic Modal"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <div style={{ paddingBottom: '10px' }}>
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username" onChange={this.onchange}  id="username"
                                    />
                                </div>
                                <div>
                                  
                                    <Input
                                        prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="text" onChange={this.onchange} id="email"
                                        placeholder="email" 
                                    />
                                </div>
                                <div>
                                    <DatePicker onChange={this.datechanged} id="datetimepicker" />
                                </div>
                                
                                <Button onClick={this.post_user}>Action</Button>
                            </Modal>
                            <table border="1" id="tables1">
                                <tr>
                                    <td>Created</td>
                                    <td>Name</td>
                                    <td>Avatar</td>
                                    <td>Email</td>
                                    <td>Action</td>
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

function onChangeted(date, dateString) {
    //console.log(date, dateString);
    // this.setState({
    //     createdAt: dateString,
    // });
  }

function create_element_get1(created_at, name, url_img) {
    //alert('ok');
    var tr1 = document.createElement("tr");
    var tdcreatedat = document.createElement("td");
    var tdname = document.createElement("td");
    var tdimg = document.createElement("td");
    var images = document.createElement("IMG");
    var stringcreated = document.createTextNode(created_at);
    var stringname = document.createTextNode(name);
    images.src = (url_img);
    tdimg.appendChild(images);
    tdname.appendChild(stringname);
    tdcreatedat.appendChild(stringcreated);
    tr1.appendChild(tdcreatedat);
    tr1.appendChild(tdname);
    tr1.appendChild(tdimg);
    document.getElementById("tables1").appendChild(tr1);
}
function create_element_get2(created_at, url_img, counting) {
    //alert('ok');
    var tr1 = document.createElement("tr");
    var tdcreatedat = document.createElement("td");
    var tdcounting = document.createElement("td");
    var tdimg = document.createElement("td");
    var images = document.createElement("IMG");
    var stringcreated = document.createTextNode(created_at);
    var stringcounting = document.createTextNode(counting);
    images.className = "max-image";
    images.src = (url_img);
    tdimg.appendChild(images);
    tdcounting.appendChild(stringcounting);
    tdcreatedat.appendChild(stringcreated);
    tr1.appendChild(tdcreatedat);
    tr1.appendChild(tdimg);
    tr1.appendChild(tdcounting);
    document.getElementById("tables2").appendChild(tr1);
}

function fix_waktu(strwaktu) {
    let kalender;
    let waktu;
    let stringkalender;
    // console.log(strwaktu);
    kalender = strwaktu.substring(0, 10);
    waktu = strwaktu.substring(11, 22);
    //console.log(waktu);
    let kalendersplit = kalender.split('-');
    stringkalender = moment(kalendersplit[1] + '-' + kalendersplit[2] + '-' + kalendersplit[0] + ' ' + waktu).format('MMMM Do YYYY, h:mm:ss a');
    //console.log(stringkalender);
    return stringkalender;

}

export default ListUser;