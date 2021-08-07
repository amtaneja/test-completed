import {apiActionTypes}  from './apiActionTypes';
import {api} from '../../scripts/api';

export const apiActions = {
    getUniversities
};

function getUniversities(country){
    return dispatch => {
        dispatch(request());
        api.getUniversities(country)
            .then((data) => { 
                    dispatch(success(data));
                }).catch((error) => {
                    dispatch(failure(error));
                }
            );
    };

    function request() { return { type: apiActionTypes.GET_UNIVERSITIES_REQUEST } }
    function success(data) { return { type: apiActionTypes.GET_UNIVERSITIES_SUCCESS, data } }
    function failure(error) { return { type: apiActionTypes.GET_UNIVERSITIES_FAILURE, error } }
}