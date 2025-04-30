import { useMutation } from '@tanstack/react-query';
import { browserClient } from '@/shared/api/browser-client';

import { FormDataType } from '@/page/meeting/create/creating-step-form';
// 타입을 이렇게 가져와도 될까요?

export const useCreateMeetingMutation = () => {
  return useMutation({
    mutationFn: async (formData: FormDataType) => {
      return browserClient.POST('/meeting/create', {
        body: {} as any, // 이렇게 작성하는게 맞을까요.. as any를 안 붙이면 자꾸 에러나요
        bodySerializer: (body) => {
          const formDataToSend = new FormData();

          formDataToSend.append('name', formData.name);
          formDataToSend.append('category', formData.category);
          formDataToSend.append('explanation', formData.explanation);
          formDataToSend.append('limit', formData.limitDisabled ? '9999' : String(formData.limit));
          //제한없음 - 상태 때문에 서버로 보내는 과정에서 오류가 나길래 9999로 설정해뒀어요 우선 ㅜ ㅜ
          formDataToSend.append('publicYn', String(formData.publicYn));
          formDataToSend.append('canJoin', String(formData.canJoin));

          (formData.keywords ?? []).forEach((keyword) => {
            formDataToSend.append('keywords', keyword);
          });

          (formData.members ?? []).forEach((member) => {
            formDataToSend.append('members', member);
          });

          if (formData.thumbnail) {
            formDataToSend.append('thumbnail', formData.thumbnail as File);
          }
          // 디버깅: 어떤 데이터가 들어가는지 확인... ㅜㅜ
          for (const [key, value] of formDataToSend.entries()) {
            console.log(`${key}:`, value);
          }

          return formDataToSend;
        },
      });
    },
  });
};
