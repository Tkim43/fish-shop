import React, {Component} from 'react';

class SideNav extends Component{
    componentDidMount(){
        console.log("side Nav ref", this.sideNav);
        this.instance = M.Sidenav.init(this.sideNav);
    }
    render(){
        return (
            // ref takes a call back function and saves 
            // the property onto the class and gives you a 
            // a full dom refernce. Best 
            // if the reference needs to be manipulated
            <ul ref={(e) => this.sideNav = e} className="sidenav" id="side-nav">
                {this.props.renderLinks()}
            </ul>
        )
    }
}

export default SideNav;
