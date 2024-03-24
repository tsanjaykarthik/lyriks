import { createApi, fetchBaseQuesry } from "@reduxjs/toolkit/query/react";

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuesry({
        baseUrl: 'https://spotify23.p.rapidapi.com?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5',
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key','882b2c50acmshd244b9d3901bfe9p116b52jsn50278117ecec');
        return headers;
    },
    }),
});
