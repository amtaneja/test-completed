import { utils } from './utils';
export const api = {
    getUniversities
};

function getUniversities(country){
    return utils.makeWebRequest(`http://universities.hipolabs.com/search?country=${country}`,"GET");
}