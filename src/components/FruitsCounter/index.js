import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMangoEat = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onBananaEat = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="outer-container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate <span className="fruit">{mangoCount}</span> mangoes{' '}
            <span className="fruit">{bananaCount}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit-align">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <div>
                <button
                  className="eat-mango-button"
                  type="button"
                  onClick={this.onMangoEat}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-align">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <div>
                <button
                  className="eat-banana-button"
                  type="button"
                  onClick={this.onBananaEat}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
