import { Component } from '@angular/core';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent {
imgCollection: Array<object> = [
      {
        image: '../assets/imagenes/sliderCanchas/canchaBarrio1.jpg',
        thumbImage: '../assets/imagenes/sliderCanchas/canchaBarrio1.jpg',
        alt: 'Bosa',
        title: 'Bosa'
      }, {
        image: '../assets/imagenes/sliderCanchas/canchaBarrio2.jpg',
        thumbImage: '../assets/imagenes/sliderCanchas/canchaBarrio2.jpg',
        title: 'Chapinero',
        alt: 'Chapinero'
      }, {
        image: '../assets/imagenes/sliderCanchas/canchaBarrio3.jpg',
        thumbImage: '../assets/imagenes/sliderCanchas/canchaBarrio3.jpg',
        title: 'Engativá',
        alt: 'Engativá'
      }, {
        image: '../assets/imagenes/sliderCanchas/canchaBarrio4.jpg',
        thumbImage: '../assets/imagenes/sliderCanchas/canchaBarrio4.jpg',
        title: 'Fontibón',
        alt: 'Fontibón'
      }, {
        image: '../assets/imagenes/sliderCanchas/canchaBarrio5.jpg',
        thumbImage: '../assets/imagenes/sliderCanchas/canchaBarrio5.jpg',
        title: 'Kennedy',
        alt: 'Kennedy'
      }, {
        image: '../assets/imagenes/sliderCanchas/canchaBarrio6.jpg',
        thumbImage: '../assets/imagenes/sliderCanchas/canchaBarrio6.jpg',
        title: 'La Candelaria',
        alt: 'La Candelaria'
      },
      {
        image: '../assets/imagenes/sliderCanchas/canchaBarrio7.jpg',
        thumbImage: '../assets/imagenes/sliderCanchas/canchaBarrio7.jpg',
        title: 'Los Mártines',
        alt: 'Los Martines'
      },
      {
        image: '../assets/imagenes/sliderCanchas/canchaBarrio8.jpg',
        thumbImage: '../assets/imagenes/sliderCanchas/canchaBarrio8.jpg',
        title: 'San Cristóbal',
        alt: 'San Cristobal'
      },
      {
        image: '../assets/imagenes/sliderCanchas/canchaBarrio9.jpg',
        thumbImage: '../assets/imagenes/sliderCanchas/canchaBarrio9.jpg',
        title: 'Santa Fe',
        alt: 'Santa Fe'
      },
      {
        image: '../assets/imagenes/sliderCanchas/canchaBarrio10.jpg',
        thumbImage: '../assets/imagenes/sliderCanchas/canchaBarrio10.jpg',
        title: 'Suba',
        alt: 'Suba'
      },
  ];
}
