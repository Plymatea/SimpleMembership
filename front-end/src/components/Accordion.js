import React from 'react';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types'

// var Accordion = React.createClass({

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startPosition: 0,
    }
  }

  handleTriggerClick = (position) => {
    this.setState({
      openPosition: (this.state.openPosition === position ? null : position)
    });    
  }

  render() {

    var nodes = this.props.children.map((node, index) => {

      var triggerWhenOpen = (node.props['data-trigger-when-open']) ? node.props['data-trigger-when-open'] : node.props['data-trigger'];
      // var triggerDisabled = (node.props['data-trigger-disabled']) || false;

      return (<Collapsible
                key={"Collapsible"+index}
                handleTriggerClick={this.handleTriggerClick}
                open={(this.state.openPosition === index)}
                trigger={node.props['data-trigger']}
                triggerWhenOpen={triggerWhenOpen}
                // triggerDisabled={triggerDisabled}  // I was receiving a weird console error from this. It doesn't seem to disable anything when i comment it out. 
                transitionTime={this.props.transitionTime}
                easing={this.props.easing}
                classParentString={this.props.classParentString}
                accordionPosition={index}>{node}</Collapsible>);
    });

    return (<div>{nodes}</div>);
  }

};

  //Set validation for prop types
  Accordion.propTypes = {
    transitionTime: PropTypes.number,
    easing: PropTypes.string,
    startPosition: PropTypes.number,
    classParentString: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.shape({
      props: PropTypes.shape({
        'data-trigger': PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element
        ]).isRequired,
        'data-triggerWhenOpen': PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element
        ]),        
        'data-triggerDisabled': PropTypes.bool,
      })
    }))
  }


