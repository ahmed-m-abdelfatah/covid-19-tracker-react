import { useCovid } from '../contexts/CovidContext.js';
import '../css/Tables.css';
import {
  israelToPalestine,
  numberWithCommas,
  // randomColor,
} from '../utilities.js';

const Tables = () => {
  console.log('~ Tables');

  const { data } = useCovid();

  return (
    <section className='tables bg-secondary bg-opacity-25' /* style={{ background: randomColor() }} */>
      <div
        className='container'
        style={{
          height: '300px',
          overflow: 'auto',
        }}>
        <table className='table'>
          <thead className=''>
            <tr className='text-capitalize'>
              <th scope='col'>#</th>
              {/* <th scope='col'>flag</th> */}
              <th scope='col'>country</th>
              <th scope='col'>cases</th>
              <th scope='col'>deaths</th>
              <th scope='col'>recovered</th>
              <th scope='col'>critical / active</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                {/* <td style={{ width: '80px' }}>
                    <img
                      className='w-25'
                      src={el.countryInfo.flag}
                      alt='flag'
                    />
                  </td> */}
                <td>{israelToPalestine(el.country)}</td>
                <td>{numberWithCommas(el.cases)}</td>
                <td>{numberWithCommas(el.deaths)}</td>
                <td>{numberWithCommas(el.recovered)}</td>
                <td>
                  {numberWithCommas(el.critical)} / {numberWithCommas(el.active)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Tables;
