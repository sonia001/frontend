import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from '../pages/about';
import Books from '../pages/books/Books';
import BookPage from '../pages/books/BookPage';
import ForgotPassword from '../pages/forgotpassword';
import Home from '../pages/home';
import SignIn from '../pages/login';
import PublishBook from '../pages/publishbook';
import SignUp from '../pages/signup';
import PublishBookChapter from '../pages/publishbookchapter';

const AppRouter = () =>{
return(
    <>
    <BrowserRouter>
    <Switch>
        <Route exact path ="/" component = {Home}/>
        <Route path ="/signin" component = {SignIn}/>
        <Route path ="/signup" component = {SignUp}/>
        <Route path = "/forgotpassword" component = {ForgotPassword}/>
        <Route path="/aboutus" component ={About}/>
        <Route exact path="/books" component = {Books}/>
        <Route exact path="/books/:id" component = {BookPage}/>
        <Route path="/publishbook" component = {PublishBook}/>
        <Route path="/publishbookchapter" component = {PublishBookChapter}/>
    </Switch>
    </BrowserRouter>
    </>
)
}
export default AppRouter;