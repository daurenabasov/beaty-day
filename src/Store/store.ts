import { configureStore } from "@reduxjs/toolkit";
import { beatyDayApi} from './BeatyDayApi/BeatyDay.api'

export const store: any = configureStore({
    reducer: {
        [beatyDayApi.reducerPath]:beatyDayApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(beatyDayApi.middleware)
})