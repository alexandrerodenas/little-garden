import React, {Fragment} from 'react';
import {getMonthsFor, Month, Season} from "../model/calendar";
import Grid from "@mui/material/Unstable_Grid2";
import {makePretty} from "../mapper/calendar-prettier";
import "./_season-grid.scss";
import MonthGrid from "../month-grid/month-grid";
import {FoodPerMonths} from "../data/food-per-months";

export type SeasonGridProps = {
    season: Season
}

export default function SeasonGrid(seasonGridProps: SeasonGridProps) {
    return (
        <Fragment>
            <h4 className={`title ${seasonGridProps.season}-color`}>{seasonGridProps.season.toUpperCase()}</h4>
            <Grid container xs={12}>
                {
                    getMonthsFor(seasonGridProps.season).map(month => (
                        <MonthGrid key={month} month={month}></MonthGrid>
                    ))
                }
            </Grid>
        </Fragment>
    );
}
