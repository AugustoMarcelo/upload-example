import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

export default function FileList() {
  return (
    <Container>
      <li>
        <FileInfo>
          <Preview src="https://uploadexampleclass.s3.amazonaws.com/ca183e4c0787730e2e9121f7022b5375-ccxp.jpg" />
          <div>
            <strong>profile.png</strong>
            <span>64kb <button onClick={() => {}}>Excluir</button></span>
          </div>
        </FileInfo>

        <div>
          <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { stroke: '#7159c1' }
            }}
            strokeWidth={10}
            value={60}
          />

          <a 
            href="https://uploadexampleclass.s3.amazonaws.com/ca183e4c0787730e2e9121f7022b5375-ccxp.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
          </a>

          <MdCheckCircle size={24} color="#78e5d5" />
          <MdError size={24} color="#e57878" />
        </div>
      </li>
    </Container>
  );
}