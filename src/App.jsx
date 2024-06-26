import React from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

const App = () => {

  return (
    <main className="react-calculator">
      <Result value="0"/>
      <Numbers onClickNumber={number => 
        {
          console.log("click number", number)
        }
      }/>
      <Functions 
        onContentClear={()=>
          console.log('content clear')
        }
        onDelete={()=>
          console.log('on delete')
        }  
      />
      <MathOperations 
        onClickOperation={operation => 
          console.log(operation)
        }
        onClickEqual={equal => 
          console.log(equal)
        }
      />
    </main>
  )
}

export default App