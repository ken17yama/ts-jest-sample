import { Respond } from './respond'

test('test', () => {
	expect(new Respond('Yamada').getCall()).toBe('こんにちは！Yamadaだよ！')
})
