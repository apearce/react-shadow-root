export default class IllegalNodeError extends Error {
  constructor(node) {
    super();

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, IllegalNodeError);
    }

    this.name = "IllegalNodeError";
    this.message = `Only STYLE nodes are valid. ${node.nodeName} nodes are not.`;
    this.illegalNode = node;
  }
}
