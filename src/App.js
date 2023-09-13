import { Routes, Route } from 'react-router-dom';
import { styled } from 'styled-components';
import { Header, Footer } from './components/index';
import { Authorization, Registration, Users } from './pages';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1333px;
	min-height: 100%;
	margin: 0 auto;
	background-color: white;
`;

const Page = styled.div`
	padding: 120px 0;
`;

function App() {
	return (
		<AppColumn>
			<Header />
			<Page>
				<h2>------------</h2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:/postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
}

export default App;
