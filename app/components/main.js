// Include React and React-Router dependencies
var React = require('react');
var Router = require('react-router')

// Create the Main component
var Main = React.createClass({

	render: function(){

		return(
			<div className="main-container">


				<div className="container">
					<nav className="navbar navbar-default" role="navigation">
						<div className="container-fluid">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a className="navbar-brand" href="#">NYT-React</a>
							</div>
					
							<div className="collapse navbar-collapse navbar-ex1-collapse">
								<ul className="nav navbar-nav navbar-right">
									<li><a href="#/search">Search</a></li>
									<li><a href="#/saved">Saved Articles</a></li>
								</ul>
							</div>
						</div>
					</nav>

					<div className="jumbotron">
						<img src="nytlogo.png" alt="nytlogo" className="center-block img-responsive"/>
						<h3 className="text-center">Search for and save articles of interest.</h3>
					</div>


					{this.props.children}

					<footer>
						<hr />
						<p className="pull-right"><i className="fa fa-copyright" aria-hidden="true"></i> Copyright jimmylado</p>
					</footer>
				</div>



			</div>
		)
	}
});

// Export the module back to the route
module.exports = Main;