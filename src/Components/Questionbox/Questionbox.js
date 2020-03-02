import React from 'react'
import './Questionbox.css'

class Questionbox extends React.Component{
  state = {
    optionList: this.props.options,
    isClicked: false
  }

  clickHandler = (e) => {
    const {computeScore} = this.props
    this.setState({
       optionList: [e.target.value],
       isClicked: true
      })

    computeScore(e.target.value)
  }
    render(){
        const {question, options, key, computeScore} = this.props
        const {isClicked} = this.state
        return(
          <div className='Questionbox'>
           <div className='Questions mb-2'>
             <h3 className='question-font'>{question}</h3>
             {this.state.optionList.map((item,index) => {
               return(
                 <button key={index} type='click' className={!isClicked ? 'mr-3 mt-2 btn btn-primary' : 'mr-3 mt-2 btn btn-success'} value={item} onClick={this.clickHandler}>
                   {item}
                 </button>
               )
             })}
           </div>
          </div>
        )
    }
}

export default Questionbox;