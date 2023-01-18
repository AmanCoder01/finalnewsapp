import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


const App = () => {
  const pageSize = 5;
  const apiKey = '7883992e564a4cf7834bff5384735cb3'
  const [progress, setProgress] = useState(0)

  return (
    <Router>
 <div >    
    <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />


        
        <Routes>
          <Route exact path="/" element={ <News setProgress={setProgress} apiKey={apiKey} key="general"  category="general" title=" "/>}> </Route>

          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" category="business" title="Business" />}> </Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" category="entertainment" title="Entertainment" />}> </Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" category="health" title="Health" />}>  </Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" category="science" title="Science" />}> </Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" category="sports" title="Sports" />}> </Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" category="technology" title="Technology" />}> </Route>
        </Routes>
      </div>
    </Router>
  )
}
export default App;