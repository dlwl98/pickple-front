import { axiosInstance } from '@api/axiosInstance';

import { PostGameRequest, PostGameResponse } from '@type/api/games';

export const postGame = async (payload: PostGameRequest) => {
  const { data } = await axiosInstance.post<PostGameResponse>('/api/games', {
    data: payload,
  });

  return data;
};
