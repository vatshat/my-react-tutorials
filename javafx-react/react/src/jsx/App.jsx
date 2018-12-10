import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
            data: this.getInitial(),
      }
      this.getInitial;
      this.updateState = this.updateState.bind(this);
   };

   getInitial() {
      // https://stackoverflow.com/questions/35082047/call-external-javascript-function-from-react-components
      let initial = window.getJS();
      return initial; 
   }

   updateState(event) {
      this.setState({data: event.target.value});
   }

   testReactJS(testing){
         this.setState({data: testing});
         return 'test 2';
   }
   
   render() {
      // alternative https://brettdewoody.com/accessing-component-methods-and-state-from-outside-react/
      window.ourComponent = this;

      return (
            <div>
                  <Content myDataProp = {this.state.data} updateStateProp = {this.updateState}></Content>
            </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
         </ div>
      );
   }
}
export default App;