# JSON To JSX

The objective of this project is to transform and render JSON elements into JSX components.

## Test the project

In the project directory, you can run `npm start` to run the app in the development mode.\
\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to use

```javascript
import {JsxElement} from "./Component/JsxElement";

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
    "class": {
      "content": ["test"]
    },
    "style": {
      "content": [
        { "key": "background", "value": "beige"}
      ]
    }
  },
  "children": []
}
```

> All elements must have a `type` parameter.

The type names are the same as in HTML except for elements that display text. In this case the type must be "RAW_TEXT".

Example of a **JSON Data Model** that displays an `h1` tag:

```json
{
  "type": "a",
  "attributes": {
    "style": {
      "content": [
        { "key": "textAlign", "value": "center" }
      ]
    },
    "href": "https://google.com"
  },
  "children": [
    {
      "type": "RAW_TEXT",
      "rawContent": "Test link"
    }
  ]
}
```

> [All Demo Data Models](https://github.com/achillebourgault/json-to-jsx/tree/main/src/models)
- [Models-1.json](src/models/model-1.json)
- [Models-2.json](src/models/model-2.json)
