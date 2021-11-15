import { useState, useMemo } from 'react';

import Question1 from './components/question-1.component';
import Question2 from './components/question-2.component';

import './App.css';

const tabList = [
  {
    label: 'Question 1',
    value: '1'
  },
  {
    label: 'Question 2',
    value: '2'
  },
  {
    label: 'Question 3',
    value: '3'
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(tabList[0].value);

  const renderTab = useMemo(() => {
    switch (activeTab) {
      case '1':  return <Question1 />;
      case '2':  return <Question2 />;
      default: return <></>;
    }
  }, [activeTab])

  function changedTab(event) {
    let { value } = event.target;
    setActiveTab(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          tabList.map(tab => {
            let isActive = tab.value === activeTab;
            return <button 
                      className={`btn-${isActive ? 'active': ''}`}  
                      disabled={tab.value === '3'}
                      name='tab' 
                      value={tab.value} 
                      type='button'
                      onClick={changedTab}
                    >
                      {tab.label}
                    </button>
          })
        }  
      </header>
      <div className='container'>
        {renderTab}
      </div>
    
    </div>
  );
}

export default App;
