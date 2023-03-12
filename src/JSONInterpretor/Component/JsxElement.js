import {createElement, isValidElement} from "react";

export function JsxElement(props) {
    const type = props.metaData?.type;
    const attributes = props.metaData?.attributes;
    const children = props.metaData?.children;
    const text = props.metaData?.text;

    /*
    if (!isValidElement(props.metaData)) {
        return <ErrorPanel
            error={"Invalid JSON element"}
            message={"Got undefined type \"" + type + "\""}
            code={"<" + type + "     .. />"}
        />;
    }
     */

    if (type !== undefined && type !== null) {
        return createElement(
            type,
            attributes,
            text,
            renderChildren(children)
        );
    }
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
