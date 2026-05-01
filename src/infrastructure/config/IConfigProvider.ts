export interface IConfigProvider {
  get clientId(): string;
  get secretId(): string;
  get nodeEnv(): string;
}
