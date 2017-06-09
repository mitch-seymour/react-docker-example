import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      searchVisible: false
    }
  }
  
  toggleSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    });
  }
  
  render() {
    let searchClasses = ["search-container"];
    
    if (this.state.searchVisible) {
      searchClasses.push("active");
    }
    
    console.log(searchClasses);
    
    return (
        <div className="header">
          {/* title */}
          <span className="title">
            {this.props.title}
          </span>
        </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Wheel of time'
}

