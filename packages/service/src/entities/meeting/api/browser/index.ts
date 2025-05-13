import { useMutation } from '@tanstack/react-query';

import { FormDataType } from '@/entities/meeting/api/type';
import { browserClient } from '@/shared/api/browser-client';
// 타입을 이렇게 가져와도 될까요?
// entities 에서 정의한뒤에 pages로 가져가주세요

export const useCreateMeetingMutation = () => {
  return useMutation({
    mutationFn: async (formData: Required<FormDataType>) => {
      return browserClient.POST('/meeting/create', {
        body: {
          name: formData.name,
          category: formData.category,
          explanation: formData.explanation,
          limit: formData.limitDisabled ? 9999 : Number(formData.limit),
          publicYn: formData.publicYn,
          canJoin: formData.canJoin,
          keywords: formData.keywords,
          members: formData.members,
          thumbnail: formData.thumbnail as File,
        },
        bodySerializer: (body) => {
          const formDataToSend = new FormData();

          formDataToSend.append('name', body.name);
          body.category && formDataToSend.append('category', body.category);
          formDataToSend.append('explanation', body.explanation);
          formDataToSend.append('limit', String(body.limit));
          formDataToSend.append('publicYn', String(body.publicYn));
          formDataToSend.append('canJoin', String(body.canJoin));

          body.keywords.forEach((keyword) => {
            formDataToSend.append('keywords', keyword);
          });

          body.members.forEach((member) => {
            formDataToSend.append('members', member);
          });

          if (body.thumbnail) {
            formDataToSend.append('thumbnail', body.thumbnail);
          }

          return formDataToSend;
        },
      });
    },
  });
};
