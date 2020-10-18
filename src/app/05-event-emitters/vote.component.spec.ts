import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should return voteChanged event when upVoted', () => {
    let totalVotes = null;

    component.voteChanged.subscribe(tv => totalVotes = tv);

    component.upVote();

    expect(totalVotes).toBe(1);

  });
});