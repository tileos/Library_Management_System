
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import PanelRouting from './PanelRoute';


const AppRouter = () => {
    return (
        <Router>
         {/* <div>
            <MenuColumn/>
         </div> */}
         <div>
         <PanelRouting/>
         </div>
          
        </Router>
      );
};

export default AppRouter;
