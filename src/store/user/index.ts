import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { getMultiParamModule, MultiParamAction } from '@/modules/core';
import accountService from '@/services/account.service';
import store from '../index';

const MODULE_NAME = 'User';

@Module({ namespaced: true, name: MODULE_NAME, dynamic: true, store })
class Store extends VuexModule {
  // ------------------------------------------------------------------------
  // Fields
  // ------------------------------------------------------------------------
  private isVerified = false;

  // ------------------------------------------------------------------------
  // Getters
  // ------------------------------------------------------------------------
  public get verified() {
    return this.isVerified;
  }

  // ------------------------------------------------------------------------
  // Mutations
  // ------------------------------------------------------------------------
  @Mutation
  private setVerified(value: boolean) {
    this.isVerified = value;
  }

  // ------------------------------------------------------------------------
  // Actions
  // ------------------------------------------------------------------------
  @MultiParamAction()
  public login() {
    this.setVerified(true);
  }


}

const user = getMultiParamModule<Store>(Store, store);

export {
    user as default
};
