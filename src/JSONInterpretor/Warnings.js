export function AttributeEmptyContentWarning() {
    this.name = 'AttributeEmptyContent';
    this.message = '[WARNING] "content" in "attr" is empty. Unnecessary Attribute.' || '';
    let warning = new Error(this.message);
    warning.name = this.name;
}
