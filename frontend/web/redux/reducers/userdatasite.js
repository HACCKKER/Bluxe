import { SET_USERDATASITE } from "../constants";

const initialState = {
    ip: "",
    continent: "",
    country: ""
};

const userdatasite = (state = initialState, {type, ip, country, continent}) => {
    switch (type) {
        case SET_USERDATASITE:
            return {
                ...state,
                ip,
                continent,
                country
            };
        default: return state;
 }
}
export default userdatasite;