import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import quizService from './quizService/index'
import Questionbox from './Components/Questionbox/Questionbox'
import Result from './Components/Result/Result'

class App extends React.Component {

  state ={
    questionBank: [],
    score: 0,
    responses: 0
  }
  
  computeScore = ( currentResponse, rightAnswer,) => {
     if(rightAnswer === currentResponse){
       this.setState({score: this.state.score + 1})
     }

        this.setState({
          responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
  }

  getQuestion = () =>{
    quizService().then(q => {
       this.setState({
         questionBank: q
       })
   })
  }

  componentDidMount() {
    this.getQuestion()
  }

  playAgain = () => {
  this.getQuestion()
  this.setState({
    score: 0,
    responses: 0
  })
  }

  render(){
    const {questionBank,responses,score} = this.state
    console.log('score', this.state.score)
    console.log('responses', this.state.responses)
  return (
    <div>
     <Header/>
      <div className='container mt-5 mb-5'>
        {questionBank.length > 0 && responses < 5 && questionBank.map(({question,options,rightAnswer,questionId}) => (
            <Questionbox question={question} options={options} rightAnswer={rightAnswer} key={questionId}
             computeScore = {(answer) => this.computeScore(answer,rightAnswer) }
            />
        ))}
        {responses === 5 ? <Result score={score} playAgain={this.playAgain}/>: null}
      </div>
    </div>
  );
  }
}

export default App;
       
