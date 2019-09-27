import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate
} from '@angular/animations';
// import * as effect from 'jquery-ui-dist/jquery-ui';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
  animations: [

    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-50px)' }),
            stagger(
              '150ms',
              animate(
                '500ms ease-in',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [animate('500ms', style({ opacity: 0, transform: 'rotate(90deg)' }))],
          {
            optional: true,
          },
        )
      ])
    ])
  ]
})
export class ShoppingComponent implements OnInit {

articles = [
  {
    id: '1',
    price: '149',
    image: '../../../assets/images/one.jpg'
  },
  {
    id: '2',
    price: '199',
    image: '../../../assets/images/two.jpg'
  },
  {
    id: '3',
    price: '129',
    image: '../../../assets/images/three.jpg'
  },
  {
    id: '4',
    price: '149',
    image: '../../../assets/images/one.jpg'
  },
  {
    id: '5',
    price: '199',
    image: '../../../assets/images/two.jpg'
  },
  {
    id: '6',
    price: '129',
    image: '../../../assets/images/three.jpg'
  }
  ,
  {
    id: '7',
    price: '149',
    image: '../../../assets/images/one.jpg'
  },
  {
    id: '8',
    price: '199',
    image: '../../../assets/images/two.jpg'
  },
  {
    id: '9',
    price: '129',
    image: '../../../assets/images/three.jpg'
  },
  {
    id: '10',
    price: '149',
    image: '../../../assets/images/one.jpg'
  },
  {
    id: '11',
    price: '199',
    image: '../../../assets/images/two.jpg'
  },
  {
    id: '12',
    price: '129',
    image: '../../../assets/images/three.jpg'
  }
];

  constructor() {}

  ngOnInit() {
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

}
