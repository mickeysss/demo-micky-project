
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";



/*let rerenderEntireTree = (state) => {*/
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>


{/*           <ContextStore.Provider value={store}>
            <App state={state}
                 dispatch={store.dispatch.bind(store)} store = {store}

newPostText={store._state.profilesPage.newPostText}
addPosts={store.addPosts.bind(store)}
updatedNewText={store.updatedNewText.bind(store)}
           </ContextStore.Provider>*/}
        </BrowserRouter>, document.getElementById('root'))
// }
//
// rerenderEntireTree(store.getState())
//
// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })




reportWebVitals();
