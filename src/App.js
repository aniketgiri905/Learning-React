import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import ClassCounter from './components/ClassCounter';
import Greet from './components/greet';
import FuncClick from './components/FuncClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import RefsDemo from './components/RefsDemo';
import LifecycleA from './components/LifecycleA';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentinput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import Hower from './components/Hower';
import ClickCounterTwo from './components/ClickCounterTwo';
import User from './components/User';
import { Component } from 'react';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
    {/* <UserGreeting />
    <br/><br/> */}
    {/* <ParentComponent />
     <Welcome/>
     <ClassCounter/>
     <Greet name="Aniket" heroName="Akashay"/>
     <FuncClick />
     <br/>
     <ClassClick />
     <br/><br/>
     <EventBind /> */}
     {/* <NameList/> */}

     <br />
     {/* <Form /> */}
     
     {/* <LifecycleA/> */}
     {/* <RefsDemo/> */}
     {/* <FocusInput/> */}
     {/* <FRParentInput/> */}
     {/* <PortalDemo/> */}

     {/* <ClickCounter/>
     <Hower/>
     <br /><br />
     <ClickCounterTwo/> */}

     {/* <User render = {(isLogIn) => isLogIn ? 'Akash' : 'guest'}/> */}
      <UserProvider value = 'Aniket'>
        <ComponentC  />
      </UserProvider>
     
    </div>
  );
}

export default App;
