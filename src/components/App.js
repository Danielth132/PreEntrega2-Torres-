import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <BrowserRouter>
      <Header titulo="One Appstore"/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  )
    
}

export default App;
