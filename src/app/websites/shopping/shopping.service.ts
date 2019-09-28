import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }
 ladyArticles = [
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

  getLadyArticles() {
    return this.ladyArticles;
  }

  // getLadyArticleById(id){
  //   return this.ladyArticles.find( article => {
  //     article.id === this.ladyArticles[id];
  //   })
  // }
}
