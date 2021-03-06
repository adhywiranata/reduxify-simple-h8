import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { addUser } from '../actions';
import FormSection from '../components/FormSection';

import styles from './formStyles';

const initialState = {
  name: '',
  username: '',
  email: '',
  description: '',
  isSubmitted: false,
};

class UserFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange(e) {
    const updatedState = {};
    updatedState[e.target.name] = e.target.value;
    this.setState(updatedState);
  }

  render() {
    return (
      <div style={styles.addFormContainer}>
        { (this.state.isSubmitted && this.props.isUpdated) && <Redirect to={{
          pathname: '/users',
        }}/> }
        <h3>ADD NEW USER</h3>
        { this.props.updateError && <span style={{ color: 'red'}}>{  this.props.updateDataErrorMessage }</span> }
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addUser(this.state);
            this.setState({ ...initialState, isSubmitted: true });
          }}
          style={styles.addForm}
        >
          <FormSection
            label={'Name'}
            type={'text'}
            name={'name'}
            value={this.state.name}
            handleChange={this.handleChange.bind(this)}
          />
          <FormSection
            label={'Username'}
            type={'text'}
            name={'username'}
            value={this.state.username}
            handleChange={this.handleChange.bind(this)}
          />
          <FormSection
            label={'Email'}
            type={'text'}
            name={'email'}
            value={this.state.email}
            handleChange={this.handleChange.bind(this)}
          />
          <FormSection
            label={'Description'}
            type={'text'}
            name={'description'}
            value={this.state.description}
            handleChange={this.handleChange.bind(this)}
          />
          <input type="submit" value="Add User" style={styles.submitBtn} />
        </form>
      </div>
    );
  };
}

const mapStateToProps = ({ userData }) => {
  const { isUpdated, updateError, updateDataErrorMessage } = userData;
  return {
    isUpdated,
    updateError,
    updateDataErrorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (newUser) => dispatch(addUser(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFormContainer);
