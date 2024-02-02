import { Component } from '@angular/core';
import { SelectorComponent } from '../selector/selector.component';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  
  constructor(public selector: SelectorComponent){
    selector.op = 0;
  }
  en: any = [
    {
      title: 'Book an appointment',
      desc: 'Set a day to meet with me',
      link: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UVBxcGp2Tlg3VmFmfGRlZmF1bHR8NjgxOTJiODU3M2Q4Zjk3MTY4NzNjMzU0ODk3MzFhOTM',
      img: '../../../assets/svg/calendar.svg'
    },
    {
      title: 'Instagram',
      desc: 'Follow us on Instagram!',
      link: 'https://www.instagram.com/prosaleng',
      img: '../../../assets/svg/instagram.svg'
    },
    {
      title: 'TikTok',
      desc: 'Follow us on TikTok!',
      link: 'https://www.tiktok.com/@prosallife',
      img: '../../../assets/svg/tiktok.svg'
    }
  ];

  es: any = [
    {
      title: 'Agenda tu cita',
      desc: 'Aparta un día para reunirte conmigo',
      link: 'https://calendar.google.com/calendar/u/0/selfsched?sstoken=UVBxcGp2Tlg3VmFmfGRlZmF1bHR8NjgxOTJiODU3M2Q4Zjk3MTY4NzNjMzU0ODk3MzFhOTM',
      img: '../../../assets/svg/calendar.svg'
    },
    {
      title: 'Instagram',
      desc: '¡Siguenos en Instagram!',
      link: 'https://www.instagram.com/prosalfinancialservices',
      img: '../../../assets/svg/instagram.svg'
    },
    {
      title: 'TikTok',
      desc: '¡Siguenos en TikTok!',
      link: 'https://www.tiktok.com/@prosalfinancialservices',
      img: '../../../assets/svg/tiktok.svg'
    }
  ]
}
