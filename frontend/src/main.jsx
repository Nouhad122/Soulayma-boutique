import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux-toolkit/store.js';
import App from './App.jsx'
import { SideCompContextProvider } from './store/SideCompContext.jsx';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from "./use/useHttp.js"
import { ChatBotContextProvider } from './store/ChatBotContext.jsx';
import { AuthContextProvider } from './store/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <SideCompContextProvider>
          <ChatBotContextProvider>
            <StrictMode>
              <App />
            </StrictMode>
          </ChatBotContextProvider>
        </SideCompContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </Provider>
)
