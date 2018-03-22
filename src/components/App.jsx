import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppToolbar from './AppToolbar';


function App() {
    return (
        <MuiThemeProvider>
            <AppToolbar/>

        </MuiThemeProvider>
    );
}

export default App;
