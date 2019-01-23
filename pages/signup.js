import styled from 'styled-components';

import SignupForm from '../components/SignupForm';
import SigninForm from '../components/SigninForm';

const Columns = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Signup = (props) => {
  return (
    <Columns>
      <SignupForm />
      <SigninForm />
    </Columns>
  );
};

export default Signup;
