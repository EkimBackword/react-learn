import * as React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      form: {
        login: 'test',
        password: 'test123'
      }
    }
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile = () => {
    fetch('http://localhost:35123/user/profile', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include'  
          })
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw res;
            }
          })
          .then(data => {
            this.setState({
              profile: data
            });
          })
          .catch(error => {
            this.setState({
              profile: null
            });
            console.error('getProfile', error);
          });
  }

  login = (event) => {
    event.preventDefault();
    fetch('http://localhost:35123/user/login', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(this.state.form),
            credentials: 'include',
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw res;
            }
          })
          .then(res => this.getProfile())
          .catch(error => {
            console.error('logIn', error);
          });
  }

  logout = (event) => {
    event.preventDefault();
    fetch('http://localhost:35123/user/logout', {
            credentials: 'include',
            method: 'GET',
            mode: 'cors'
          })
          .then(res => {
            this.setState({
              profile: null
            });
          })
          .catch(error => {
            console.error('logOut', error);
          });
  }

  handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
          form: {
            [name]: value
          }
      });
  }

  render() {
    const profile = this.state.profile !== null ? <p>{this.state.profile.login}</p> : <p>привет, гость</p>;
    return (
        <form onSubmit={this.login}>
          {/* <label>
              Логин:
              <input name="login"
                  type="text"
                  value={this.state.form.login}
                  onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
              Пароль:
              <input name="password"
                  type="text"
                  value={this.state.form.password}
                  onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit">Вход</button> */}
          <div>
            <button name="login" onClick={this.login}>Вход</button>
          </div>
          <div>
            <h1>Профиль</h1>
            {profile}
          </div>
          <div>
            <button name="logout" onClick={this.logout}>Выход</button>
          </div>
        </form>
    );
  }
}

export default App;
