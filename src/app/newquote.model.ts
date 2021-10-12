export class Newquote{
  name: string
  quote: string
  votes: number

  constructor(name: string, quote: string, votes?: number){
    this.name = name
    this.quote = quote
    this.votes = votes || 0
  }

  voteUp(){
    this.votes = this.votes + 1
  }
  
  voteDown(){
    this.votes = this.votes - 1
  }
}