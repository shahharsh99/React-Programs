import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Common from '../Common';
import { Button, Divider } from '@material-ui/core';

export default class FibonacciSeries extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            number : null
        }
    }
    
    generate(number){
        let t1 = 0
        let t2 = 1
        let data = []
            for (let i = 1; i <= number; ++i) {
                data.push(t1)
                let nextTerm = t1 + t2;
                t1 = t2;
                t2 = nextTerm;
            }
            console.log(data);
            return data
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({number : e.target.value})
    }


    render(){
        return (
            <Common title = "Fibonacci Series">
                <Button onClick={() => this.props.history.push("/")} variant="outlined" color="secondary" className="m-3">
                    Home
                </Button>
            <Divider/>
            <br/>
            <center>
            <form className="form" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <TextField id="number" label="Enter Number" name="number" onChange={(e) => this.handleChange(e)}/>
            </form>
                <br/>
                <br/>
            {this.generate(this.state.number).map(d => {
                return <p>{d}<br/></p>
            })}
            </center>
        </Common>
        );
    }
}


