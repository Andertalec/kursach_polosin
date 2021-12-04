import React, { Component } from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from '../assets/modlogo.svg'
import Home from '../Pages/Home'
import { AboutSite } from '../Pages/AboutSite'
import { ImageGallery } from '../Pages/ImageGallery'
import News from '../Pages/News'
import Contacts from '../Pages/Contacts'
import ActualNews from '../Pages/ActualNews'

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <NavbarBrand href="/">
              <img
                src = { logo }
                height = '45'
                width = '50'
                className = 'd-inline-block align-center'
                alt = 'logo'
              /> Департамент військової освіти і науки Міністерства оборони України</NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className = 'mr-auto'></Nav>
              <Nav variant = 'tabs'>
                <Nav.Link href='/aboutSite'>Про сайт</Nav.Link>
                <Nav.Link href='/imageGallery'>Галерея картинок</Nav.Link>
                <Nav.Link href='/news'>Новини</Nav.Link>
                <Nav.Link href='/actualnews'>Актуальні новин</Nav.Link>
                <Nav.Link href='/contacts'>Контакти</Nav.Link>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/aboutSite' component={AboutSite}/>
            <Route exact path='/actualnews' component={ActualNews}/>
            <Route exact path='/imageGallery' component={ImageGallery}/>
            <Route exact path='/news' component={News}/>
            <Route exact path='/contacts' component={Contacts}/>
          </Switch>
        </Router>
      </>
    );
  }
}
