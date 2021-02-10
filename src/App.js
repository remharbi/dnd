import React, { Component } from 'react';
import './App.css';
import './sass/main.scss';
import Card from './components/Card';
import Logo from './assets/logo/d&d_logo.png';
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            char: window.localStorage.getItem('char'),
            race: window.localStorage.getItem('race'),
            rel: window.localStorage.getItem('rel'),
            backstory: window.localStorage.getItem('backstory'),
            ability: window.localStorage.getItem('ability'),
            inventory: window.localStorage.getItem('inventory'),
            health: window.localStorage.getItem('health'),
            resource: window.localStorage.getItem('resource'),
            mainwep: window.localStorage.getItem('mainwep'),
            drip: window.localStorage.getItem('drip'),
            showAll: true,
        };
    }

    handleChange = (e) => {
        window.localStorage.setItem(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleShow = (value) => {
        this.setState({
            showAll: value,
        });
    };

    render() {
        return (
            <div className='home-container text-center'>
                <div className='row gx-0'>
                    <div className='col-12'>
                        <img />
                    </div>
                </div>

                <div className='row gx-0 pt-5'>
                    <div className='col-12 d-flex justify-content-center'>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='col-12 my-4'>
                        <button className='mx-4' onClick={() => this.handleShow(true)}>
                            Show
                        </button>
                        <button onClick={() => this.handleShow(false)}>
                            Hide
                        </button>
                    </div>
                </div>
                <div className='row cards gx-0'>
                    <Card
                        title='Character Name'
                        value={this.state.char}
                        placeholder='Name'
                        name='char'
                        handleChange={this.handleChange}
                        showAll={this.state.showAll}
                    />
                    <Card
                        title='Character Race'
                        value={this.state.race}
                        placeholder='Race'
                        name='race'
                        handleChange={this.handleChange}
                        showAll={this.state.showAll}
                    />
                    <Card
                        title='Religion'
                        value={this.state.rel}
                        placeholder='Religion'
                        name='rel'
                        handleChange={this.handleChange}
                        showAll={this.state.showAll}
                    />
                    <Card
                        title='Back Story'
                        value={this.state.backstory}
                        placeholder='Back Story'
                        name='backstory'
                        handleChange={this.handleChange}
                        showAll={this.state.showAll}
                    />
                    <Card
                        title='Class and Abilities'
                        value={this.state.ability}
                        placeholder='Ability'
                        name='ability'
                        handleChange={this.handleChange}
                        showAll={this.state.showAll}
                    />
                    <Card
                        title='Inventory'
                        value={this.state.inventory}
                        placeholder='Inventory'
                        name='inventory'
                        handleChange={this.handleChange}
                        showAll={this.state.showAll}
                    />
                    <Card
                        title='Health'
                        value={this.state.health}
                        placeholder='Health'
                        name='health'
                        handleChange={this.handleChange}
                        showAll={this.state.showAll}
                    />
                    <Card
                        title='Resources'
                        value={this.state.resource}
                        placeholder='Resources'
                        name='resource'
                        handleChange={this.handleChange}
                        showAll={this.state.showAll}
                    />
                    <Card
                        title='Weapon(s)'
                        value={this.state.mainwep}
                        placeholder='Weapon'
                        name='mainwep'
                        handleChange={this.handleChange}
                        showAll={this.state.showAll}
                    />
                    <Card
                        title='Drip Color Scheme'
                        value={this.state.drip}
                        placeholder='Drip'
                        name='drip'
                        handleChange={this.handleChange}
                        showAll={this.state.showAll}
                    />
                </div>
            </div>
        );
    }
}

export default App;
