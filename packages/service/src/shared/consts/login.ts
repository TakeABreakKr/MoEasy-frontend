export class ProviderUrl {
  static get DISCORD() {
    return `https://discord.com/oauth2/authorize?client_id=1248807669335330847&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_API_BASE_BROWSER}/auth/callback&scope=identify%20email%20connections`;
  }
}
