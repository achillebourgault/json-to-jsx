export function ErrorPanel(props) {
    return (
        <div>
            {props.error}
        </div>
    )
}

export function JSONSyntaxError(message) {
    this.name = 'JSONSyntaxError';
    this.message = '[JSONSyntaxError]' + (message || '');
    let error = new Error(this.message);
    error.name = this.name;
    this.stack = error.stack;
}

export function AttributeInvalidContentError(message) {
    this.name = 'AttributeInvalid';
    this.message = message || '';
    let error = new Error(this.message);
    error.name = this.name;
    this.stack = error.stack;
}
