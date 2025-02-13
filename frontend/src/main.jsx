import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux-toolkit/store.js';
import App from './App.jsx'
import { SideCompContextProvider } from './store/SideCompContext.jsx';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from "./use/useHttp.js"
import { ChatBotContextProvider } from './store/ChatBotContext.jsx';

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <SideCompContextProvider>
      <ChatBotContextProvider>
        <Provider store={store}>
          <StrictMode>
              <App />
            </StrictMode>
        </Provider>
      </ChatBotContextProvider>
    </SideCompContextProvider>
  </QueryClientProvider>
 
)
