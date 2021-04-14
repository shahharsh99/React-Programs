import { Field, Formik } from 'formik';
import { connect } from "react-redux";
import React, { Component } from 'react'
import Common from '../Common'
import { bookSearch } from "../../Actions/openLibrary/bookSearch"
import { displayFormErrors } from '../../util';
import "./style.css"
import { Button, Divider } from '@material-ui/core';


export class BookSearch extends Component {
    
    initialValues = () => {
        
        return {
            bookName :  "",
        }
    }

    onHandleSubmit = (val) => {
    this.props.bookSearch(val.bookName).then(() => {
        const { bookSearchData, history } = this.props;
        if(bookSearchData){
            
        }
    });
}

    handleDetail(key,lending_identifier_s){
        if(lending_identifier_s !== undefined)
        this.props.history.push(`/openlibrary${key}/${lending_identifier_s}`)
        else{
        this.props.history.push(`/openlibrary${key}`)
        }
    }

render(){
    {console.log(this.props.bookSearchData)}

    return (
        <Common title="Open Library">
            <Button onClick={() => this.props.history.push("/")} variant="outlined" color="secondary" className="m-3">
                    Home
                </Button>
                <Divider/>
                <br/>
                <div>
                    <Formik
                        enableReinitialize
                        initialValues = {this.initialValues}
                        onSubmit={this.onHandleSubmit}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            submitCount,
                            setFieldValue,
                        }) => {
                            const showError = (key) =>
                            displayFormErrors(key, errors, touched, submitCount);
                            
                            return (
                                <center>
                                
                                        <h2 className="text-center mb-4">
                                            Search Book in OpenLibrary
                                        </h2>
                                    <form onSubmit={handleSubmit} className="form">
                                        <div className="form-group">
                                            <label for="bookName">Book Name : </label>
                                            <Field type="text" name="bookName" className="w-25 text-center form-control" required/>
                                            <br />
                                        </div>
                                        <div className="w-25 text-center mt-3">
                                            <button type="submit" className="btn btn-primary m-4">  
                                                Search
                                            </button>
                                        </div>
                                    </form>
                            </center>
                        );
                    }}
                    </Formik>
                    <Divider/>
                    <br/>
                    <center>
                    {/* <div className="grid-container"> */}
                    <div className="row">
                        {this.props.bookSearchData.docs ? 
                                this.props.bookSearchData.docs.map(d => {
                                    return(
                                                // <div className="grid-items m-1">
                                                    <div className="col col-md-6 col-lg-4 col-sm-12">

                                                    <div className="card mb-3" style={{ maxWidth: "540px"}}>
                                                        <div className="row g-0">
                                                            <div className="col-md-4">
                                                            <img src={`http://covers.openlibrary.org/b/id/${d.cover_i}-M.jpg`} alt={d.title} style={{blockSize:"350px", maxWidth:"150px"}}/>
                                                            </div>
                                                            <div className="col-md-8">
                                                            <div className="card-body">
                                                                <h5 className="card-title">{d.title}</h5>
                                                                <p className="card-text"><small className="text-muted">First Published Year : {d.first_publish_year}</small><br/>
                                                                <br/>
                                                                <p>Authors :</p>
                                                                {d.author_name?.map(d => {
                                                                    return <>{d}, </>
                                                                })}
                                                                </p>
                                                                
                                                                <small className="text-muted">No. of Editions : {d.edition_key.length}</small>
                                                                <br/>
                                                                <small className="text-muted">Edition key : {d.cover_edition_key}</small>
                                                                
                                                                <br/>
                                                                <br/>

                                                                <button className="btn btn-success btn-sm m-1" style={{borderRadius:"20px"}} onClick={() => this.handleDetail(d.key,d.lending_identifier_s)}>Details</button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <ReactTooltip place="top" type="success" effect="solid"/> */}
                                                        
                                                {/* // </div> */}
                                                </div>
                                    )
                                    // return (d.isbn?.map((img,index) => {
                                        //     return(

                                            //         <div className="grid-items m-1">
                                            //                 <img className="m-2" data-tip={d.title} src={`http://covers.openlibrary.org/b/isbn/${img}-M.jpg`} height="200px" width="100px"/>
                                            //                 <p>{d.title}</p>
                                            //                 <button className="btn btn-secondary btn-sm m-2" onClick={() => {this.handleDetail(img)}}>Details</button>
                                            //                 {/* <ReactTooltip place="top" type="success" effect="solid"/> */}
                                            
                                            //             </div>
                                            //         ) 
                                            //     }))
                                        }): 
                                    <p></p>}
                                        </div>
                                {/* </div>  */}
                    </center>
                </div>
            </Common>
            
            )
        }
    }


const mapStateToProps = (state) => {
return {
    bookSearchLoading: state.bookSearch?.isLoading,
    bookSearchData: state.bookSearch?.data || [],
    bookSearchError: state.bookSearch?.error || {},
};
};

const mapDispatchToProps = {
    bookSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(BookSearch);

