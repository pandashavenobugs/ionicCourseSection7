import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(private router:Router,
    private route: ActivatedRoute,
    private navCtrl:NavController,
    private placesService: PlacesService,
    private modalCtrl:ModalController // to use modal controller
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }
  onBookPlace(){
    //this.router.navigate(['places','tabs','discover'])
    // to make routing back with better animation we could use navcontroller
    //this.navCtrl.navigateBack('/places/tabs/discover')
    // componentprobs is used for sending data to modal page
    this.modalCtrl.create({component:CreateBookingComponent,componentProps:{selectedPlace:this.place}}).
    then(modelEl=>{
      modelEl.present();
      // these data from cratebooking component.ts
      return modelEl.onDidDismiss()
    }).then(resultData=>{
      console.log(resultData.data,resultData.role);
      if(resultData.role==='confirm'){
        console.log('booked');
      }
    })
  }

}
