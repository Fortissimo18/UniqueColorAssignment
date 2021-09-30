import './App.css';
import WorkingSkeleton from './workingSkeleton/workingSkeleton';
import CanvasImage from './workingSkeleton/canvasImage';
import SortingSelector from './sortingSelector/sortingSelector';
import CheatingVersion from './tv/cheatingVersion';
import { SortingProvider } from './store/sortingContext';

function App() {

  return (
    
    <SortingProvider>
      <WorkingSkeleton/>
    <SortingSelector />
    <CanvasImage/>
    <CheatingVersion/>
    </SortingProvider>
    
  );
}

export default App;
