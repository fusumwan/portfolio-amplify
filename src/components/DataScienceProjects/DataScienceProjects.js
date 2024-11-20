import React, { useRef, useMemo } from 'react';
import { useTable,usePagination  } from 'react-table';
//npm install react-table
import './DataScienceProjects.css'; 
import './bootstrap-scoped.css';


function DataScienceProjects() {
  const gridViewRef = useRef(null);
  // Sample data (replace with your actual data)
  const data = useMemo(() => [
    {
        id: '1',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Understanding Marginal Probability Density Functions in Statistics</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/uC4yRPKS5AA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '2',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>One-Sided Chebyshev's Inequality</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/NmPsCLZ7Y-Y"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '3',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Bayes' Theorem Statistical Problem</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/WX9bPBYRg-A"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '4',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Expected Value Problem 1</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/Y7e_s6JnTqM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '5',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Binomial and Hypergeometric Distribution</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/h5bPA84Va1M"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '6',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Poisson Distribution Problem</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/9b2CggzUXi0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '7',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Poisson Distribution Problem</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/9b2CggzUXi0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '8',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Probability Density Function and Variable Transformation1</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/wYV5MbH-ISQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '9',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Non-One-to-One Variable Transformation</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/z1AbR9CJB6Q"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '10',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Normal Distribution and Chi-Square Distribution</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/j6ZPVY57OAw"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '11',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Probability distributions, normal distributions and linear combinations of random variables</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/2HympyLKSC4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '12',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Covariance Analysis</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/iAfAc0Tod9g"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '13',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Solving Normal Distribution Problems with Covariance</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/8TT8xyIyQJ8"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '14',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Solving Conditional Expectation</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/esCWdVSn9OA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '15',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Understanding Joint Probability Distributions with Transformations and Independence</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/arVVLLapGmk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '16',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Exploring Moment-Generating Functions part 1</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/CYz7yxxD99c"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '17',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Exploring Moment-Generating Functions part 2</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/PDHla5FF5Pc"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '18',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Large Sample Hypothesis Testing Analysis</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/Qj6N-BbwmpY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ,
    {
        id: '19',
        name: (
          <div>
          <p>Statistic in DataScience </p> 
          <p>Understanding Small Sample Hypothesis Testing</p>
          </div>
        ),
        description: (
          <div>
            <iframe
              width="275"
              height="157"
              src="https://www.youtube.com/embed/jpkEYeSdFqQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="DataScience with using Statistic"
            ></iframe>
          </div>
        )
    }
    ], []);

  // Define columns with custom render functions
  const columns = useMemo(() => [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Description',
      accessor: 'description',
    }
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we use page
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 1 } }, // Set initial page size
    usePagination
  );

  return (
    <div className="samples-container"> {/* New container div */}
      <section className="react-samples">
        <div className="gridview-container">
          <table ref={gridViewRef} {...getTableProps()} className="table" style={{ width: '100%' }}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => { // Use 'page' instead of 'rows'
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {'>'}
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {'>>'}
            </button>{' '}
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[1,2].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataScienceProjects;
  