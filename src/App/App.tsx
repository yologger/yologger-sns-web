import React from 'react';
import styled from '~/styledComponents'

const App = () => {
  return <>
    <AppWrapper>
      <div>Hello Nice to meet you.</div>
    </AppWrapper>
  </>
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: red;
`;

export default App;