import React, { useRef, useMemo } from 'react';
import { useTable,usePagination  } from 'react-table';
//npm install react-table
import './AIProjects.css'; 
import './bootstrap-scoped.css';


function AIProjects() {
  const gridViewRef = useRef(null);
  // Sample data (replace with your actual data)
  const data = useMemo(() => [
    {
      id: '1',
      name: (
        <div>
        <p>Fuyika RAG AI Webapplication</p> 
        <p>(RAG + Langchain + Chroma +OpenAI+ FastAPI Python Project:)</p>
        <p>(Easy AI/Chat/Talk For Your Docs)</p>
        <p><a href='https://learnwiseaiwebapp-82082989871.us-central1.run.app' target="_blank" rel="noopener noreferrer">Website link</a></p>
        <p>Login Id : admin</p>
        <p>Password : test123</p>
        </div>
      ),
      description: (
        <div>
          <table>
            <tr>
              <td>
              <iframe
                width="275"
                height="157"
                src="https://www.youtube.com/embed/bhMfwEv48hY"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Easy AI/Chat/Talk For Your Docs"
              ></iframe>
              </td>
            </tr>
            <tr>
              <td>
                

              <p><a href='https://itinformationinsight.blogspot.com/2024/10/ai-web-application-for-fuyika-phase-1.html' target="_blank" rel="noopener noreferrer">Fuyika RAG Application description Website link</a></p>

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
        <p>AI Stock Prediction</p> 
        <p>(Regression & Long-term short-term memory network)</p>
        <a href='https://github.com/fusumwan/aistockprediction'>download</a>
        </div>
      ),
      description: (
        <div>
          <table  className="table ai-projects-table">
            <tr>
              <td style={{ width: '150px' }}>
              The project aims to use regression and long-term short-term memory network (LSTM) on S&P500 historical stock price data to predict future stock prices during COVID-19. This report is concerned with 4 aspects which are a thorough discussion of previous research, the novelty of method, methodology, and evaluation metric.

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
        <p>CNN Image Classification</p> 
        <p>(Load and normalize the CIFAR-10 dataset for image classify)</p>
        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/F1dVSX6RJ9I"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="CNN Image Classification"
          ></iframe>
        </div>
      )
    },
    {
      id: '4',
      name: (
        <div>
        <p> TensorFlow & Spring Boot project</p> 
        <p>(Showcases)</p>
        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/hNGmDxCtbS0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Showcases: TensorFlow + Java + Spring Boot+ Hibernate"
          ></iframe>
        </div>
      )
    },
    {
      id: '5',
      name: (
        <div>
        <p>A Search for Improved Performance in Regular Expressions(Genetic programming)</p> 
        <p>(Machine learning technology)</p>
        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/ae85-c7-xZI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="A Search for Improved Performance in Regular Expressions(Genetic programming)"
          ></iframe>
        </div>
      )
    },
    {
      id: '6',
      name: (
        <div>
        <p> Text to speech web application</p> 
        <p>(without using python web framework)</p>
        </div>
      ),
      description: (
        <div>
          <iframe
            width="275"
            height="157"
            src="https://www.youtube.com/embed/mOngrSQM7vM"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="My first Python text to speech web application (without using python web framework)"
          ></iframe>
        </div>
      )
    },
    {
      id: '7',
      name: (
        <div>
        <p>AI Stock Prediction </p> 
        <p>(Regression & LSTM & Python )</p>
        <a href='https://github.com/fusumwan/aistockprediction'>download</a>
        </div>
      ),
      description: (
        <div>
          <table  className="table ai-projects-table">
            <tr>
              <td style={{ width: '250px' }}>
              The project aims to use regression and long-term short-term memory network (LSTM) on S&P500 historical stock price data to predict future stock prices during COVID-19. This report is concerned with 4 aspects which are a thorough discussion of previous research, the novelty of method, methodology, and evaluation metric.

              </td>
            </tr>
          </table>
        </div>
      )
    },
    {
      id: '8',
      name: (
        <div>
        <p>Naive Bayes </p> 
        <p>(Sentiment Analysis)</p>
        <a href='https://xedvmjc43yx2jrg2qwgv2774ru0abdqb.lambda-url.ap-southeast-2.on.aws/'>Web link</a>
        </div>
      ),
      description: (
        <div>
          <table  className="table ai-projects-table">
            <tr>
              <td style={{ width: '250px' }}>
              <p>
              Contextual Understanding: The chatbot can maintain the context better by understanding the user's mood and intent, adjusting its behavior accordingly. This leads to a more fluid and engaging conversation.
              </p>
              <p>
              Empathy and Patience: The bot can demonstrate patience and empathy, similar to how a human would in a conversation, by detecting when the user is hesitant or unsure and responding with care rather than pushing for immediate answers.
              </p>
              </td>
            </tr>
          </table>
        </div>
      )
    }
    ,
    {
      id: '9',
      name: (
        <div>
        <p>Embedding (My own design))</p> 
        <p>(English Article Feature Extraction)</p>
        <a href='https://lm6pzqjqf7vqc5dh5pjuzfr6gy0mzlvi.lambda-url.ap-southeast-2.on.aws'>Web link</a>
        </div>
      ),
      description: (
        <div>
          <table  className="table ai-projects-table">
            <tr>
              <td style={{ width: '250px' }}>
              <p>
              An embedding is a relatively low-dimensional space into which you can translate high-dimensional vectors. Embeddings make it easier to do machine learning on large inputs like sparse vectors representing words. Ideally, an embedding captures some of the semantics of the input by placing semantically similar inputs close together in the embedding space. An embedding can be learned and reused across models.
              </p>
              </td>
            </tr>
          </table>
        </div>
      )
    }
    ,
    {
      id: '10',
      name: (
        <div>
        <p>Reinforcement Learning from Human Feedback (RLHF)</p> 
        <a href='https://llfsqhjaxykgawor6dyqsdapty0hspio.lambda-url.ap-southeast-2.on.aws/'>Web link</a>
        </div>
      ),
      description: (
        <div>
          <table  className="table ai-projects-table">
            <tr>
              <td style={{ width: '250px' }}>
              <p>
              The application design for the program integrates Reinforcement Learning from Human Feedback (RLHF). Users input labeled data (positive or negative), train the model using a defined training/testing split, and test the model’s predictions. Incorrect predictions can be corrected through user feedback, allowing the model to learn and improve based on real-time human input. The system leverages FastAPI for backend operations, TensorFlow for model training, and feedback refinement through user interaction.
              </p>
              </td>
            </tr>
          </table>
        </div>
      )
    }
    ,
    {
      id: '11',
      name: (
        <div>
        <p>PPO (Proximal Policy Optimization)</p> 
        <a href='https://hxwu33xn7xnepsuystl5zalrcq0wtfkr.lambda-url.ap-southeast-2.on.aws/'>Web link</a>
        </div>
      ),
      description: (
        <div>
          <table  className="table ai-projects-table">
            <tr>
              <td style={{ width: '250px' }}>
              <p>
              The PPO (Proximal Policy Optimization) design in this program is implemented using TensorFlow to train and test reinforcement learning models. Users can adjust the training data percentage via a slider, train the model using sample JSON data, and test the model’s performance. The program includes functionalities to save and load the model, providing flexibility for real-time reinforcement learning experiments through a simple web interface.
              </p>
              </td>
            </tr>
          </table>
        </div>
      )
    }
    ,
    {
      id: '12',
      name: (
        <div>
        <p>DPO (Direct Policy Optimization)</p> 
        <a href='https://ztjukp5kn3v4pkbwiqewrluspm0smyxv.lambda-url.ap-southeast-2.on.aws/'>Web link</a>
        </div>
      ),
      description: (
        <div>
          <table  className="table ai-projects-table">
            <tr>
              <td style={{ width: '250px' }}>
              <p>
              The DPO (Direct Policy Optimization) algorithm in your program facilitates reinforcement learning by optimizing a policy directly from data. It uses a training/test data split, allowing users to input raw environment data, adjust the split, and train a model. The trained model is evaluated in a testing phase, with results displayed to the user. This approach optimizes policy without requiring a model of the environment, making it efficient for learning from raw data in complex systems.
              </p>
              </td>
            </tr>
          </table>
        </div>
      )
    }
    ,
    {
      id: '13',
      name: (
        <div>
        <p>KTO Reinforcement Learning algorithm program</p> 
        <a href='https://fno535vch3lpxmevuqye3nhtnu0nxuhl.lambda-url.ap-southeast-2.on.aws/'>Web link</a>
        </div>
      ),
      description: (
        <div>
          <table  className="table ai-projects-table">
            <tr>
              <td style={{ width: '250px' }}>
              <p>
              The KTO Reinforcement Learning algorithm in the program utilizes raw data input to train a model with adjustable training/testing splits. The user can manipulate training data percentages and input their raw data. The model is trained upon user command, and its performance can be tested afterward. The design includes a clear, interactive UI with sliders, buttons, and results displayed in real-time, leveraging TensorFlow for the model's functionality.
              </p>
              </td>
            </tr>
          </table>
        </div>
      )
    }
  ],
  []);

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

export default AIProjects;
  