import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppToolbar from './AppToolbar/AppToolbar';
import './App.css';

function App() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <AppToolbar/>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
