import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

const SideNav = styled.div`
    height: 100%;
    width: 25%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: black;
    overflow-x: hidden;
    padding-top: 20px;
`

const SideNavA = styled.a`
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
`

class Sidebar extends Component {
    render() {
        return(
            <SideNav>
                <SideNavA href="#">Test</SideNavA>
                <SideNavA href="#">Test</SideNavA>
                <SideNavA href="#">Test</SideNavA>
                <SideNavA href="#">Test</SideNavA>
                <SideNavA href="#">Test</SideNavA>
            </SideNav>
        )
    }
}

export default Sidebar;