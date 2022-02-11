import './App.css';
import PaginaOrizzontale from './component/PaginaOrizzontale/PaginaOrizzontale';
import PaginaVerticale from './component/PaginaVerticale/PaginaVerticale';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import store from './store/store/store';
import theme from './theme';


function App() {
  const queryString = require('query-string');
  // eslint-disable-next-line no-restricted-globals
  const parsed = queryString.parse(location.search);
  const orientamento = (parsed.orientamento);
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>
    <div className="App">

{orientamento === "v"?
<PaginaVerticale />
:<></>}
{orientamento === "o"?
<PaginaOrizzontale />
:<></>}

    </div>
    
    </Provider>
    </ThemeProvider>
  );
}

export default App;
