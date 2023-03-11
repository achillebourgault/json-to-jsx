export function formatAttributeArray(attributeArray) {
    let res = "";

    for (let index = 0; index < attributeArray.length; index++)
        res += attributeArray[index] +(index + 1 !== attributeArray.length ? " " : "");
    return res;
}

export let formatAttributeStyleArray = (attributeArray) => {
    let res = '{';

    for (let index = 0; index < attributeArray.length; index++)
        res += (
            '"'+attributeArray[index].key + '": "' + attributeArray[index].value + '"'
        ) + (index + 1 !== attributeArray.length ? ',' : '');
    res += '}';
    console.log(res)
    return JSON.parse(res);
}
