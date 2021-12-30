import * as assert from "assert";
import * as vscode from "vscode";
import { format } from "../../util";

suite("Util Test Suite", () => {
	test("format", () => {
		assert.strictEqual(format("Hello!"), "Hello!");
		assert.strictEqual(format("Hello!", "John"), "Hello!");
		assert.strictEqual(format("Hello {0}!", "John"), "Hello John!");
		assert.strictEqual(format("Hello {0} {1}!", "John", "Doe"), "Hello John Doe!");
		assert.strictEqual(format("Hello Mr. {1}!", "John", "Doe"), "Hello Mr. Doe!");
	});
});
