import React from 'react';
import UserForm from '../../reusableComponents/UserForm';

export default props => {
  return (
    <UserForm
      method="create"
      title="Create User"
      subTitle="Please complete the following fields to update the user's info"
      {...props}
    />
  );
};
