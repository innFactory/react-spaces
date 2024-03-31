import * as React from "react";
import { action } from "@storybook/addon-actions";
import { ViewPort, BottomResizable } from "../..";
import { green, description } from "../Utils";

export default {
	title: "Basic examples/Custom resize handles",
};

export const SimpleExample = {
	render: () => (
		<ViewPort>
			<BottomResizable
				style={green}
				size="50%"
				onResizeStart={action("onResizeStart")}
				onResizeEnd={action("onResizeEnd")}
				trackSize
				handleRender={(props) =>
					["top", "bottom"].includes(props.key as string) && (
						<div
							{...props}
							style={{
								display: "flex",
								justifyContent: "center",
							}}>
							<div
								style={{
									position: "absolute",
									transform: "translateY(-50%)",
								}}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									className="bi bi-arrows-expand"
									viewBox="0 0 16 16">
									<path
										fillRule="evenodd"
										d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"
									/>
								</svg>
							</div>
						</div>
					)
				}>
				{description("I have an additional arrow on my handle")}
			</BottomResizable>
		</ViewPort>
	),

	name: "Simple example",
};
