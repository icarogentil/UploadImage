import React from 'react';

import Dropzone from 'react-dropzone'

 import { DropContainer, UploadMessage } from './styles';

function Upload() {
  return (
      <Dropzone accept="image/*" multiple={false} onDropAccepted={ () => {}} >
          { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
              <DropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
              >
                  <input {...getInputProps()} type="file"/>

                  jogue seus arquivos aqui
            </DropContainer>
          ) }
      </Dropzone >
  );
}

export default Upload;