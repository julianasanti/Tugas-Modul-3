import React, {Fragment} from "react";
import './Skz.css';
 
class Skz extends React.Component {    
    componentWillUnmount() {
        alert('Next Transaction')
    };
    
    constructor(props) {
        super(props)
        this.handleChangeStuff = this.handleChangeStuff.bind(this)
        this.state = {
            stuff: [
                ['Noeasy-2021', 21.49],
                ['All In-2020', 20.11],
                ['Go Live-2020', 19.55],
                ['Levanter-2019', 18.16],
                ['Miroh-2019', 18.06],
                ['I Am You-2018', 17.88],
                ['Mixtape-2018', 17.17],
            ],
            menu: {
                a1: 0,
                a2: 0,
                a3: 0,
                a4: 0,
                a5: 0
            },
            totalTagihan: 0,
        }
    }

    handleCalculation = () => {
        const {
            a1,
            a2,
            a3,
            a4,
            a5
        } = this.state.menu
        var total = a1 + a2 + a3 + a4 + a5
        this.setState ({
            ...this.state.menu,
            totalTagihan: total
        })
    }

    handleChangeStuff(e) {
        e.preventDefault()
        const { menu } = this.state
        const { name } = e.target
        var index = e.nativeEvent.target.selectedIndex;
        const { value } = e.nativeEvent.target[index];
        this.setState({
            menu : {
                ...menu,
                [name]: Number(value)
            }
        }, this.handleCalculation);
    }

    render() {
        const {
            stuff,
            totalTagihan
        } = this.state
        return (
            <>
            <div>
                <div style={{ height: '75%' }}>
                    <div className='stay'>
                        <div className='album'>
                            <h3>Select Album</h3>
                            <select onChange={this.handleChangeStuff} name='a1'>
                            <option value='0'>Album 1</option>
                            <Fragment>
                            {
                                stuff.map(kids => {
                                    return (
                                        <option value={kids[1]}>{kids[0]}</option>
                                    )
                                })
                            }
                            </Fragment>
                            </select><br/>
                            <select onChange={this.handleChangeStuff} name='a2'>
                            <option value='0'>Album 2</option>
                            <Fragment>
                            {
                                stuff.map(kids => {
                                    return (
                                        <option value={kids[1]}>{kids[0]}</option>
                                    )
                                })
                            }
                            </Fragment>
                            </select><br/>
                            <select onChange={this.handleChangeStuff} name='a3'>
                            <option value='0'>Album 3</option>
                            <Fragment>
                            {
                                stuff.map(kids => {
                                    return (
                                        <option value={kids[1]}>{kids[0]}</option>
                                    )
                                })
                            }
                            </Fragment>
                            </select><br/>
                            <select onChange={this.handleChangeStuff} name='a4'>
                            <option value='0'>Album 4</option>
                            <Fragment>
                            {
                                stuff.map(kids => {
                                    return (
                                        <option value={kids[1]}>{kids[0]}</option>
                                    )
                                })
                            }
                            </Fragment>
                            </select><br/>

                            <select onChange={this.handleChangeStuff} name='a5'>
                            <option value='0'>Album 5</option>
                            <Fragment>
                            {
                                stuff.map(kids => {
                                    return (
                                        <option value={kids[1]}>{kids[0]}</option>
                                    )
                                })
                            }
                            </Fragment>
                            </select>
                        </div>
                        <h3 style={{ color: '#000000', textAlign: 'center', flex: '1 0 100%', margin: '10px 0' }}>
                            Total Transaction : {totalTagihan} $
                        </h3>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Skz
;