// ------------------------------------------------------------------------------------
const JSX = <h1>Hello JSX!</h1>;
// ------------------------------------------------------------------------------------
const JSX = <div>
<h1></h1>
<p></p>
<ul>
<li></li>
<li></li>
<li></li>
</ul>
</div>
// ------------------------------------------------------------------------------------
const JSX = (
    <div>
      {/*This is how we add comments in REACT*/}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );
// ------------------------------------------------------------------------------------
const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Change code below this line
   ReactDOM.render(JSX,document.getElementById('challenge-node') )
// ------------------------------------------------------------------------------------
//in JSX we can no longer use the word class to define HTML classes. This is because class is a reserved word in JavaScript. Instead, JSX uses className.
const JSX = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );
// ------------------------------------------------------------------------------------
// n JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and 
// every element must be closed. The line-break tag, for example, must always be written as <br /> in order
//  to be valid JSX that can be transpiled. A <div>, on the other hand, can be written as <div /> or 
/* <div></div>. The difference is that in the first syntax version there is no way to include anything i
// n the <div /> */
const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br/>
      <p>Be sure to close all tags!</p>
      <hr/>
    </div>
  );
// ------------------------------------------------------------------------------------
const MyComponent = function() {
    // Change code below this line
    return (
      <div className='demoClass'>Hello There!</div>
    );
    // Change code above this line
  }
// ------------------------------------------------------------------------------------
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // change code below this line
      return (
        <div>
         <h1>Hello React!</h1>
        </div>
      );
      // change code above this line
    }
  };
// ------------------------------------------------------------------------------------
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          <ChildComponent />
        </div>
      );
    }
  }
// ------------------------------------------------------------------------------------
const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* change code below this line */ }
        <TypesOfFruit/>
        { /* change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* change code below this line */ }
            <Fruits/>
          { /* change code above this line */ }
        </div>
      );
    }
  };
// ------------------------------------------------------------------------------------
class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          <NonCitrus />
          <Citrus />
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
        </div>
      );
    }
  };
// ------------------------------------------------------------------------------------
class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* change code below this line */}
          <Fruits />
          <Vegetables />
          {/* change code above this line */}
        </div>
      );
    }
  };
  
  // change code below this line
  ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
// ------------------------------------------------------------------------------------
// change code below this line
class MyComponent extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
            <div id="challenge-node">
                   <h1>My First React Component!</h1>
            </div>
      );
    }
  };
  ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));
// ------------------------------------------------------------------------------------
const CurrentDate = (props) => {
    return (
      <div>
        <p>The current date is: {props.date}</p>
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          <CurrentDate date={Date()} />
        </div>
      );
    }
  };
// ------------------------------------------------------------------------------------
