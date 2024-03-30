const vscode = require('vscode');

module.exports = class NormalMode {
	checkNormalModeInput(editor, event) {
		switch (editor.currentMotion) {
			case editor.Motions.Word: {
				switch (event.text) {
					case "j": {
					} break;

					case "k": {
					} break;

					case "h": {
					} break;

					case "l": {
					} break;

					default: {
						this.checkGeneralMotionInput(editor, event);
					} break;
				}
			} break;

			case editor.Motions.Char: {
				switch (event.text) {
					case "j": {
						vscode.commands.executeCommand("cursorMove", { to: "down" });
					} break;

					case "k": {
						vscode.commands.executeCommand("cursorMove", { to: "up" });
					} break;

					case "h": {
						vscode.commands.executeCommand("cursorMove", { to: "left" });
					} break;

					case "l": {
						vscode.commands.executeCommand("cursorMove", { to: "right" });
					} break;

					case "d": {
						vscode.commands.executeCommand("deleteRight");
					} break;

					default: {
						this.checkGeneralMotionInput(editor, event);
					} break;
				}
			} break;

			case editor.Motions.Line: {
				switch (event.text) {
					case "j": {
					} break;

					case "k": {
					} break;

					case "h": {
					} break;

					case "l": {
					} break;

					default: {
						this.checkGeneralMotionInput(editor, event);
					} break;
				}
			} break;

			case editor.Motions.SmallWord: {
				switch (event.text) {
					case "j": {
					} break;

					case "k": {
					} break;

					case "h": {
					} break;

					case "l": {
					} break;

					default: {
						this.checkGeneralMotionInput(editor, event);
					} break;
				}
			} break;

			case editor.Motions.BigWord: {
				switch (event.text) {
					case "j": {
					} break;

					case "k": {
					} break;

					case "h": {
					} break;

					case "l": {
					} break;

					default: {
						this.checkGeneralMotionInput(editor, event);
					} break;
				}
			} break;

			default: {
				console.error("Motion without a case in 'checkNormalModeInput' function !");
			} break;
		}
	}

	checkGeneralMotionInput(editor, event) {
		switch (event.text) {
			case "i": {
				vscode.commands.executeCommand("keybinded.enterInsertMode");
			} break;

			case "I": {
				vscode.commands.executeCommand("cursorLineStart");
				vscode.commands.executeCommand("keybinded.enterInsertMode");
			} break;

			case "a": {
				vscode.commands.executeCommand("cursorMove", { to: "right" });
				vscode.commands.executeCommand("keybinded.enterInsertMode");
			} break;

			case "A": {
				vscode.commands.executeCommand("cursorLineEnd");
				vscode.commands.executeCommand("keybinded.enterInsertMode");
			} break;

			case "o": {
				vscode.commands.executeCommand("editor.action.insertLineAfter");
			} break;

			case "O": {
				vscode.commands.executeCommand("editor.action.insertLineBefore");
			} break;

			case "v": {
				vscode.commands.executeCommand("keybinded.enterSelectMode");
			} break;

			case "/": {
				vscode.commands.executeCommand("keybinded.enterSearchtMode");
			} break;

			case "w": {
				vscode.commands.executeCommand("keybinded.enterWordMotion");
			} break;

			case "W": {
				vscode.commands.executeCommand("keybinded.enterBigWordMotion");
			} break;

			case "s": {
				vscode.commands.executeCommand("keybinded.enterSmallWordMotion");
			} break;

			case "r": {
				vscode.commands.executeCommand("keybinded.enterCharMotion");
			} break;

			case "x": {
				vscode.commands.executeCommand("keybinded.enterLineMotion");
			} break;

			default: { } break;
		}
	}
}