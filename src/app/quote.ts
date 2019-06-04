export class Quote {
    public showDescription:boolean
    constructor(public author:string, public quote:string, public name:string, public upvote:number, public downvote:number, public postDate:Date){
        this.showDescription=false

    }
}
