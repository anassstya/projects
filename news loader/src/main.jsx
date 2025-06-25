import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NewsLoaderMain from "./NewsLoaderMain.jsx";
import {Provider} from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <NewsLoaderMain/>
      </Provider>
  </StrictMode>,
)
