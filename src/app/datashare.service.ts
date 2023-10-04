import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatashareService {
  cardList = [
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/33283334.png',
      Category: 'programming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/750317.png',
      Category: 'books',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/779159.png',
      Category: 'gaming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/3367083.png',
      Category: 'design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/35848883.png',
      Category: 'cgi',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/33283334.png',
      Category: 'programming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/750317.png',
      Category: 'books',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/779159.png',
      Category: 'gaming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/3367083.png',
      Category: 'design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/35848883.png',
      Category: 'cgi',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/33283334.png',
      Category: 'programming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/750317.png',
      Category: 'books',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/779159.png',
      Category: 'gaming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/3367083.png',
      Category: 'design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/35848883.png',
      Category: 'cgi',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/33283334.png',
      Category: 'programming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/750317.png',
      Category: 'books',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/779159.png',
      Category: 'gaming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/3367083.png',
      Category: 'design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/35848883.png',
      Category: 'cgi',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/33283334.png',
      Category: 'programming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/750317.png',
      Category: 'books',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/779159.png',
      Category: 'gaming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/3367083.png',
      Category: 'design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/35848883.png',
      Category: 'cgi',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/33283334.png',
      Category: 'programming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/750317.png',
      Category: 'books',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/779159.png',
      Category: 'gaming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/3367083.png',
      Category: 'design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/35848883.png',
      Category: 'cgi',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/33283334.png',
      Category: 'programming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/750317.png',
      Category: 'books',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/779159.png',
      Category: 'gaming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/3367083.png',
      Category: 'design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/35848883.png',
      Category: 'cgi',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/33283334.png',
      Category: 'programming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/750317.png',
      Category: 'books',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/779159.png',
      Category: 'gaming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/3367083.png',
      Category: 'design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/35848883.png',
      Category: 'cgi',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/33283334.png',
      Category: 'programming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/750317.png',
      Category: 'books',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/779159.png',
      Category: 'gaming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/3367083.png',
      Category: 'design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/35848883.png',
      Category: 'cgi',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/33283334.png',
      Category: 'programming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/750317.png',
      Category: 'books',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/779159.png',
      Category: 'gaming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/3367083.png',
      Category: 'design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/35848883.png',
      Category: 'cgi',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/33283334.png',
      Category: 'programming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },

    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/779159.png',
      Category: 'gaming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/3367083.png',
      Category: 'design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/35848883.png',
      Category: 'cgi',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/33283334.png',
      Category: 'programming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/750317.png',
      Category: 'books',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/779159.png',
      Category: 'gaming',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/3367083.png',
      Category: 'design',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
    {
      title: 'Kim Kazanacak',
      imgUrl: '/assets/35848883.png',
      Category: 'cgi',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque placeat repudiandae,',
    },
  ];

  booksList: any[] = [];
  cgiList: any[] = [];
  gamingList: any[] = [];
  designList: any[] = [];
  programmingList: any[] = [];
  mixList: any[] = this.cardList;

  constructor() {
    console.log('datashare service');

    this.booksList = this.cardList.filter(f=> f.Category == 'books');
    this.cgiList = this.cardList.filter(f=> f.Category == 'cgi');
    this.programmingList = this.cardList.filter(f=> f.Category == 'programming');
    this.gamingList = this.cardList.filter(f=> f.Category == 'gaming');
    this.designList = this.cardList.filter(f=> f.Category == 'design');
    this.reverseCardList();
  }

  ngOnInit(): void {
    console.log('datashare ngOnInit');
    // this.separateDataByCategory();
  }

  // separateDataByCategory() {
  //   this.booksList = [];
  //   this.cgiList = [];
  //   this.programmingList = [];
  //   this.gamingList = [];
  //   this.designList = [];

  //   this.cardList.forEach((item) => {
  //     if (item.Category === 'books') {
  //       this.booksList.push(item);
  //     } else if (item.Category === 'cgi') {
  //       this.cgiList.push(item);
  //     } else if (item.Category === 'programming') {
  //       this.programmingList.push(item);
  //     } else if (item.Category === 'gaming') {
  //       this.gamingList.push(item);
  //     } else if (item.Category === 'design') {
  //       this.designList.push(item);
  //     }
  //   });
  // }

  reverseCardList() {
    this.cardList.reverse();
    this.booksList.reverse();
    this.cgiList.reverse();
    this.programmingList.reverse();
    this.gamingList.reverse();
    this.designList.reverse();
  }
}
