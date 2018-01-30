import React from 'react';

const Form = props => {
  const handleSubmit = event => {
    event.preventDefault();
    const text = event.target.text.value;
    const priority = event.target.priority.value;
    props.addTodo(text, priority);
    event.target.text.value = '';
    event.target.priority.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-field col s6">
          <input id="text" name="text" type="text" maxlength="40" required />
          <label htmlFor="text">Enter a To Do Item</label>
        </div>
        <div className="input-field col s6">
          <input id="priority" name="priority" type="number" min="1" max="5" required />
          <label htmlFor="priority">Priority(1 important - 5 less important)</label>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
