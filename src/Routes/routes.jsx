import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Calculator from "../Components/Calculator";
import FibonacciSeries from "../Components/Fibonacci Series"
import Home from "../Components/Home";
import BookSearch from "../Components/OpenLibrary/bookSearch";
import BookDetail from "../Components/OpenLibrary/bookDetail";
import PascalPyramid from "../Components/PascalPyramid";

const Routes = () => {
    return (
    <Router>
        <Switch>
            <Route exact name = "/openlibrary/works/:id/:ia" path="/openlibrary/works/:id/:ia" component={BookDetail}/>
            <Route exact name = "openlibrary-book-search" path="/openlibrary-book-search" component={BookSearch}/>
            <Route exact name = "pascal-pyramid" path="/pascal-pyramid" component={PascalPyramid}/>
            <Route exact name = "fibonacci-series" path="/fibonacci-series" component={FibonacciSeries}/>
            <Route exact name = "calculator" path="/calculator" component={Calculator}/>
            <Route exact name = "tasks" path="/tasks" component={Home}/>

            <Route path="/" render={() => <Redirect to="/tasks" />} />
        </Switch>
    </Router>)}

export default Routes;