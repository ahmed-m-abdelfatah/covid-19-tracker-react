import { memo } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useCovid } from '../contexts/CovidContext.js';
import { israelToPalestine, numberWithCommas } from '../utilities.js';
import world from '../assets/world-110m.json';

const geoUrl = world;

const MapChart = ({ setTooltipContent }) => {
  const { data } = useCovid();

  let nonNullCountries;

  nonNullCountries = data.filter(el => el.countryInfo.iso2 != null);

  return (
    <>
      <ComposableMap data-tip='' projectionConfig={{}} style={{ outline: 'none' }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, ISO_A2 } = geo.properties;
                    console.log('~ geo.properties', geo.properties);

                    const ourCountry = nonNullCountries.find(
                      ({ countryInfo: { iso2 } }) => iso2.toLowerCase() === ISO_A2.toLowerCase(),
                    );

                    let displayData = false;

                    if (
                      ourCountry?.cases !== undefined &&
                      ourCountry?.recovered !== undefined &&
                      ourCountry?.deaths !== undefined
                    ) {
                      displayData = true;
                    }

                    // console.log('~ ourCountry?.deaths', ourCountry?.deaths);
                    // console.log('~ ourCountry?.recovered ', ourCountry?.recovered);
                    // console.log('~ ourCountry?.cases', ourCountry?.cases);
                    // console.log('~ displayData', displayData);

                    setTooltipContent(
                      <>
                        <ul className='list-unstyled fs-5'>
                          <li>{israelToPalestine(NAME)}</li>
                          {displayData && (
                            <>
                              <li>
                                <span className='me-1'>Infected:</span>
                                {numberWithCommas(ourCountry?.cases)}
                              </li>
                              <li>
                                <span className='me-1'>Recovered:</span>
                                {numberWithCommas(ourCountry?.recovered)}
                              </li>
                              <li>
                                <span className='me-1'>Deaths:</span>
                                {numberWithCommas(ourCountry?.deaths)}
                              </li>
                            </>
                          )}
                        </ul>
                      </>,
                    );
                  }}
                  onMouseLeave={() => setTooltipContent('')}
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#F53',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
