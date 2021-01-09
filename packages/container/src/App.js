import React from 'react';
import {  BrowserRouter} from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header'
import { StylesProvider , createGenerateClassname} from '@material-ui/core/styles';


const generateClassname = createGenerateClassname({
  productionPrefix ='co';
});


export default () => {
  return (
    <BrowserRouter>
      <StylesProvider>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
