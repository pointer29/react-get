import React from 'react';
import axios from 'axios';
import moment from 'moment';
import './../css/basestyle.css';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Select , DatePicker,Icon, Input, Form, Modal, Button } from 'antd';

const { Option } = Select;

class DynamicBank extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            CountText: 0,
        
        };
    }

    RenderText = () => {
        const tempComponent = [];
        for (let i = 1; i<this.state.CountText; i++){
            tempComponent.push(
            <div>
                <Select defaultValue="BNI" style={{ width: 120 }} onChange={(e)=>this.handleCategoryChange(e,'select'+i)} id={'select'+i}>
                    <Option onClick={this.handleCategoryChange} value="BCA">BCA</Option>
                    <Option value="BRI">BRI</Option>
                    <Option value="BNI">BNI</Option>
                </Select>
                <Input type="text" id={'text'+i} onChange={ this.changeStateBambang } placeholder={'banknya adalah'+ this.state['select'+i] }/>
                <h1>{ this.state['text'+i] } & { this.state['select'+i] }</h1>
                <br></br>
            </div>
            )
        }
        return tempComponent;

    };

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    handleCategoryChange = (e,ids) => {
        //console.log("value is : ", value);
        console.log("e : ",  e);
        this.setState({ 
            [ids]: e,
        })
      };

    TambahBambang = () => {
        this.setState({ CountText : this.state.CountText + 1 })
    }

    kurangBambang = () => {
        this.setState({ CountText : this.state.CountText - 1 })
    }

    changeStateBambang = e => {

        let ids = e.target.id;
        let value = e.target.value;
        console.log(e);  
        this.setState({ 
            [ids]: value,
        })
    }

    render() {
        return (
            <div>
                <div>
                    <Button type="primary" onClick={() => this.TambahBambang() }>Tambah</Button>
                    <Button type="danger" onClick={() => this.kurangBambang() }>Kurang</Button>
                </div>
                
                <div>
                    {this.RenderText()}
                </div>
            </div>
        )
    }
}

// function handleChange(value) {
//    console.log(`selected ${value}`);
//   }

export default DynamicBank;