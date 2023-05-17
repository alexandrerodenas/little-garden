import {getInFrench, Month} from "../model/calendar";

export function makePretty(monthEnumCardinal: Month) {
    return getInFrench(monthEnumCardinal).substring(0, 3).toUpperCase();
}
