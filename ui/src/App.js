import React from 'react';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout'

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <ArticleList />
      </CustomLayout>
    </div>
  );
}

export default App;
