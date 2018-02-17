import * as React from 'react';
import './App.css';
import { http } from '../../http-api';
import logo from '../../assets/img/icons/48x48.png'
import Login from '../Login/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null
    }
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile = async () => {
    try {
      const { data } = await http.get('user/profile');
      this.setState({
        profile: data
      });
    } catch (error) {
      this.setState({
        profile: null
      });
      console.error('getProfile', error);
    }
  }

  login = async (values) => {
    try {
      await http.post('user/login', values);
      this.getProfile();
    } catch (error) {
      console.error('logIn', error);
    }
  }

  logout = async () => {
    try {
      await http.get('user/logout');
      this.setState({
        profile: null
      });
    } catch (error) {
      console.error('logOut', error);
    }
  }

  render() {
    const profile = this.state.profile === null ? <h2>привет, гость</h2> : (
      <div className="layout-row layout-align-space-around-center flex-10">
        <h2>{this.state.profile.login}</h2>
        <button onClick={() => this.logout()}>Выход</button>
      </div>
    ); 
    const main = this.state.profile === null ? <Login login={this.login} /> : <h1>Hello</h1>;
    return (
      <div className="layout-fill layout-column ">
        <header className="layout-row layout-align-start-center">
          <div className="flex layout-row layout-align-start-center">
            <img src={logo} alt="logotyp" />
          </div>
          {profile}
        </header>
        <main className="layout-column flex layout-align-center-center">
          {main}
        </main>
      </div>
    );
  }
}

export default App;
