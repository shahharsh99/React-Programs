import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Common from '../Common';
import { Button, Divider } from '@material-ui/core';

export default class PascalPyramid extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            number : null
        }
    }

    generate(numRows) {
        let triangle = [[1], [1,1]]
        
        if(numRows === "0"){
            return []
        }
        else if(numRows === ""){
            return []
        } 
        else if(numRows === "1"){
            return [[1]]       
        } else if(numRows === "2"){
            return  [[1], [1,1]]
        } else {      
            for(let i = 2; i < numRows; i++){       
                this.addRow(triangle)
            }
        }
        return triangle
        
    };

    addRow(triangle){
        let previous = triangle[triangle.length - 1]
        let newRow = [1]
        for(let i = 0; i < previous.length - 1; i++){
            let current = previous[i]
            let next = previous[i+1] 
            newRow.push(current + next)
        }
        newRow.push(1)
        return triangle.push(newRow)   
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({number : e.target.value})
    }


    render(){
        console.log(this.generate(this.state.number))
        return (
            <Common title = "Pascal's Triangle">
            <Button onClick={() => this.props.history.push("/")} variant="outlined" color="secondary" className="m-3">
                Home
            </Button>
            <Divider/>
            <br/>
            <center>
            <form className="form" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <TextField id="number" label="Enter Number of Rows" name="number" onChange={(e) => this.handleChange(e)}/>
            </form>
                <br/>
                <br/>
            {this.state.number === null ? <></> :
                <table>
                    <tbody>                        
                            {this.generate(this.state.number).map(d => {
                                return <tr>{d.map(value =>{
                                    return <td style={{minWidth:"30px", width:"auto", maxWidth:"100px"}}>{value}</td>
                                })}</tr>
                            })}
                    </tbody>
                </table>
            }
            </center>
        </Common>
        );
    }
}


