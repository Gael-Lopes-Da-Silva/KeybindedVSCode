const vscode = require('vscode');

module.exports = class InsertMode {
	checkInsertModeInput(editor, event) {
		vscode.commands.executeCommand('default:type', event);
	}
}