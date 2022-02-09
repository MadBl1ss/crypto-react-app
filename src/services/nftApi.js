import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const nftHeaders = {
    'x-rapidapi-host': 'rarible-data-scraper.p.rapidapi.com',
    'x-rapidapi-key': '1dcb4cf988mshcb8507ee1aabde7p1ed060jsn3db938efe772'
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