// @author: Gael Lopes Da Silva
// @project: Keybinded
// @github: https://github.com/Gael-Lopes-Da-Silva/KeybindedVSCode

const vscode = require('vscode');
const NormalMode = require('./modes/normal');
const InsertMode = require('./modes/insert');
const SelectMode = require('./modes/select');
const SearchMode = require('./modes/search');

var Editor = {
	Modes: {
		Normal: "NORMAL",
		Insert: "INSERT",
		Select: "SELECT",
		Search: "SEARCH",
	},
	Motions: {
		Word: "WORD",
		Char: "CHAR",
		Line: "LINE",
		SmallWord: "SMALLWORD",
		BigWord: "BIGWORD",
	},
	MotionsColor: {
		Word: undefined,
		Char: "#3498db",
		Line: "#9b59b6",
		SmallWord: "#e67e22",
		BigWord: "#e74c3c",
	},
	Cursors: {
		Block: vscode.TextEditorCursorStyle.Block,
		Line: vscode.TextEditorCursorStyle.Line,
		Underline: vscode.TextEditorCursorStyle.Underline,
		BlockOutline: vscode.TextEditorCursorStyle.BlockOutline,
	},
};

Editor.currentMode = Editor.Modes.Normal;
Editor.currentMotion = Editor.Motions.Word;

// ----------------------------------------------------

function activate(context) {
	changeCursorColor(Editor.MotionsColor.Word);
	context.subscriptions.push(
		vscode.commands.registerCommand('type', type),

		vscode.commands.registerCommand('keybinded.enterInsertMode', enterInsertMode),
		vscode.commands.registerCommand('keybinded.enterNormalMode', enterNormalMode),
		vscode.commands.registerCommand('keybinded.enterSelectMode', enterSelectMode),
		vscode.commands.registerCommand('keybinded.enterSearchtMode', enterSearchMode),

		vscode.commands.registerCommand('keybinded.enterWordMotion', enterWordMotion),
		vscode.commands.registerCommand('keybinded.enterCharMotion', enterCharMotion),
		vscode.commands.registerCommand('keybinded.enterLineMotion', enterLineMotion),
		vscode.commands.registerCommand('keybinded.enterSmallWordMotion', enterSmallWordMotion),
		vscode.commands.registerCommand('keybinded.enterBigWordMotion', enterBigWordMotion),

		vscode.window.onDidChangeTextEditorSelection(onDidChangeTextEditorSelection),
	);

	vscode.commands.executeCommand('setContext', 'keybinded.mode', Editor.currentMode);
	vscode.commands.executeCommand('setContext', 'keybinded.motion', Editor.currentMotion);
}

function deactivate() {
	changeCursorColor(Editor.MotionsColor.Word);
}

// ----------------------------------------------------

const normalMode = new NormalMode();
const insertMode = new InsertMode();
const selectMode = new SelectMode();
const searchMode = new SearchMode();

function type(event) {
	switch (Editor.currentMode) {
		case Editor.Modes.Normal: {
			normalMode.checkNormalModeInput(Editor, event);
		} break;

		case Editor.Modes.Select: {
			selectMode.checkSelectModeInput(Editor, event);
		} break;

		case Editor.Modes.Search: {
			searchMode.checkSearchModeInput(Editor, event);
		} break;

		case Editor.Modes.Insert: {
			insertMode.checkInsertModeInput(Editor, event);
		} break;

		default: {
			console.error("Mode without a case in 'type' function !");
		} break;
	}
}

function enterInsertMode() {
	Editor.currentMode = Editor.Modes.Insert;
	vscode.commands.executeCommand('setContext', 'keybinded.mode', Editor.currentMode);

	let activeTextEditor = vscode.window.activeTextEditor;
	if (!activeTextEditor) return;

	activeTextEditor.options.cursorStyle = Editor.Cursors.Line;
	activeTextEditor.options = activeTextEditor.options;
}

function enterNormalMode() {
	Editor.currentMode = Editor.Modes.Normal;
	vscode.commands.executeCommand('setContext', 'keybinded.mode', Editor.currentMode);

	let activeTextEditor = vscode.window.activeTextEditor;
	if (!activeTextEditor) return;

	activeTextEditor.options.cursorStyle = Editor.Cursors.Block;
	activeTextEditor.options = activeTextEditor.options;
}

function enterSelectMode() {
	Editor.currentMode = Editor.Modes.Select;
	vscode.commands.executeCommand('setContext', 'keybinded.mode', Editor.currentMode);

	let activeTextEditor = vscode.window.activeTextEditor;
	if (!activeTextEditor) return;

	activeTextEditor.options.cursorStyle = Editor.Cursors.Underline;
	activeTextEditor.options = activeTextEditor.options;
}

function enterSearchMode() {
	Editor.currentMode = Editor.Modes.Search;
	vscode.commands.executeCommand('setContext', 'keybinded.mode', Editor.currentMode);

	let activeTextEditor = vscode.window.activeTextEditor;
	if (!activeTextEditor) return;

	activeTextEditor.options.cursorStyle = Editor.Cursors.BlockOutline;
	activeTextEditor.options = activeTextEditor.options;
}

function enterWordMotion() {
	Editor.currentMotion = Editor.Motions.Word;
	vscode.commands.executeCommand('setContext', 'keybinded.motion', Editor.currentMotion);
	changeCursorColor(Editor.MotionsColor.Word);
}

function enterCharMotion() {
	Editor.currentMotion = Editor.Motions.Char;
	vscode.commands.executeCommand('setContext', 'keybinded.motion', Editor.currentMotion);
	changeCursorColor(Editor.MotionsColor.Char);
}

function enterLineMotion() {
	Editor.currentMotion = Editor.Motions.Line;
	vscode.commands.executeCommand('setContext', 'keybinded.motion', Editor.currentMotion);
	changeCursorColor(Editor.MotionsColor.Line);
}

function enterSmallWordMotion() {
	Editor.currentMotion = Editor.Motions.SmallWord;
	vscode.commands.executeCommand('setContext', 'keybinded.motion', Editor.currentMotion);
	changeCursorColor(Editor.MotionsColor.SmallWord);
}

function enterBigWordMotion() {
	Editor.currentMotion = Editor.Motions.BigWord;
	vscode.commands.executeCommand('setContext', 'keybinded.motion', Editor.currentMotion);
	changeCursorColor(Editor.MotionsColor.BigWord);
}

function onDidChangeTextEditorSelection(event) {
	const activeTextEditor = vscode.window.activeTextEditor;
	if (!activeTextEditor) return;

	if (!activeTextEditor.selection.isEmpty && Editor.currentMode !== Editor.Modes.Select) {
		enterSelectMode();
	}
}

function changeCursorColor(color) {
	vscode.workspace.getConfiguration("workbench").update("colorCustomizations", { "editorCursor.foreground": color }, true);
}

module.exports = {
	activate,
	deactivate
};