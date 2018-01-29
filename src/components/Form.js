import React from 'react';

const Form = props => {
  const handleSubmit = event => {
    event.preventDefault();
    const text = event.target.text.value;
    props.addTodo(text);
    event.target.text.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="input-field col s6">
          <input id="text" name="text" type="text" className="validate" />
          <label for="text">Enter todo Item</label>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
