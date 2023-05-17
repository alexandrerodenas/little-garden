import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import "./_vegetables-and-fruits-list.scss";
import {getFoodNamesInFrench} from "../model/food";

export default function VegetablesAndFruitsList() {
    return (
        <Grid container xs={3} spacing={2}>
            <h4 className="food-title">Vegetable & Fruits</h4>
                {
                    getFoodNamesInFrench().map(foodName => (
                        <Grid key={foodName} xs={12} className="food-name">{foodName}</Grid>
                    ))
                }
        </Grid>
    );
}
