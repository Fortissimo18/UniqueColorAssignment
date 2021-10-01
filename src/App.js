import { Route, Redirect } from 'react-router-dom';

import { SortingProvider } from './Store/SortingContext';

import NavBar from './NavigationItems/NavBar/NavBar';
import MyHeader from './NavigationItems/Header/MyHeader';
import WorkingSkeleton from './MainPages/WorkingSkeleton/WorkingSkeleton';
import CheatingVersion from './MainPages/CheatingVersion/CheatingVersion';
import SortingSelector from './MainPages/ColorSorting/SortingSelector';
import Plan from './MainPages/Plan/Plan';


function App() {
  return (
    <SortingProvider>
      <NavBar />
      <MyHeader />
      <Route exact path='/' component={WorkingSkeleton} />
      <Route path='/version2' component={SortingSelector} />
      <Route path='/version3' component={CheatingVersion} />
      <Route path='/plan' component={Plan} />
      {/* redirect to home page for undefined paths */}
      <Redirect to="/" />
    </SortingProvider>

  );
}

export default App;
