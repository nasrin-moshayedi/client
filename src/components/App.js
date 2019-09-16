import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

function App() {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <div>
          <Header/>
          <Route path='/' exact component={StreamList}/>
          <Route path='/stream/new' exact component={StreamCreate}/>
          <Route path='/stream/edit' exact component={StreamEdit}/>
          <Route path='/stream/delete' exact component={StreamDelete}/>
          <Route path='/stream/Show' exact component={StreamShow}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

// client id
// 553514993990-iamo6s8rbvtslq77r460ninb3qvvd2fk.apps.googleusercontent.com
