// @flow
import { combineReducers } from 'redux'

import Auth from './auth/reducers'
import Layout from './layout/reducers'

const reducers = combineReducers({
  Auth,
  Layout,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
