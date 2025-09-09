import { Component, Input } from '@angular/core';
import { HousingLocationInterface } from '../housing-location-interface';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css'
})

export class HousingLocation {
  @Input() housingLocation!: HousingLocationInterface;
}