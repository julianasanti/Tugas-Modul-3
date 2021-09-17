import React, {Component} from "react";

class Id extends Component {
    componentWillMount() {
        alert('Please fill in your data correctly')
    }

    state = {
        namaPembeli: '',
        idPelanggan: '',
        kodeBarang: ''
    }

    handlenamaPembeli = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }
    
    handleidPelanggan = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }

    handlekodeBarang = (event) => {
        const { name, value } = event.target
        this.setState((state) => {
            return {
                [name]: value
            }
        })
    }

    render() {
        return (
            <>
                <label for="namaPembeli">Name :</label><br/>
                <input onChange={this.handlenamaPembeli} name='namaPembeli' value={this.state.namaPembeli} style={{ color:'#6e0234'}} />
                <br/>
                <label for="idPelanggan">Customer ID :</label><br/>
                <input onChange={this.handleidPelanggan} name='idPelanggan' value={this.state.idPelanggan} style={{ color:'#6e0234'}} />
                <br/>
                <label for="kodeBarang">Item Code :</label><br/>
                <input onChange={this.handlekodeBarang} name='kodeBarang' value={this.state.kodeBarang} style={{ color:'#6e0234'}} />
                <br/><br/>
                <label for="Cetak Data:">Print Data :</label><br/>             
                <span style={{ color:'#000000'}}>{this.state.namaPembeli}<br></br>Purchase Code : {this.state.idPelanggan}{this.state.kodeBarang}</span>
            </>
        )
    }
}

export default Id;