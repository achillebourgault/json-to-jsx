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
        },
        {
            type: ComponentType.DIV,
            attributes: {
                style: {
                    content: [
                        {key: "height", value: "400px"},
                        {key: "width", value: "100%"},
                        {key: "background", value: "magenta"}
                    ],
                }
            }
        },
        {
            type: ComponentType.A,
            attributes: {
                style: {
                    content: [
                        {key: "background", value: "aqua"},
                        {key: "textAlign", value: "center"}
                    ],
                },
                href: 'https://google.com'
            },
            children: [
                {
                    type: ComponentType.RAW_TEXT,
                    rawContent: "Test link"
                }
            ]
        }
    ]
}

export function JsxCustomJSONTest() {
    return <JsxElement metaData={demoData} />
}
