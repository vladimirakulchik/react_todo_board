import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppToolbar from './AppToolbar/AppToolbar';
import Column from './Column/Column';
import './App.css';
import './Scrollbar.css';

function App() {
    return (
        <MuiThemeProvider>
            <div className="app">
                <div className="header">
                    <AppToolbar />
                </div>

                <div className="content">
                    <div className="board scrollbar">
                        <Column />
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
