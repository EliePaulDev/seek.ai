import './App.css';
import Layout from './layout/layout';
import Home from './pages/Home/Home';

export default function App() {

  return (
    <div data-testid="app">
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}


