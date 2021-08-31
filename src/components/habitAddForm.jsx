import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value= ''; //적었던거 초기화
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input 
          ref={this.inputRef}
          type="text" 
          class="add-input" 
          placeholder="Habit" 
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;