import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const nftHeaders = {
    'x-rapidapi-host': 'rarible-data-scraper.p.rapidapi.com',
    'x-rapidapi-key': 'fd3ddc3205msh32e9cb483985c09p15a16bjsne5657179e67a'
  }

const baseUrl = 'https://rarible-data-scraper.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: nftHeaders })

export const nftApi = createApi({
    reducerPath: 'nftApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTopNftApi: builder.query({
            query: () => createRequest(`/top_collection/30/50`)
        })
    })
})

export const { useGetTopNftApiQuery } = nftApi