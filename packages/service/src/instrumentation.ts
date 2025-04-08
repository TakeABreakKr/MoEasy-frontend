export async function register() {
  if (
    process.env.NEXT_RUNTIME == 'nodejs' &&
    process.env.NODE_ENV === 'development' &&
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
  ) {
    const { mockServer } = await import('@/__test__/server');
    mockServer.listen({ onUnhandledRequest: 'bypass' });
  }
}
