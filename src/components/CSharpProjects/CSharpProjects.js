import React, { useRef, useMemo } from 'react';
import { useTable,usePagination  } from 'react-table';
//npm install react-table
import './CSharpProjects.css'; 
import './bootstrap-scoped.css';


function CSharpProjects() {
  const gridViewRef = useRef(null);
  // Sample data (replace with your actual data)
  const data = useMemo(() => [
    {
      id: '1',
      name: (
        <div>
        <p>ASP.NET MVC Learning Platform</p> 
        <p>(Asp.net Core MVC + Entityframework)</p>
        <a href='https://aspnet7tutorials-82082989871.europe-west1.run.app'  target="_blank" rel="noopener noreferrer">Spring Boot Tutorials Website</a>
        <p>This ASP.NET MVC Tutorials website is designed as a comprehensive learning platform that covers essential topics such as the application lifecycle, design patterns, performance optimization, security, configuration, and real-world practice cases. </p>
        <p>LoginID: user@gmail.com</p>
        <p>Password: 1234qwer</p>
        </div>
      ),
      description: (
        <div>
          <table  className="table">
            <tr>
              <td>
              <img src={process.env.PUBLIC_URL + '/Images/AspNetMVCTutorialsScreenshot1.png'} style={{ width: "260px", height: "150px" }} alt="Profile" />
              </td>
            </tr>
            <tr>
              <td style={{ width: '350px' }}>
              It includes interactive demonstrations to facilitate hands-on learning and serves as a showcase of my practical skills and expertise in ASP.NET MVC development.
              </td>
            </tr>
          </table>
        </div>
      )
    },
    {
      id: '2',
      name: (
        <div>
        <p>PCCW 3G Retention(Asp.net C# Web development)</p> 
        <p>From 2008 to 2012, I held a pivotal role in developing key systems that bolstered the operational efficiency of PCCW's consumer group call centers.</p> 

        <a href='https://github.com/fusumwan/CSharpWebProject/tree/main/RETENTION_ZIP'>download</a>
        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/GFFQY5jf9KM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="PCCW 3G Retention(Asp.net C# Web development)"
          ></iframe>
          <table>
            <tr>
            <td  style={{ width: '300px' }}>
            <p>This project represents a major milestone in my career and showcases a blend of innovative technology and strategic thinking.</p>
            <p>Notably, I independently designed and executed the PCCW 3G Mobile Retention Order System, a substantial and complex project during this period.</p>
            </td>
            </tr>
          </table>
          

        </div>
      )
    },
    {
      id: '3',
      name: (
        <div>
        <p>Authentication in Asp.net Core without AuthenticationHandler</p> 

        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/fMBfh1AyaX4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Authentication in Asp.net"
          ></iframe>
          <table>
            <tr>
            <td  style={{ width: '300px' }}>
            <p>Custom Authentication in Asp.net Core without AuthenticationHandler in a more granular approach.</p>

            </td>
            </tr>
          </table>
          

        </div>
      )
    }
    ,
    {
      id: '4',
      name: (
        <div>
        <p>KNN Text Classification( K-Nearest Neighbors algorithm )</p>
        <p>
          This project utilizes <span style={{ color: 'red' }}>React JS</span> and <span style={{ color: 'red' }}>Tailwind CSS</span> for the frontend, ensuring a responsive UI design. The backend is built with <span style={{ color: 'red' }}>ASP.NET WebAPI</span>  and employs Data Transfer Objects (DTOs) for structured communication.
        </p>
        <a href='https://frontendapp1-82082989871.us-central1.run.app' target='blank'>Project Demonstration Web link</a>
        </div>
      ),
      description: (
        <div>
          <table  className="table ai-projects-table">
            <tr>
              <td style={{ width: '250px' }}>
              <p>
              Suppose we have a dataset with headlines categorized as "Technology" or "Entertainment". A new headline, "AI technology revolutionizes entertainment industry," is analyzed using KNN by calculating its similarity to existing headlines. Based on the nearest neighbors, it is classified into the appropriate category.
              </p>
              </td>
            </tr>
          </table>
        </div>
      )
    }
    ,
    {
      id: '5',
      name: (
        <div>
        <p>Entity framework core projects</p> 
        <p>Creating a Entity framework core project for building my Entity framework core tutorial in Youtube.</p>
            
        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/ETxOfwj6QXc"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Entity framework core tutorial 1"
          ></iframe>
          <table>
            <tr>
            <td  style={{ width: '300px' }}>
            <p></p>
            <a href='https://www.youtube.com/watch?v=ETxOfwj6QXc&list=PLCGUIZTAlaI5gusCniTvXrEaF99AhoHqc'>My Youtube Channel</a>
            </td>
            </tr>
          </table>
          

        </div>
      )
    },
    {
      id: '6',
      name: (
        <div>
        <p>payment gateway integration in asp.net core</p> 
        <p>To integrate a payment gateway in ASP.NET Core, you can use a library like Paypal. This library can be used to create a charge on the back-end controller. You can create an ASP.NET Core MVC project using Visual Studio 2022 and add the Razorpay package in Nuget.</p>

        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/yiWofSsk-ro"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Entity framework core tutorial 1PayPal Integration in ASP.NET Core MVC (Demonstration)"
          ></iframe>
          <table>
            <tr>
            <td  style={{ width: '300px' }}>
            <p></p>
            <a href='https://paypalgatewaylive-82082989871.us-central1.run.app'>Demo Website</a>
            </td>
            </tr>
          </table>
        </div>
      )
    }
    ,
    {
      id: '7',
      name: (
        <div>
        <p>Binary Classification SVM</p> 
        <p>(Asp.net Core MVC + React JS + Binary Classification SVM + Entityframework)</p>
        <a href='https://frontendapp2-82082989871.us-central1.run.app/'  target="_blank" rel="noopener noreferrer">Spring Boot Tutorials Website</a>
        <p>This Binary Classification SVM website is designed to explore the use of Machine Learning and Support Vector Machines (SVM) for binary classification. This application demonstrates practical implementation using the Cat vs Dog dataset.</p>
        <p>LoginID: user@gmail.com</p>
        <p>Password: 1234qwer</p>
        </div>
      ),
      description: (
        <div>
          <table  className="table">
            <tr>
              <td>
              <img src={process.env.PUBLIC_URL + '/Images/BinaryClassificationSVM.png'} style={{ width: "260px", height: "150px" }} alt="Profile" />
              </td>
            </tr>
            <tr>
              <td style={{ width: '350px' }}>
              1) Concept of Machine Learning Binary Classification using SVM.
              2) Integration of the Accord Library.
              3) Cat vs Dog Dataset Details.
              </td>
            </tr>
          </table>
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

export default CSharpProjects;
  