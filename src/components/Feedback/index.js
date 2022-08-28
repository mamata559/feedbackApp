// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedBackGiven: false}

  emojiResponse = () => this.setState({feedBackGiven: true})

  returnToCustomerSupport = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="emoji-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-display-container">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button" className="emoji-button">
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-image"
                  onClick={this.emojiResponse}
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  returnToThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you">Thank You!</h1>
        <p className="thank-you-para">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {feedBackGiven} = this.state

    return (
      <div className="bg-container">
        <div className="customer-support">
          {feedBackGiven
            ? this.returnToThankYou()
            : this.returnToCustomerSupport()}
        </div>
      </div>
    )
  }
}

export default Feedback
