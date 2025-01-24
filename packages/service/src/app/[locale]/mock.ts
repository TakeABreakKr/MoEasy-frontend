import { mockServer } from '@/__test__/server';

const enableMock = () => {
  if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    mockServer.listen();
  }
};

enableMock();
