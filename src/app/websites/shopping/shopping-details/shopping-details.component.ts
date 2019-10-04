import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listAnimation } from '../../utilitys/animation';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss', '../shopping.component.scss'],
  animations: [listAnimation]
})
export class ShoppingDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
 article = {
  id: '10',
  price: '149',
  image: '../../../assets/images/one.jpg'
};
  ngOnInit() {
   // alert(this.activatedRoute.snapshot.params.id);
  }
  addToChart(id) {
    console.log(id);
  }

}
