import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";

import OwnRoot from './containers/ownRoot';
import store from './core/store';
import {AppContainer} from 'react-hot-loader';
import App from "./App";

ReactDOM.render(
    <AppContainer>
        <OwnRoot
            store={store}
            App={App}
        />
    </AppContainer>, document.getElementById("app"));
