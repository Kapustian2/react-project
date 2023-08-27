import { Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import { Header, Footer } from './components/index'

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1333px;
  min-height: 100%;
  margin: 0 auto;
  background-color: white;
`;

const Content = styled.div`
  padding: 120px 0;
`;

const H2 = styled.h2`
  text-align: center;
`;



function App() {
  return (
    <AppColumn>
      <Header/>
      <Content>
        <H2>------------</H2>
        <H2>Контент страницы</H2>
        <Routes>
          <Route path="/" element={<div>Главная страница</div>} />
          <Route path="/login" element={<div>Авторизация</div>} />
          <Route path="/register" element={<div>Регистрация</div>} />
          <Route path="/users" element={<div>Пользователи сайта</div>} />
          <Route path="/post" element={<div>Новая статья</div>} />
          <Route path="/post/:/postId" element={<div>Статья</div>} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  );
}

export default App;
