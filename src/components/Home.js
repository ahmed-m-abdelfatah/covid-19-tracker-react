import '../css/Home.css';

import { useMemo, useState } from 'react';
import MapChart from './MapChart.js';
import ReactTooltip from 'react-tooltip';
import { numberWithCommas } from '../utilities.js';
import { useCovid } from '../contexts/CovidContext.js';

const Home = () => {
  console.log('~ Home');

  const [content, setContent] = useState('');

  const { data } = useCovid();

  const totalActiveCases = data.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue + (+currentValue.active || 0);
  }, 0);

  const totalActiveCasesWithComma = numberWithCommas(totalActiveCases);

  let textData = useMemo(
    () => (
      <div className='col-md-4' /* style={{ background: randomColor() }} */>
        <div className='text-data'>
          <h2 className='h1'>
            There are <span className='text-warning'>{totalActiveCasesWithComma}</span> active cases of Coronavirus in
            the world.
          </h2>
        </div>
      </div>
    ),
    [totalActiveCasesWithComma],
  );

  return (
    <section className='home'>
      <div className='container'>
        <div className='row align-items-center justify-content-md-start'>
          {textData}
          <div
            className='col-md-7 offset-md-1'
            /* style={{ background: randomColor() }} */
          >
            <div className='map'>
              <MapChart setTooltipContent={setContent} />
              <ReactTooltip multiline type='info'>
                {content}
              </ReactTooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
