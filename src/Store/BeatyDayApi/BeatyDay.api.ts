import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'
import { ICategoryProp, IServicesProp } from '../../Types/Requests/beatyDay.api'

export const beatyDayApi = createApi({
    reducerPath: 'beadyDay',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://beautyday.pythonanywhere.com/'
    }),
    endpoints: build => ({
        services: build.query<IServicesProp.Response, IServicesProp.Params>({
            query: () => 'services/'
        }),
        categories: build.query<ICategoryProp.Response, ICategoryProp.Params>({
            query: () => 'categories/'
        }),    
    })
})

export const 
{
    useServicesQuery,
    useCategoriesQuery
} = beatyDayApi