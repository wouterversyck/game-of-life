import Game  from './Game';

test('My Game', () => {
    const game = new Game();
    expect(game.test()).toBe('hello');
});