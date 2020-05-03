import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { Bottom } from "../../Anchored";
import "@testing-library/jest-dom/extend-expect";
import { ViewPort } from "../../ViewPort";
import { commonPropsTests } from "../Common";

afterEach(cleanup);

commonPropsTests("Bottom", <Bottom size={50} />, {
	position: "absolute",
	left: "0px",
	top: "",
	right: "0px",
	bottom: "0px",
	width: "",
	height: "50px",
});

test("Bottom stacked has correct styles", async () => {
	const { container } = render(
		<ViewPort>
			<Bottom id="test" size={10} order={0} />
			<Bottom id="test1" size={10} order={1} />
		</ViewPort>,
	);
	const sut = container.querySelector("#test")!;
	const style = window.getComputedStyle(sut);

	expect(style.left).toBe("0px");
	expect(style.top).toBe("");
	expect(style.right).toBe("0px");
	expect(style.bottom).toBe("0px");
	expect(style.width).toBe("");
	expect(style.height).toBe("10px");

	const sut1 = container.querySelector("#test1")!;
	const style1 = window.getComputedStyle(sut1);

	expect(style1.left).toBe("0px");
	expect(style1.top).toBe("");
	expect(style1.right).toBe("0px");
	expect(style1.bottom).toBe("calc(0px + 10px)");
	expect(style1.width).toBe("");
	expect(style1.height).toBe("10px");
});

test("Bottom stacked reversed has correct styles", async () => {
	const { container } = render(
		<ViewPort>
			<Bottom id="test1" size={10} order={1} />
			<Bottom id="test" size={10} order={0} />
		</ViewPort>,
	);
	const sut = container.querySelector("#test")!;
	const style = window.getComputedStyle(sut);

	expect(style.left).toBe("0px");
	expect(style.top).toBe("");
	expect(style.right).toBe("0px");
	expect(style.bottom).toBe("0px");
	expect(style.width).toBe("");
	expect(style.height).toBe("10px");

	const sut1 = container.querySelector("#test1")!;
	const style1 = window.getComputedStyle(sut1);

	expect(style1.left).toBe("0px");
	expect(style1.top).toBe("");
	expect(style1.right).toBe("0px");
	expect(style1.bottom).toBe("calc(0px + 10px)");
	expect(style1.width).toBe("");
	expect(style1.height).toBe("10px");
});