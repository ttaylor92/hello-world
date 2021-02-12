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
  

  // ------------------------------------------------------------------------
  // Getters
  // ------------------------------------------------------------------------
  

  // ------------------------------------------------------------------------
  // Actions
  // ------------------------------------------------------------------------
  @MultiParamAction()
  public async login() {
    //
  }


}

const user = getMultiParamModule<Store>(Store, store);

export {
    user
};
