import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { BaseService } from './_base';




// ----------------------------------------------------------------------------
// Module Vars
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Module Types
// ----------------------------------------------------------------------------
class AccountService extends BaseService {
  // --------------------------------------------------------------------------
  // Fields
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor() {
    super('');
  }

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------
  public async login() {
    //
  }


  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------
  protected onRequest(config: AxiosRequestConfig) {
    // TODO:
  }

  protected onRequestError(error: unknown) {
    // TODO:
  }

  protected onResponse(response: AxiosResponse) {
    // TODO:
  }

  protected onResponseError(error: AxiosError) {
    // TODO:
  }
}

const accountService = new AccountService();

export {
  accountService as default
};
