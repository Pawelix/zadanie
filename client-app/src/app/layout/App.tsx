import React from 'react';
import { PageHeader } from 'antd';
import NavBar from '../../features/nav/NavBar';
import BooksList from '../../features/books/BooksList';
import BookEdit from '../../features/books/BookEdit';
import BookCreate from '../../features/books/BookCreate';
import BookDetails from '../../features/books/BookDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { observer } from 'mobx-react-lite';

const App = () => {

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="private library"/>

      <Router>     
          <NavBar />
          <Switch>
            <Route path="/add">
              <BookCreate />
            </Route>

            <Route path="/edit/:id" children={<BookEdit />} />
            <Route path="/details/:id" children={<BookDetails />} />

            <Route path="/">
              <BooksList />
            </Route>
          </Switch>     
      </Router>



    </div>
  );
}

export default observer(App);