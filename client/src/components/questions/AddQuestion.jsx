import React from 'react';

class AddQuestion extends React.Component {
  render() {
    return (
      <div className = {this.props.addQuestionModalOpen ? 'modal display-block' : 'modal display-none'}>
        <form>
          <div className='add-form-container'>
            <label htmlFor='your-question'><b>Your Question</b></label>
            <br />
            <textarea id='your-question' name='your-question' className='form-input' maxlength='1000' required />
            <br />
            <label htmlFor='your-nickname'><b>What is Your Nickname</b></label>
            <br />
            <input type='text' id='your-nickname' name='your-nickname' className='form-input' maxlength='60' required />
            <br />
            <label htmlFor='your-email'><b>Your Email</b></label>
            <br />
            <input type='text' id='your-email' name='your-email' className='form-input' maxlength='60' required />
            <br />
            <button type='button' onClick={this.props.toggleAddQuestionModal}>Submit Question</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddQuestion;