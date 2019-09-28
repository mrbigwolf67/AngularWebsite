import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { listAnimation, slideInAnimation } from '../utilitys/animation';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
  animations: [listAnimation, slideInAnimation ]
})
export class ShoppingComponent implements OnInit {


  constructor(private shoppingService: ShoppingService) {}
  articles = [];
  hide = false;
  ngOnInit() {
    this.articles = this.shoppingService.getLadyArticles();
    this.hide = false;
  }

  addToChart(id) {
    const ID = '#' + id;
    const cart = $('.shopping-cart');
    const imgtodrag = $('.add-to-cart')
      .parent(ID)
      .find('img')
      .eq(0);
    if (imgtodrag.length > 0) {
      const imgclone = imgtodrag
        .clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
        })
        .css({
          opacity: '0.8',
          position: 'absolute',
          height: '150px',
          width: '150px',
          'z-index': '100'
        })
        .appendTo($('main'))
        .animate(
          {
            top: cart.offset().top + 10,
            left: cart.offset().left + 10,
            width: 75,
            height: 75
          },
          1000,
        );

      imgclone.animate(
        {
          width: 0,
          height: 0
        },
        function() {
          $(this).detach();
        }
      );
    }
  }

  hideArticles() {
    if(!this.hide) {
      this.hide = true;
    } else {
      this.hide = false;
    }

  }

}
