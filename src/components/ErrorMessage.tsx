import styled from 'styled-components';

const ErrorContainer = styled.div`
  color: #d73a49;
  background-color: #ffebee;
  padding: 15px;
  border-radius: 5px;
  margin: 20px 0;
  text-align: center;
`;

export const ErrorMessage = ({ message }: { message: string }) => (
  <ErrorContainer>{message}</ErrorContainer>
);