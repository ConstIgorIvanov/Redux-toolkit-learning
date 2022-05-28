import React from 'react';
import { useAppDispatch, useAppSelector } from '../hook';
import { setFirstName, setLastName } from '../features/state/stateSlice';

const ReduxState: React.FC = () => {
  const firstName = useAppSelector((state) => state.state.firstName);
  const lastName = useAppSelector((state) => state.state.lastName);
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      <h1>Redux Toolkit State Change</h1>
      <div className="input_container">
        <input
          placeholder="first name"
          value={firstName}
          onChange={(e) => dispatch(setFirstName(e.target.value))}></input>
        <input
          placeholder="last name"
          value={lastName}
          onChange={(e) => dispatch(setLastName(e.target.value))}></input>
      </div>
      <div className="name_container">
        <div className="name">
          <div>Name:</div>
          <div className="bold">{firstName}</div>
        </div>
        <div className="last_name">
          <div>LastName:</div>
          <div className="bold">{lastName}</div>
        </div>
      </div>
    </div>
  );
};

export default ReduxState;
