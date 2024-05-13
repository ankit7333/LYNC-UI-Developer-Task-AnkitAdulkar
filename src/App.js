import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="documentation" element={'Documentation'} />
          <Route path="blogs" element={'Blogs'} />
          <Route path="lyncportal" element={'LYNC Portal'} />
          <Route path="requestademo" element={'Request A Demo'} />
          <Route path="*" element={'Page Not Found'} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
