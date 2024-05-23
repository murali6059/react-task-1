import React from 'react';
import 'antd/dist/reset.css'; // Import Ant Design styles
import { Layout } from 'antd';
import MainTable from './MainTable';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    return (
        <Layout className="layout">
            <Header>
                <div style={{ color: 'white', fontSize: '20px' }}>ML Engineer Salaries</div>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: '20px' }}>
                <div className="site-layout-content">
                    <MainTable />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>ML Engineer Salaries ©2024</Footer>
        </Layout>
    );
};

export default App;
