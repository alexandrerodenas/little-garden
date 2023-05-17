import {Seasons} from "./calendar";

describe("Calendar", () => {
    test('Can display all season names', () => {
        expect(Object.keys(Seasons))
            .toEqual(
                [
                    "winter",
                    "spring",
                    "summer",
                    "autumn"
                ]
            )
    });

});
