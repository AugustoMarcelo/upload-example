import React from 'react';

import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload';
import FileList from './components/FileList';

function App() {
  return (
    <Container>
      <Content>
        <Upload />
        <FileList />
      </Content>
      <GlobalStyle />
    </Container>
  );
}

export default App;
