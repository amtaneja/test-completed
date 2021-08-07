import {apiActionTypes} from '../actions/apiActionTypes';

const initialState = { universities : []};

export function api(state = initialState, action) {
  switch (action.type) {
    case apiActionTypes.GET_UNIVERSITIES_REQUEST:
      return {...state,
        loadingUniversitiesData : true
    }; 
    case apiActionTypes.GET_UNIVERSITIES_SUCCESS:
      return {...state,
        universitiesDataLoaded : true,
        loadingUniversitiesData:false,
        universities : action.data
    };    
    case apiActionTypes.GET_UNIVERSITIES_FAILURE:
      return {...state,
        error : action.error,
        universitiesDataLoaded : false,
        loadingUniversitiesData:false
    };   
    default:
        return state
    }
}