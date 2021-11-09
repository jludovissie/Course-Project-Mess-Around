import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Workout } from './workout.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
})
export class WorkoutComponent implements OnInit {
  workout: null;
  set: null;
  timeLeft: number;
  timerInterval: any;

  workouts= [
    { workout: 'Bench', Set: '3 x 10' },
    { workout: 'Squat', Set: '3 x 10' },
    { workout: 'Deadlift', Set: '3 x 10' }
  ];

  constructor() {}

  onAddWorkout() {
    this.workouts.push({workout:this.workout, Set: this.set})
  }
 onDelete(i){
   this.workouts.splice(i,1)
   
 } 
 startRest(){
  if (this.timerInterval) clearInterval(this.timerInterval)   
   this.timeLeft = 30
   this.timerInterval = setInterval(() => {
    this.timeLeft--  
  if (this.timeLeft === 0) clearInterval(this.timerInterval)   
 
   },1000)
 }

  ngOnInit() {}
}
