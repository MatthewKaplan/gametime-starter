import chai from 'chai';
import Player from '../src/Player.js'
const expect = chai.expect;

describe ('Player', () => {

  let player;
  beforeEach(() => {
    player = new Player();
  })

  it('should have default properties', () => {
    expect(player.name).to.equal(undefined);
    expect(player.score).to.equal(undefined || 0);
  })

  it('should be an instance of Player', () => {
    expect(player).to.be.an.instanceof(Player);
  })

  it ('should be able to create a new instance of Player with a name', () => {
    const player = new Player('Matthew');
    expect(player.name).to.equal('Matthew');
  })

  it ('should be able to create a new instance of Player with a score', () => {
    const player = new Player(0);
    expect(player.score).to.equal(0);
  }) 

  it ('should be able to subtract from player score', () => {
    const player = new Player('Matthew', 100);
    player.ddWrong(10);
    expect(player.score).to.equal(80);
  })

  it ('should be able to add to player score', () => {
    const player = new Player('Matthew', 100);
    player.ddCorrect(10);
    expect(player.score).to.equal(120);
  })

})








