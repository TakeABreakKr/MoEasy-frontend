import { mockServer } from '@/__test__/server';

const enableMock = () => {
  if (process.env.NODE_ENV === 'development') {
    mockServer.listen();
  }
};

enableMock();
