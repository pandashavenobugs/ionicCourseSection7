import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace:Place
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}
  onCancel(){
    this.modalCtrl.dismiss(null,'cancel') // we can dismis the modals with id
  }
  onBookPlace(){
    this.modalCtrl.dismiss({message:'this is a dummy message!'},'confirm')
  }
}
