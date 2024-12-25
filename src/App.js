import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ShowWords from './components/ShowWords'
import './App.css'

// Replace your code here
class App extends Component {
  state = {addInput: '', wordsList: [], addClicked: false}

  changeInput = event => {
    this.setState({addInput: event.target.value})
  }

  addInputToList = event => {
    const {addInput} = this.state
    const word = {id: uuidv4(), word: addInput}

    event.preventDefault()
    this.setState(prev => ({
      wordsList: [...prev.wordsList, word],
      addClicked: true,
      addInput: '',
    }))
  }

  render() {
    const {wordsList, addClicked, addInput} = this.state

    return (
      <div className="bg-container">
        <div className="card-bg">
          <div>
            <div className="boss-container">
              <h1 className="boss-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            <div className="result-container">
              {addClicked ? (
                <ul className="ul-list">
                  {wordsList.map(item => (
                    <ShowWords details={item} key={item.id} />
                  ))}
                </ul>
              ) : (
                <div className="image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                    alt="no user inputs"
                    className="no-inputs"
                  />
                </div>
              )}
            </div>
          </div>

          <form className="counter-bg" onSubmit={this.addInputToList}>
            <h1 className="counter-heading">Character Counter</h1>
            <div className="input-container">
              <input
                type="text"
                className="text-input"
                placeholder="Enter the Characters here"
                onChange={this.changeInput}
                value={addInput}
              />
              <button className="add-button" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App
