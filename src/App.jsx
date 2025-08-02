import { COCKTAIL_CODES } from './config';
import { Routes, Route, Navigate } from 'react-router-dom';

import CocktailsList from './components/CocktailsList';
import Cocktail from './components/Cocktail';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
      <h1>Cocktails</h1>
      <div className="application">
        <div className="application__navigation">
          <CocktailsList cocktails={COCKTAIL_CODES}/>
        </div>
        <div className="application__cocktail-view">
          <Routes>
            <Route path='/' element={<Navigate to={`/${COCKTAIL_CODES[0]}`} replace />} />
            { COCKTAIL_CODES.map((cocktail, inx) => {
              return <Route path={cocktail} key={'route'+cocktail+inx} element={<Cocktail cocktailCode={cocktail} />} />;
            }) }
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
