import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface OAUTHResponse {
  invalid_token: string;
}

// ----------------------------------------------------------------------------
// Module Vars
// ----------------------------------------------------------------------------
const API_TIMEOUT = 45000; // 45 seconds

class BaseService {
  protected api: AxiosInstance;

  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor(api: AxiosRequestConfig | string) {
    const baseURL = typeof api === 'string' ? api : undefined;
    const overrides = typeof api === 'object' ? api : {};
    const options = {
      timeout: API_TIMEOUT,
      headers: {},
      baseURL
    };
    this.api = axios.create({ ...options, ...overrides });
    this.init();
  }
  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------
  private init() {
    const { interceptors } = this.api;
    interceptors.request.use((config) => {
      this.onRequest(config);

      return config;
    }, async (error: unknown) => {
      this.onRequestError(error);

      return Promise.reject(error);
    });
    interceptors.response.use((response) => {
      this.onResponse(response);

      return response;
    }, async (error: unknown) => {
      // Handle response errors here
      this.onResponseError(error);

      return Promise.reject(error);
    });
  }

  // --------------------------------------------------------------------------
  // Event Handlers
  // --------------------------------------------------------------------------
  protected onRequest(config: AxiosRequestConfig) {
    // TODO: override
  }
  protected onRequestError(error: unknown) {
    // TODO: override
  }
  protected onResponse(response: AxiosResponse) {
    // TODO: override
  }
  protected onResponseError(error: unknown) {
    //
  }
}

export {
  BaseService,
};

