import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Workout } from './workout.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  @ViewChild('workoutInput') workoutInputRef: ElementRef;
  @ViewChild('setInput') setInputRef: ElementRef;
  

  constructor() { }

  ngOnInit() {}
onAddWorkout(){
  
}
onAddSet(){}
}
