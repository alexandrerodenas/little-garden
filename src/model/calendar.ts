import {Food} from "./food";

export enum Month {
    JANUARY,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER
}

const FrenchTranslation: Record<Month, string> = {
    [Month.JANUARY]: "Janvier",
    [Month.FEBRUARY]: "Février",
    [Month.MARCH]: "Mars",
    [Month.APRIL]: "Avril",
    [Month.MAY]: "Mai",
    [Month.JUNE]: "Juin",
    [Month.JULY]: "Juillet",
    [Month.AUGUST]: "Aout",
    [Month.SEPTEMBER]: "Septembre",
    [Month.OCTOBER]: "Octobre",
    [Month.NOVEMBER]: "Novembre",
    [Month.DECEMBER]: "Décembre"
}

export function getInFrench(month: Month): string {
    return FrenchTranslation[month];
}


export type Season = "winter" | "spring" | "autumn" | "summer";

export const Seasons: Record<Season, Month[]> = {
    ["winter"]: [
        Month.DECEMBER,
        Month.JANUARY,
        Month.FEBRUARY
    ],
    ["spring"]: [
        Month.MARCH,
        Month.APRIL,
        Month.MAY
    ],
    ["summer"]: [
        Month.JUNE,
        Month.JULY,
        Month.AUGUST
    ],
    ["autumn"]: [
        Month.SEPTEMBER,
        Month.OCTOBER,
        Month.NOVEMBER
    ]
};

export function getMonthsFor(seasonName: string): Month[] {
    return Seasons[(seasonName as Season)];
}
