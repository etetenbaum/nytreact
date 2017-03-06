// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router');

// Include the Query and Results componens
var Query = require('./Search/Query');
var Results = require('./Search/Results');

// Include the Helper (for the query)
var helpers = require('../utils/helpers');

// Create the Main component
var Search = React.createClass({

	// Here we set the initial state variables
	getInitialState: function(){
		return { 
			queryTerm: "",
			startYear: "",
			endYear: "",
			results: {}
		}
	},


	componentDidUpdate: function(prevProps, prevState){
		console.log("COMPONENT UPDATED");
		console.log(this.state.queryTerm);
		console.log(this.state.startYear);
		console.log(this.state.endYear);

		console.log("Previous State", prevState);

		
		if (this.state.queryTerm != "" && (prevState.queryTerm != this.state.queryTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear))
		{
			helpers.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear)
				.then(function(data){
					if (data != this.state.results)
					{
						this.setState({
							results: data
						})		
					}

				// console.log("RESULTS", results)
				// console.log("DATA", data)

				// This code is necessary to bind the keyword "this" when we say this.setState 
				// to actually mean the component itself and not the runQuery function.
				}.bind(this))			
		}
	},

	// This function will be passed down into children components so they can change the "parent"
	setQuery: function(newQuery, newStart, newEnd){
		console.log("TEST");
		this.setState({
			queryTerm: newQuery,
			startYear: newStart,
			endYear: newEnd
		})
	},

	//*Render the function
	render: function(){
		console.log("Render Results", this.state.results)

		return(

			<div className="main-container"> 

				<Query updateSearch={this.setQuery} />

				{/*Note how we pass in the results into this component*/}
				<Results results={this.state.results}/>

			</div>

		)
	}
});

// Export the module back to the route
module.exports = Search;