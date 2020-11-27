import React from 'react'
import { Card, Typography, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
export default () => (
	<Layout>
		<Header></Header>
		<Content>
			<Sider></Sider>
			<Content>
				<Card>123</Card>
			</Content>
		</Content>
		<Footer></Footer>
	</Layout>
)
