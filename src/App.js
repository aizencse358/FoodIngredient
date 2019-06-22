import React ,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Inputlink from './components/Inputlink/Inputlink';
import Foodrecognition from './components/Foodrecognition/Foodrecognition';
import Clarifai  from 'clarifai';

const app = new Clarifai.App({
apiKey : '56e55f87cf194fa497aa8f513c2a3fd3'
});

class App extends Component {
	constructor(){
		super();
		this.state = {
			input:'',
			imageurl:'',
			foods:[]
		}
	}

oninputchange = (event) =>{
	this.setState({input:event.target.value})
}

onbuttonsubmit = () =>{
	this.setState({imageurl:this.state.input})
	app.models
    .predict(
      Clarifai.FOOD_MODEL,
     this.state.input)
    .then(response => {
    	const results = response.outputs[0].data.concepts
    	this.setState({foods:response.outputs[0].data.concepts});
    	console.log(this.state.foods)
    
    })
    .catch(err =>console.log(err));
}

render(){	
  return (
    <div className="App">
     <Navigation />
     <Inputlink oninputchange={this.oninputchange} onbuttonsubmit = {this.onbuttonsubmit}/>
     <Foodrecognition imageurl={this.state.imageurl} foods={this.state.foods}/>
    </div>
  );
}
}

export default App;
