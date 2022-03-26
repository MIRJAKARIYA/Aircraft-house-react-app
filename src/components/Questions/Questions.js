import React from 'react';
import './Questions.css';
const Questions = () => {
    return (
        <div className='question-container'>
            <h1 style={{fontSize: '50px',color: 'navy'}}>Questions</h1>
            <div className='questions'>
                <h1>How React Works?</h1>
                <p className='answers'>
                    React is a Javascript library which is very efficient,declarative and flexible.React is used for building interactive Single Page Applications.React allows us to split the complex UI's into some small and isolated pieces of code which are called components.when we run a website which is made by react in the browser,react renders all the components in the website by converting the whole code into actual DOM.In this process at first react creats a virtual DOM which is a lightweight copy of the actual DOM object and stores it in the memory.If any change of data happens in the app then react creates a new virtual DOM again and compares it with the previously stored virtual DOM by the help of DIFF algorithm and finds out where the change occured.After finding the change react only updates the component where the change happened and renders it in the actual DOM without rewritting the whole DOM in the browser.The new virtual DOM is stored in place of the old one.This process happens on every change in the react app.This process is very fast and efficient and doesn't require any page reload.
                </p>
            </div>
            <div className='questions'>
                <h1>How useState Works?</h1>
                <p className='answers'>useState is a react hook which is a special type of function that allows us to add react state to function components.When we create websites using function components and realize that we need to do some changes in data depending on some conditions or something else then we use useState hook.When we use useState hook it returns a state variable in which we can store our data which can be changed and a special function to update that state variable with new data.The data in the state variable can be read and also can be write when required.Using useState function we can easily change any data very fast without any page reload which makes our website very efficient.The component which holds some state within itself is called stateful component on the other hand component without any state is called stateless component.</p>
            </div>
            <div className='questions'>
                <h1>what are the differences between props and state?</h1>
                <ul className='answers'>
                    <li>By using props we can pass data from one react component to other but using state we can only pass data within the component where it exists.</li>
                    <li>props are immutable which means if we pass any data using props then the data can't be changed after passing on the other hand  state is mutable which means we can change the data inside the state variable after passing it.</li>
                    <li>props data can only be read but can't be read on the other hand state is both read and write.</li>
                </ul>
            </div>
        </div>
    );
};

export default Questions;