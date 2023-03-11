import {JsxElement} from "./Component/JsxElement";

import dataModel from "../models/model-2.json"

const demoData = dataModel;

export function JsxCustomJSONTest() {
    return <JsxElement metaData={demoData} />
}
