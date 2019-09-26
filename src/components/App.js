import React from 'react';
import {Router, Route, } from 'react-router-dom';
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "./../history";

function App() {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header/>
          <Route path='/' exact component={StreamList}/>
          <Route path='/stream/new' exact component={StreamCreate}/>
          <Route path='/stream/edit/:id' exact component={StreamEdit}/>
          <Route path='/stream/delete' exact component={StreamDelete}/>
          <Route path='/stream/Show' exact component={StreamShow}/>
        </div>
      </Router>
    </div>
  );
}

export default App;

// client id
// 553514993990-iamo6s8rbvtslq77r460ninb3qvvd2fk.apps.googleusercontent.com
