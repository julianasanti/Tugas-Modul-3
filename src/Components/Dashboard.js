import { Component } from "react";
import React from "react";
import Id from "./Id";
import Skz from "./Skz";
import './Dashboard.css';

class Dashboard extends Component {
    componentDidMount() {
        alert('Welcome, Happy Shopping :)')
    }

    state = {
        id: false,
        skz: false
    };

    showComponentId = () => {
        this.setState(() => {
            return {
                id: !this.state.id
            }
        })
    };

    Skz = () => {
        this.setState(() => {
            return {
                skz: !this.state.skz
            }
        })
    };

    render() {
        return (
            <div style={{ textAlign:'center', display:'flex' }}>                
                <div style={{ width: '20%', margin:'5%' }}>
                    <img src="./assets/img/stay.jpg" alt="logo"/>
                    <h1 style={{ color:'#000000' }}>Stray Kids Album Cashier</h1>
                </div>
                <div style={{ width: '40%', margin:'5%' }}>
                    <div className='button'>
                    <button style={{ backgroundColor:'#000000', padding: '6px', color:'#f4f6f9' }} onClick={this.showComponentId}>
                        {this.state.id ? 'Delete your data' : 'Fill in your data'}
                    </button>
                    <br/><br/>
                    {this.state.id && <Id/>}
                    </div>
                </div>
                <div style={{ width: '40%', margin:'5%' }}>
                <div className='button'>                   
                    <button style={{ backgroundColor:'#000000', padding: '6px', color:'#f4f6f9' }} onClick={this.Skz}>
                        {this.state.skz ? 'Delete your shopping list' : 'Stray Kids Album List'}
                    </button>
                    <br/>
                    {this.state.skz && <Skz/>}
                    </div>
                </div>
            </div>
        )
    };
};
export default Dashboard;