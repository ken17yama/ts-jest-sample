export class Respond {
	constructor(private name: string) { }

	getCall() {
		return `こんにちは！${this.name}だよ！`
	}
}
