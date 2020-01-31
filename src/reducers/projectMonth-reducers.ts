/* eslint-disable no-param-reassign */
import moment from 'moment';
import {ACTION_TYPES} from '../actions';
import {ProjectMonthModel} from '../components/project/models/ProjectMonthModel';

// TODO: We will not fetch all months, but just the months with status != OK

function mapProject(prj: ProjectMonthModel) {
  prj.month = moment(prj.month);
  return prj;
}


export const projectsMonth = (state: ProjectMonthModel[] = [], action): ProjectMonthModel[] => {
  switch (action.type) {
    case ACTION_TYPES.PROJECTS_MONTH_FETCHED:
      return action.projectsMonth.map(mapProject);
    default:
      return state;
  }
};
