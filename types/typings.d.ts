declare namespace toastui {
	class Editor {
		constructor(options: any);
		on: (event: string, callback: Function) => void;
		getMarkdown: () => string;
		getHTML: () => string;
		removeHook: (type: string) => void;
		addHook: (type: string, handler: Function) => void;
		setHeight: (height: string) => void;
		focus: () => void;
	}
}
