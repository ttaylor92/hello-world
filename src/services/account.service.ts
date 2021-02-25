import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { BaseService } from './_base';
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";




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

  public async getData() {
    const response = {
      data: null,
      passed: false,
      error: null
    }

    try {
      response.data = await request({ url: "https://httpbin.org/get", method: "GET" });
    } catch(error) {
      response.error = error;
    }

    return response;
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
