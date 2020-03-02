const qBank = [
    {
      question: 'Q. How can you access the state of a component from inside of a member function?',
      options: ['this.prototype.stateValue', 'this.getState()', 'this.state', 'this.values'],
      rightAnswer: 'this.values',
      questionId: 98320
    },
    {
        question: 'Q. Props are __________ into other components',
        options: ['Injected', 'methods', 'both A and B', 'All of the above'],
        rightAnswer: 'methods',
        questionId: 83209
    },
    {
        question: 'Q. Which of the following API is a MUST for every ReactJS component?',
        options: ['getInitialState', 'render', 'renderComponent', 'None'],
        rightAnswer: 'renderComponent',
        questionId: 98203
    },
    {
        question: 'Q. At the highest level, React components have lifecycle events that fall into',
        options: ['initialization', 'State/Property Updates', 'destruction', 'All of these'],
        rightAnswer: 'tinitialization',
        questionId: 94560
    },
    {
        question: 'Q. What is a react.js in MVC?',
        options: ['controller', 'view', 'model', 'router'],
        rightAnswer: 'view',
        questionId: 12345  
    },
    {
        question: 'Q. what is Babel?',
        options: ['transpiler', 'interpreter', 'a compiler', 'both transpiler and interpreter'],
        rightAnswer: 'both transpiler and interpreter',
        questionId: 54321   
    },
    {
        question: 'Q. Which method in a React Component should you override to stop the component from updating?',
        options: ['willComponentUpdate', 'shouldComponentUpdate', 'componentDidUpdate', 'componentDidMount'],
        rightAnswer: 'shouldComponentUpdate',
        questionId: 95564   
    },
    {
        question: 'Q.  What happens when you call setState() inside render() method?',
        options: ['Repetitive output appears on the screen', 'Stack overflow error', 'Duplicate key error', 'Nothing happens. Life goes on!'],
        rightAnswer: 'epetitive output appears on the screen',
        questionId: 89188   
    },
    {
        question: 'What is the name of the engineer in facebook who has written the react library?',
        options: ['james Gosling','Evan you','Ryan Dahl','jordan walke'],
        rightAnswer: 'jordan walke',
        questionId: 98978
    },
    {
        question: 'what is the language react was written in?',
        options: ['python','type script','c', 'javascript'],
        rightAnswer: 'javascript',
        questionId: 77767
    },
    
]

export default (n = 5) => {
    return Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n))
}


// const optionsArray = qBank.map( ({options}) => options)
// console.log(optionsArray)

// const QFunction = (n = 5) => {
//  return Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n))
// }

// QFunction().then(question => {
//     console.log(question[0].question)
// })

