import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { useState } from 'react';

const App = () => {
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList: newFileList }) => {
    if (newFileList.length > fileList.length) {
      const uploadedFile = newFileList[newFileList.length - 1];
      if (uploadedFile.status === 'done') {
        setFileList([]);
      }
    }
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <style>
        {`
          .ant-upload-list-picture-card .ant-upload-list-item-thumbnail {
            border: none;
          }
        `}
      </style>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={handleChange}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
    </>
  );
};

export default App;
