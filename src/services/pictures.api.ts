import { api } from '@services';

type PhotoT = {
    id: number;
    url: string;
};

export const photoApi = api.injectEndpoints({
    endpoints: (builder) => ({
        fetchPhotos: builder.mutation<PhotoT[], void>({
            query: () => ({
                url: 'photos',
                method: 'GET',
                params: {
                    _limit: 10,
                },
            }),
            transformResponse: (response: PhotoT[]) => {
                return response;
            },
        }),
    }),
});

export const { useFetchPhotosMutation } = photoApi;
