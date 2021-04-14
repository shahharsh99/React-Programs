import React, { Component } from 'react'
import { connect } from "react-redux";
import Common from '../Common'
import { Button, Divider } from '@material-ui/core';
import { bookDetailId } from "../../Actions/openLibrary/bookDetailId"
import { authorDetail } from "../../Actions/openLibrary/authorDetail"

export class BookDetailId extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            authors : []
        }
    }

    getDetail = async () => {
        console.log(this.props.match.params);
        await this.props.bookDetailId(this.props.match.params.id).then(()=>{
        })
        const { bookDetailIdData, history } = this.props;
        if(bookDetailIdData){
            {bookDetailIdData.authors?.map(d => {
                this.props.authorDetail(d.author?.key).then(() => {
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
                                        {this.props.bookDetailIdData.covers?.map(d => {
                                            return <img src={`http://covers.openlibrary.org/b/id/${d}-M.jpg`} className="m-1"/>
                                        })}
                                    </center>
                                </td>
                                <td>
                            <tr>
                                <th scope="row">Title</th>
                                <td>{this.props.bookDetailIdData.title}</td>
                            </tr>
                            {/* <tr>
                                <th scope="row">Full title</th>
                                <td>{this.props.bookDetailIdData.full_title}</td>
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
                            {/* <tr>
                                <th scope="row">Publishers</th>
                                {this.props.bookDetailIdData.publishers?.map(d => {
                                    return(
                                        <tr>
                                            <td>{d}</td>
                                        </tr>
                                    )
                                })}
                            </tr> */}
                            {/* <tr>
                                <th scope="row">Subjects</th>
                                <td>
                                    {this.props.bookDetailIdData.subjects?.map(d => {
                                        return <>"{d}", </>
                                    })}
                                </td>
                            </tr> */}
                            <tr>
                                <th scope="row">Latest Revision</th>
                                <td>
                                    {this.props.bookDetailIdData.latest_revision}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">First Publish Date</th>
                                <td>
                                    {this.props.bookDetailIdData.first_publish_date}
                                </td>
                            </tr>
                            </td>
                        </tr>
                            <tr className="text-center">
                                    {/* <a className="btn btn-primary btn-sm mb-4" href={`https://archive.org/details/${this.props.bookDetailIdData.ocaid}?ref=ol&view=theater`}>Preview</a> */}
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
        bookDetailIdLoading: state.bookDetailId?.isLoading,
        bookDetailIdData: state.bookDetailId?.data || [],
        bookDetailIdError: state.bookDetailId?.error || {}, 

        authorDetailLoading: state.authorDetail?.isLoading,
        authorDetailData: state.authorDetail?.data || [],
        authorDetailError: state.authorDetail?.error || {},         
};
};

const mapDispatchToProps = {
    bookDetailId,
    authorDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailId);

