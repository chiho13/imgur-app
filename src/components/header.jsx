var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var Actions = require('../actions');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');

// var Button = require('react-bootstrap').Button;
// var Countdown = require('react-the-final-countdown');
// <Countdown min = {1} msg="Close the fridge" />

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  render: function() {
    return <Nav>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                   <Link to="/" >
                      take a break
                  </Link>
                </Navbar.Brand>
                 <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  {this.renderTopics()}
                
                </Nav>
     
               </Navbar.Collapse>
            </Navbar>
  
          </Nav>

  },
  renderTopics: function() {
    return this.state.topics.slice(2, 7).map(function(topic) {
      return <li key={topic.id}>
        <Link activeClassName="active" to={"topics/" + topic.id}>
          {topic.name}
        </Link>
      </li>
    })
  },
  onChange: function(event, topics) {
    this.setState({
      topics:topics
    })
  }
});
