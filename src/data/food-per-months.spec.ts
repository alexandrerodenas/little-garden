import {foodIsGrowingInThisMonth} from "./food-per-months";
import {Food} from "../model/food";
import {Month} from "../model/calendar";

describe("Testing food per months", () =>  {

    test("testing some items", () => {
        expect(
            foodIsGrowingInThisMonth(
                Food.CITRON,
                Month.DECEMBER
            )
        ).toBeTruthy();

        expect(
            foodIsGrowingInThisMonth(
                Food.BANANA,
                Month.NOVEMBER
            )
        ).toBeFalsy();
    });
});
