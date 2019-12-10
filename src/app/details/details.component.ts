import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  array1: any;
data1:any;
  sam: string;
  constructor( private http:HttpClient) { }
  getdata(){
    this.http.get("https://hn.algolia.com/api/v1/search_by_date?tags=story").subscribe(resp=>{
 
this.data1=resp['hits']

console.log(this.data1)

  })
}

  ngOnInit() {
    this.getdata();
  //   setInterval(x=>{
  //     this.getdata();
  // },1000)
  }
  

 select(data){
   this.sam=JSON.stringify(data)
 }

 

}
