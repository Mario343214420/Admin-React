import React from 'react'
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const NomalHeader = ({ overlayClassName: cls, ...restProps }) => (
	<Layout>
		<Header>Header</Header>
		<Content>Content</Content>
		<Footer>Footer</Footer>
		<Card>
			<Typography.Title
				level={2}
				style={{
					textAlign: 'center',
				}}
			>
				<SmileTwoTone /> Ant Design Pro <HeartTwoTone twoToneColor="#eb2f96" /> You
			</Typography.Title>
		</Card>
	</Layout>
);

export default NomalHeader;
