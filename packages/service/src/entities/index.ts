export type CommonFormActionState =
  | {
      type: 'error';
      message: string;
    }
  | {
      type: 'success' | 'waiting';
      message?: string;
    };

export type CommonFormAction = (_: CommonFormActionState, formData: FormData) => Promise<CommonFormActionState>;
