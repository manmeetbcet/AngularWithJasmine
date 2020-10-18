import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() =>{
    //set up
    component = new VoteComponent();
  })

  // afterEach(() =>{
  //   //tear down -- do clean up here
  // })
  
  it('should increment total votes when upvoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });
  it('should decrement total votes when downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });

});