// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showFirstName = () => {
    const {firstName} = this.state
    this.setState({firstName: !firstName})
  }

  showLastName = () => {
    const {lastName} = this.state
    this.setState({lastName: !lastName})
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="medium-container">
            <div className="sub-card-container">
              <button
                className="button"
                type="button"
                onClick={this.showFirstName}
              >
                Show/Hide FirstName
              </button>
              <div className="co-measure">
                {firstName ? (
                  <div className="name-card">
                    <p className="name">Joe</p>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="sub-card-container">
              <button
                className="button"
                type="button"
                onClick={this.showLastName}
              >
                Show/Hide LastName
              </button>
              <div className="co-measure">
                {lastName ? (
                  <div className="name-card">
                    <p className="name">Jonas</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
