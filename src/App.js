// import './App.css';
// import React from 'react'
// import { connect } from 'react-redux'

// import { increment, decrement } from './actions'

// const App = ({ message, counter, dispatch }) => (
//   <div className="container">
//     <div className="columns column is-12">
//       <h1>Counter : {counter}</h1>
//     </div>

//     <div className="buttons">
//       <button
//         onClick={() => dispatch(increment(1))}
//         className="button is-primary"
//       >
//         +1
//       </button>
//       <button onClick={() => dispatch(increment(2))} className="button is-link">
//         +2
//       </button>
//       <button onClick={() => dispatch(increment(3))} className="button is-info">
//         +3
//       </button>
//     </div>

//     <div className="buttons">
//       <button
//         onClick={() => dispatch(decrement(1))}
//         className="button is-primary"
//       >
//         -1
//       </button>
//       <button onClick={() => dispatch(decrement(2))} className="button is-link">
//         -2
//       </button>
//       <button onClick={() => dispatch(decrement(3))} className="button is-info">
//         -3
//       </button>
//     </div>
//   </div>
// )

// const mapStateToProps = state => ({
//   message: 'This is message from mapStateToProps',
//   counter: state.counters || 0
// })

// const AppWithConnect = connect(mapStateToProps)(App)

// export default AppWithConnect

import { connect } from 'react-redux'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import FormArea from './components/FormArea';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <div className="container">
        <FormArea />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
})

const AppWithConnect = connect(mapStateToProps)(App)

export default AppWithConnect