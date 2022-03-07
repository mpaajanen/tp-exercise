import { configureStore } from '@reduxjs/toolkit'

import targetReducer from './reducers/targetReducer'

export const store = configureStore({
  reducer: {
    targets: targetReducer,
  }
})

