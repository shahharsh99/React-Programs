import React, { Component } from 'react'
import { connect } from "react-redux";
import Common from '../Common'
import { Button, Divider } from '@material-ui/core';
import { bookDetailIa } from "../../Actions/openLibrary/bookDetailIa"
import { authorDetail } from "../../Actions/openLibrary/authorDetail"

export class BookDetailIa extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            authors : []
        }
    }

    getDetail = async () => {
        console.log(this.props.match.params);
        await this.props.bookDetailIa(this.props.match.params.ia).then(()=>{
        })
        const { bookDetailIaData, history } = this.props;
        if(bookDetailIaData){
            {bookDetailIaData.authors?.map(d => {
                this.props.authorDetail(d.key).then(() => {
                    const { authorDetailData, history } = this.props;
                    if(authorDetailData){
                        const authors = [...this.state.authors]
                        authors.push(authorDetailData)
                        this.setState({authors})
                    }
                })
            })}
        }
    // });
    }

    componentDidMount(){
        this.getDetail()
    }

render(){
    console.log("&&&&&&&&&&&&&&&&&&&&",this.state.authors);
    return (
        <Common title="Open Library">
                <Button onClick={() => this.props.history.push("/openlibrary-book-search")} variant="outlined" color="secondary" className="m-3">
                    Back
                </Button>
                <Button onClick={() => this.props.history.push("/")} variant="outlined" color="secondary" className="m-3">
                    Home
                </Button>                
                <Divider/>
                <div>
                    <table className="table table-light table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <center>
                                        {this.props.bookDetailIaData?.covers?.map(d => {
                                            return <img src={`http://covers.openlibrary.org/b/id/${d}-L.jpg`} className="m-1"/>
                                        })}
                                    </center>
                                </td>
                                <td>
                            <tr>
                                <th scope="row">Title</th>
                                <td>{this.props.bookDetailIaData?.title}</td>
                            </tr>
                            {/* <tr>
                                <th scope="row">Full title</th>
                                <td>{this.props.bookDetailIaData.full_title}</td>
                            </tr> */}
                            <tr>
                                <th scope="row">Authors</th>
                                {this.state.authors?.map(d => {
                                    return(
                                        <tr>
                                            <td>{d.name}</td>
                                        </tr>
                                    )
                                })}
                            </tr>
                            <tr>
                                <th scope="row">Publishers</th>
                                {this.props.bookDetailIaData?.publishers?.map(d => {
                                    return(
                                        <tr>
                                            <td>{d}</td>
                                        </tr>
                                    )
                                })}
                            </tr>
                            <tr>
                                <th scope="row">Subjects</th>
                                <td>
                                    {this.props.bookDetailIaData?.subjects?.map(d => {
                                        return <>"{d}", </>
                                    })}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Latest Revision</th>
                                <td>
                                    {this.props.bookDetailIaData?.latest_revision}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">First Publish Date</th>
                                <td>
                                    {this.props.bookDetailIaData?.publish_date}
                                </td>
                            </tr>
                            </td>
                        </tr>
                            <tr className="text-center">
                                    <a className="btn btn-primary btn-sm mb-4" href={`https://archive.org/details/${this.props.bookDetailIaData?.ocaid}?ref=ol&view=theater`}>Preview</a>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Common>
            
            )
        }
    }


const mapStateToProps = (state) => {
    return {
        bookDetailIaLoading: state.bookDetailIa?.isLoading,
        bookDetailIaData: state.bookDetailIa?.data || [],
        bookDetailIaError: state.bookDetailIa?.error || {}, 

        authorDetailLoading: state.authorDetail?.isLoading,
        authorDetailData: state.authorDetail?.data || [],
        authorDetailError: state.authorDetail?.error || {},         
};
};

const mapDispatchToProps = {
    bookDetailIa,
    authorDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailIa);

