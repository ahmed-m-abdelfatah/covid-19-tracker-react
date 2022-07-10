import '../css/Footer.css';
// import { randomColor } from '../utilities.js';

const Footer = () => {
  console.log('~ Footer');

  return (
    <footer /* style={{ background: randomColor() }} */>
      <div className='container'>
        <div className='w-75'>
          <h2>About</h2>
          <p>
            Coronavirus is a pandemic that is sweeping the globe. Shown here are some of the statistics on how it
            spreads over time across different countries. Please note that these numbers may not perfectly reflect
            reality as not everyone in the world has been tested, and gathering global health data is a hard task. This
            site was created by GBKS. For feedback and ideas, please reach out.
          </p>
        </div>
        <div className='text-center'>
          <a href='https://github.com/ahmed-m-abdelfatah' rel='noreferrer' target='_blank'>
            @ahmed-m-abdelfatah
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
