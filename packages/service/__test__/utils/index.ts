export type SuccessResponseType<T> = {
  statusCode: number;
  message: string;
  data: T;
};

export const successResponse = <T>(data: T): SuccessResponseType<T> => ({
  statusCode: 200,
  message: 'success',
  data,
});
