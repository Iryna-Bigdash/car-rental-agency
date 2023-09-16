import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter basename="/react-template">
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React template
    </div>
    </BrowserRouter>
  );
};
