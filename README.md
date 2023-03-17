# JSON To JSX

The objective of this project is to transform and render JSON elements into JSX components.

## How to use

```javascript
import JsxElement from "@achillebourgault/json-to-jsx";
import demoData from "./models/model-1.json"

export function JsxCustomJSONTest() {
    return <JsxElement metaData={demoData} />
}
```
## Examples of JSON Data Models

Here is an example from [models-1.json](src/models/model-1.json)

```json
{
  "type": "div",
  "attributes": {
    "className": "test",
    "style": {
      "background": "beige"
    }
  },
  "children": []
}
```

> All elements must have a `type` parameter and the type names are the same as in JSX.

Example of a **JSON Data Model** that displays an `<a>` tag:

```json
{
  "type": "a",
  "attributes": {
    "style": {
      "textAlign": "center"
    },
    "href": "https://google.com"
  },
  "text": "Test link"
}
```

> [All Demo Data Models](https://github.com/achillebourgault/json-to-jsx/tree/main/src/models)
- [Models-1.json](https://github.com/achillebourgault/json-to-jsx/tree/main/src/models/model-1.json)
- [Models-2.json](https://github.com/achillebourgault/json-to-jsx/tree/main/src/models/model-2.json)
