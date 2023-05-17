import React from 'react';
import {getMonthsFor, Season, Seasons} from "../model/calendar";
import Grid from '@mui/material/Unstable_Grid2';
import './_year-grid.scss';
import SeasonGrid from '../season-grid/season-grid';
import VegetablesAndFruitsList from "../vegetables-and-fruits-list/vegetables-and-fruits-list";

export default function YearGrid() {

    return (
        <Grid
            className={"year-grid"}
            marginTop="50px"
            container
            spacing={2}>
            <VegetablesAndFruitsList></VegetablesAndFruitsList>
            {
                Object
                    .keys(Seasons)
                    .map(season => (
                            <Grid className={`${season}-background`} key={season} xs={2}>
                                <SeasonGrid season={(season as Season)}></SeasonGrid>
                            </Grid>
                        )
                    )
            }
        </Grid>
    );
}
