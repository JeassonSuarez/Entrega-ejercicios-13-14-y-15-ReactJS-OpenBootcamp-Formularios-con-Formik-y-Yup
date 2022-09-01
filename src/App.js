import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting'
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './components/hooks/ejemplo1';
import Ejemplo2 from './components/hooks/ejemplo2';
import { ComponenteTres } from './components/hooks/ejemplo3';
import Ejemplo4 from './components/hooks/ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import { Father } from './components/container/father';
import OptionalRender from './components/pure/OptionalRender';
import LoginFormik from './components/pure/forms/LoginFormik';
import RegisterFormik from './components/pure/forms/RegisterFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* componente propio para realizar un saludo */}
        {/* <Greeting></Greeting> tambien es valido para ser usado */}
        {/* <Greeting name={'Jeasson'} />  */}
        {/* <GreetingF name={'Jeasson'} /> */}
        {/* <GreetingStyled name = { 'Jeasson' }/> */}
        {/* <Ejemplo1 /> */}
        {/* <Ejemplo2 /> */}
        {/* <ComponenteTres /> */}
        {/* <Ejemplo4 nombre={ 'Jeasson' }>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
      {/* </header> */}
      {/* Gestion de eventos */}
      {/* <Father /> */}

      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender /> */}

      {/* ejemplos  */}
      {/* <LoginFormik /> */}
      {/* <RegisterFormik /> */}

      {/* Proyecto final */}
      <TaskListComponent />
    </div>
  );
}

export default App;
