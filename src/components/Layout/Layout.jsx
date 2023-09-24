import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </>
  );
};
