import React, {Fragment} from 'react';
import {Month} from "../model/calendar";
import {makePretty} from "../mapper/calendar-prettier";
import Grid from "@mui/material/Unstable_Grid2";
import {Food, getFoodItems} from "../model/food";
import "./_month-grid.scss";
import {FoodPerMonths} from "../data/food-per-months";
import {iconRegistry} from "../icon-registry/icon-registry";
import notGrowing from "../assets/not-growing.png";

export type MonthGridProps = {
    month: Month
}

export default function MonthGrid(monthGridProps: MonthGridProps) {
    const month = monthGridProps.month;
    const foodForGivenMonth = FoodPerMonths[month];
    const getImageFor = (food: Food) => {
        const source = iconRegistry[food];
        return <img src={source}/>

    }

    return (
        <Grid
            key={month}
            xs={4}
            spacing={0}
            rowSpacing="16px"
            className="month-grid"
            container
        >
            <h4 className="month-title">{makePretty(month)}</h4>
            {
                getFoodItems().map(food => {
                    const isGrowing = foodForGivenMonth.includes(food);
                    return (
                        <Grid
                            key={food}
                            xs={12}
                            className={isGrowing ? 'growing' : 'not-growing'}>
                            {isGrowing ? getImageFor(food): <img src={notGrowing}/>}
                        </Grid>
                    )
                })
            }
        </Grid>

    );
}
