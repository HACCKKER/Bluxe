import { 
    SET_USERDATASITE
} from "../constants";

export const setUserDataSite = (payload) => ({
    type: SET_USERDATASITE,
    ip: payload.ip,
    continent: payload.continent,
    country: payload.country
});