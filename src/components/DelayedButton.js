import React from 'react'

class DelayedButton extends React.Component {
  handleClick = event => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    })
  }
}