import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Tables from './components/Tables.js';
import Footer from './components/Footer.js';
import Loading from './components/Loading.js';
import { useCovid } from './contexts/CovidContext.js';

const App = () => {
  console.log('~ App');

  const { loading, error } = useCovid();

  return !loading ? (
    <>
      {!error && (
        <>
          <NavBar />
          <Home />
          <Tables />
          <Footer />
        </>
      )}
      {error && (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
          <p className='text-center text-danger text-capitalize'>
            Error Something Went Wrong
          </p>
        </div>
      )}
    </>
  ) : (
    <>
      <Loading />
    </>
  );
};

export default App;
