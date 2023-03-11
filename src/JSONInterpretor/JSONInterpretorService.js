import {ComponentType} from "./Component/Component";
import {AttributeType} from "./Attribute";
import {JsxElement} from "./Component/JsxElement";

const demoData = {
    type: ComponentType.DIV,
    attributes: {
        class: {
            content: ["test", "testClassB"]
        }
    },
    children: [
        {
            type: ComponentType.DIV,
            attributes: {
                style: {
                    content: [
                        {key: "height", value: "400px"},
                        {key: "width", value: "100%"},
                        {key: "background", value: "blue"}
                    ],
                }
            }
        },
        {
            type: ComponentType.DIV,
            attributes: {
                style: {
                    content: [
                        {key: "height", value: "400px"},
                        {key: "width", value: "100%"},
                        {key: "background", value: "yellow"}
                    ],
                }
            }
        }
    ]
}

export function JsxCustomJSONTest() {
    return <JsxElement metaData={demoData} />
}
