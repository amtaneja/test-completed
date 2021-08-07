import React, { useState, useEffect } from 'react';
import './ResponsiveTable.css';

//custom hook for calculating size of the screen
function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth])
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth])
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return size
}

//ResponsiveTable component
export default function ResponsiveTable(props) {

  const { headings, rows } = props;
  let isDesktop = true;

  //useWindowSize returning height and width of the screen
  const [height, width] = useWindowSize();

  //checking whether device is desktop or mobile
  if (width < 896) {
    isDesktop = false
  }
  else {
    isDesktop = true
  }


  return <div className='responsive-table-container'>


    {isDesktop ? (
      //looping through headings desktop view
      <table className=''>
        <thead>
          <tr className=''>
            {
              headings.map((heading, index) => (
                <th className='heading' key={index}>{heading.title}</th>
              ))
            }
          </tr>
        </thead>

        <tbody>

          {
            //looping through data
            rows.map((row, index) => (
              <tr className='responsive-table-row' key={index}>
                <td>{row.name}</td>
                <td>{row.websites}</td>
              </tr>
            ))
          }

        </tbody>

      </table>
    ) : (
      //for mobile view
      <table>
        <tbody>
          {rows.map((row, index) => (

            <tr key={index}>
              <td>
                {
                  headings.map((heading, index) => (
                    <div className='heading' key={index}>{heading.title}</div>
                  ))
                }
              </td>
              <td>
                <div className='row'>{row.name}</div>
                <div className='row'>{row.websites}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
}
