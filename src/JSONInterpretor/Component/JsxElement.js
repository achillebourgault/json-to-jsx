import {ComponentType} from "./Component";
import {formatAttributeArray, formatAttributeStyleArray} from "../Utils";
import {ErrorPanel} from "../Errors";

function renderChildren(children) {
    return (
        children !== undefined && children.map((children, index) => {
            return (
                <JsxElement metaData={children} key={index}/>
            )
        })
    )
}
export function JsxElement(props) {
    const type = props.metaData.type;
    const attributes = props.metaData?.attributes;
    const children = props.metaData?.children;

    switch (type) {
        case ComponentType.DIV:
            return (
                <div
                    className={attributes?.class ? formatAttributeArray(attributes.class.content) : undefined}
                    style={attributes?.style ? formatAttributeStyleArray(attributes?.style?.content) : undefined}
                >
                    { renderChildren(children) }
                </div>
            )
    }
    return <ErrorPanel error={"Invalid JSON"} />;
}
