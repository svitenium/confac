import request from 'superagent-bluebird-promise';
import {catchHandler} from './utils/fetch';
import {buildUrl} from './utils/buildUrl';
import t from '../trans';
import {ConsultantModel} from '../components/consultant/models/ConsultantModel';
import {busyToggle, success} from './appActions';
import {ACTION_TYPES} from './utils/ActionTypes';


export function saveConsultant(consultant: ConsultantModel, callback?: (savedConsultant: ConsultantModel) => void, history?: any) {
  return dispatch => {
    dispatch(busyToggle());
    return request
      .post(buildUrl('/consultants'))
      .set('Content-Type', 'application/json')
      .send(consultant)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.CONSULTANT_UPDATE,
          consultant: response.body,
        });
        success(t('config.popupMessage'));
        if (history) {
          history.push('/consultants');
        }
        if (callback) {
          callback(response.body);
        }
      })
      .catch(catchHandler)
      .then(() => dispatch(busyToggle.off()));
  };
}
