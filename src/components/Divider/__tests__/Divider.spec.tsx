import { create } from "react-test-renderer"
import { Divider } from "../Divider"

describe("Divider", () => {
  it("render a component", () => {
    const divider = create(<Divider />).toJSON();
    expect(divider).toMatchSnapshot();
  });
});