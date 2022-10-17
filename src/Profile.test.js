import React from "react";
import {render} from '@testing-library/react'
import Profile from "./Profile";

describe('<Profile />', () => {
    it("matches snapshot", () => {
        const utils = render(<Profile username='inbn6619' name='조의영' />);
        expect(utils.container).toMatchSnapshot();
    });
    it("shows the props correctly", () => {
        const utils = render(<Profile username="inbn6619" name="조의영" />);
        utils.getByText("inbn66191")
        utils.getByText("(조의영)")
        // utils.getByText("inbn6619 (조의영)")
    });
});