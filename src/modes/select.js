const vscode = require('vscode');

module.exports = class SelectMode {
	checkSelectModeInput(editor, event) {
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