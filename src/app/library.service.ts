import { EventEmitter, Injectable } from '@angular/core';
import { Pitch } from './pitch.model';


@Injectable({
  providedIn: 'root', 
})
export class LibraryService {

pitchSelected = new EventEmitter<Pitch>()  


private myPitches: Pitch[] = [
  new Pitch(
    'Fast Ball',
    "The grip is how you position your fingers on the ball. With the fastball grip, you will want to look for a “C” within the stitching. This “C” can be either forward or backward."
  
  ),
  new Pitch (
    'Rise Ball',
    "The grip is how you position your fingers on the ball. With the fastball grip, you will want to look for a “C” within the stitching. This “C” can be either forward or backward."
  ),
  new Pitch (
    'Change Up',
    "The grip is how you position your fingers on the ball. With the fastball grip, you will want to look for a “C” within the stitching. This “C” can be either forward or backward."
  ),
  new Pitch(
    'Drop Ball',
    "The grip is how you position your fingers on the ball. With the fastball grip, you will want to look for a “C” within the stitching. This “C” can be either forward or backward."
  )]

  constructor() { }

  getPitches(){
    return this.myPitches.slice();
}
  savePitch(pitch: Pitch){
    this.myPitches.push(pitch)
}

}
