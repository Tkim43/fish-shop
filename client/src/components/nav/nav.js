import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './nav.scss';
import SideNav from './side_nav';

class Nav extends Component{
    state = {
        common: [
            {
                text: 'Home',
                to: '/'
            },
            {
                text: 'Shop',
                to: '/products'
            }
        ],
        auth: [
            {
                text: '0rders',
                to: '/account/orders'
            },
            {
                text: 'Profile',
                to: '/account'
            }
        ],
        nonAuth:[
            {
                text: 'Sign In',
                to: '/account/sign-in'
            },
            {
                text: 'Sign Up',
                to: '/account/sign-up'
            }
        ]
    }
    getSideNavRef(e){
        console.log(e);
    }
    renderSignOut(){
        return <button className="btn waves-effect waves-light blue" onClick ={()=> console.log("sign out click")}>Sign Out</button>
    }
    buildLink(link){
        return(
            <li key ={link.to}>
                <Link to={link.to}>{link.text}</Link>
            </li>

        )
    }
    renderLinks = () => {
        const auth = true;
        let authLinks = [];
        const {auth: navAuth, common, nonAuth} = this.state;
        const commonLinks = common.map(this.buildLink);

        if(auth){
            authLinks = navAuth.map(this.buildLink);
            authLinks.push(<li key="/sign-out">{this.renderSignOut()}</li>)
        } else{
            authLinks = nonAuth.map(this.buildLink);
        }

        console.log("auth Links:", authLinks);
        // concatenates two arrays together
        return [...commonLinks, ...authLinks];
    }
    render(){
        return(
            <Fragment>
            <nav className="blue darken-3">
            <div className="nav-wrapper">
                <Link className="brand-logo" to="/">Fish Shop</Link>
                <Link className="sidenav-trigger" to="#" data-target="side-nav">
                    <i className="material-icons">menu</i>
                </Link>
                <ul className="right hide-on-med-and-down">
                    {this.renderLinks()}
                </ul>
            </div>
            </nav>
            <SideNav renderLinks={this.renderLinks}/>
            </Fragment>
            
        );
    }
}

export default Nav;