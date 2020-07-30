import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Catherine Pulsifer'},
    {id:2,name:'Nathan Arthur,Mission Statement'},
    {id:3,name:'Max Strom,A Life Worth Breathing'},
    {id:4,name:'R. Morrison,Parenting'},
    {id:5,name:'Author Unknown'},
    {id:6,name:'David Leads,Relationship Up'},
    {id:7,name:'John Locke'},
    {id:8,name:'Seneca'},
    {id:9,name:'Bernadette Dimitrov'},
    {id:10,name:'Giorgio Armani'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
