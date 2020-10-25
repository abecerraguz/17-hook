import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// Se envia la default Props por defecto
ReactDOM.render(<App initialNumber={100} />, document.getElementById('root'));
