import {ComponentType} from "./Component";
import {formatAttributeArray, formatAttributeStyleArray} from "../Utils";
import {ErrorPanel} from "../Errors";

function renderChildren(children) {
    return (
        children !== undefined && children.map((child, index) => {
            return (
                <JsxElement metaData={child} key={index}/>
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
        case ComponentType.A:
            return (
                <a
                    className={attributes?.class ? formatAttributeArray(attributes.class.content) : undefined}
                    style={attributes?.style ? formatAttributeStyleArray(attributes?.style?.content) : undefined}
                    href={attributes?.href ? attributes.href : undefined}
                >
                    { children.at(0) !== undefined && children.at(0).rawContent }
                </a>
            )
    }
    return <ErrorPanel
        error={"Invalid JSON element"}
        message={"Got undefined type \"" + type + "\""}
        code={"<" + type + "     .. />"}
    />;
}
