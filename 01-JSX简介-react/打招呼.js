import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user){
    return user.firstName + ' ' + user.lastName; 
}

const user = {
    firstName:'Harry',
    lastName:'Potter'
};

const element = (
    <h1>Hello, {formatName(user)}</h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
)