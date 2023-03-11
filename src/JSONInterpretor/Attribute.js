import {AttributeInvalidAttrError, AttributeInvalidContentError} from "./Errors";
import {AttributeEmptyContentWarning} from "./Warnings";

export const AttributeType = {
    class: "class"
}

/*
export function verifyAttributeValidity(attribute) {
    let err = false;

    switch (attribute) {
        case !attribute?.attr:
            throw new AttributeInvalidAttrError('Missing "attr" parameter in Attribute Metadata.');
            err=true;break;
        case !attribute?.content:
            throw new AttributeInvalidContentError('Missing "attr" parameter in Attribute Metadata.');
            err=true;break;
        case !attribute?.attr:
            throw new AttributeEmptyContentWarning();
            err=true;break;
    }

    if (!attribute?.attr) {
        throw new AttributeInvalidError('Missing "attr" parameter in Attribute Metadata.');
        return false;
    }
    if (!attribute?.content) {
        throw new AttributeInvalidError('Missing "attr" parameter in Attribute Metadata.');
        return false;
    }
    if (attribute.attr.equals(AttributeType.class))
        return true;
    return false;
}
 */
