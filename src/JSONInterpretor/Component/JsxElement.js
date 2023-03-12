import {ComponentType} from "./Component";
import {formatAttributeArray, formatAttributeStyleArray} from "../Utils";
import {ErrorPanel} from "../Errors";

export const ComponentType = {
    DIV: 'div',
    A: 'a',
    SPAN: 'span',
    BUTTON: 'button',
    IMAGE: 'image',
    H1: 'h1',
    RAW_TEXT: ''
}

//Documentation React createElement
//https://beta.reactjs.org/reference/react/createElement#creating-an-element-without-jsx
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
                    { children.at(0) !== undefined && children.at(0)?.rawContent }
                </a>
            )
    }
    return <ErrorPanel
        error={"Invalid JSON element"}
        message={"Got undefined type \"" + type + "\""}
        code={"<" + type + "     .. />"}
    />;
}

function renderChildren(children) {
    return (
        children !== undefined && children.map((child, index) => {
            return (
                <JsxElement metaData={child} key={index}/>
            )
        })
    )
}