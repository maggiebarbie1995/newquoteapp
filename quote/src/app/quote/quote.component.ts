import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'Catherine Pulsifer','What you have accomplished in the past is a much stronger example than talking about what you are capable of doing in the future. Actions do speak louder than words!',new Date(2020,7,17)),
    new Quote(2,'Nathan Arthur,Mission Statement','Draw inspiration from other peoples lives The inspiring example of the people you admire is a great place to start with', new Date (2020,8,25)),
    new Quote(3,'Max Strom,A Life Worth Breathing','May we all become teachers of peace, and teach in the only way possible: by example',new Date(2020,4,20)),
    new Quote(4,'R. Morrison,Parenting','Around the age of one your child begins to imitate you with intent, they actively observe how you behave and seek clues in order to determine how they themselves should behave - thats a lot of pressure on you!',new Date(2020,7,27)),
    new Quote(5,'Author Unknown','Be careful how you live; you may be the only Bible some people ever read',new Date(2019,0,18)),
    new Quote(6,'David Leads,Relationship Up','One of the best ways to teach a child anything is by doing it yourself. Leading by example requires no scolding or complicated instructions. Your child will see what you do and copy it',new Date(2020,10,15)),
    new Quote(7,'John Locke','Manners are rather to be learnt by example than by rules',new Date(2020,3,14)),
    new Quote(8,'Seneca','It is difficult to bring people to goodness with lessons, but it is easy to do so by example',new Date(2020,1,12)),
    new Quote(9,'Bernadette Dimitrov','Remember that you cannot truly change anyone else you can only change yourself. You either positively or negatively influence others by your example',new Date(2020,12,25)),
    new Quote(10,'Giorgio Armani','I love things that age well - things that dont date, that stand the test of time and that become living examples of the absolute best',new Date(2020,3,14))
  ];


  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  completeGoal(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
