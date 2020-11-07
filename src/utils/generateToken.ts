import { OpenAPI } from '../generated/core/OpenAPI';
import { TokenSessionService } from '../generated/services/TokenSessionService';
import { invariant } from './invariant';

/**
 * generateToken helps creating a token. It sets token for all requests.
 * 
 * @param consumerToken Token of the API consumer
 * @param employeeToken The employees token
 * @param expirationDate Expiration date for the combined token
 * @example
 * ```typescript
 * const expDate = new Date();
 * expDate.setDate(expDate.getDate() + 1);
 * await generateToken({
 *   consumerToken: '000-000-000',
 *   employeeToken: '100-100-100',
 *   expirationDate: expDate,
 * });
 * ```
 */
export async function generateToken({
  expirationDate,
  ...tokenSessionArgs
}: {
  consumerToken: string;
  employeeToken: string;
  expirationDate: Date;
}) {
  if (OpenAPI.TOKEN) {
    return false;
  }

  const expDate = expirationDate.toISOString().split('T')[0];

  const session = await TokenSessionService.tokenSessionCreateCreate({
    expirationDate: expDate,
    ...tokenSessionArgs,
  });

  invariant(session.value.token, 'Not able to get token');

  OpenAPI.TOKEN = session.value;
}

/**
 * 0 or blank means the company of the employee.
 * Any other value means accountant clients. Use /company/>withLoginAccess to get a list of those.
 * @param username defaults to '0'
 */
export async function setUsername(username: string | (() => Promise<string>)) {
  OpenAPI.USERNAME = username;
}