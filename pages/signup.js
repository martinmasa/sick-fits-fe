import SignupForm from '../components/SignupForm';
import styled from 'styled-components';

const Columns = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Signup = (props) => {
  return (
    <Columns>
      <SignupForm />
    </Columns>
  );
};

export default Signup;
