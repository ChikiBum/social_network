import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App(  ) {
   return (
    <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
          <div className='app-wrapper-content'>
            {/* <Route path='/profile' render={ () => <Profile store={ store }/>}/>
            <Route path='/dialogs' render={ () => <DialogsContainer store={ store } state={dialogsPage} dispatch={dispatch} />}/> */}
            <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
            <Route path='/dialogs' render={ () => <DialogsContainer />}/>

            <Route path='/users' render={ () => <UsersContainer />}/>

            <Route path='/news' render={ () => <News />}/>
            <Route path='/music' render={ () => <Music />}/>
            <Route path='/settings' render={ () => <Settings />}/>
          </div>
    </div>
 
  );
}

export default App;
