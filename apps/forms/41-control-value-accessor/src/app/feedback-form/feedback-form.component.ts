import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RatingControlComponent } from '../rating-control/rating-control.component';

@Component({
  imports: [RatingControlComponent, ReactiveFormsModule],
  selector: 'app-feedback-form',
  templateUrl: 'feedback-form.component.html',
  styleUrls: ['feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {
  @Output()
  readonly feedBackSubmit: EventEmitter<Record<string, string | null>> =
    new EventEmitter<Record<string, string | null>>();

  readonly feedbackForm = new FormGroup({
    name: new FormControl('', {
      validators: Validators.required,
    }),
    email: new FormControl('', {
      validators: Validators.required,
    }),
    comment: new FormControl(),
    rating: new FormControl(null, [Validators.required]),
  });

  rating: string | null = null;

  ngOnInit() {
    this.feedbackForm.valueChanges.subscribe((x) => {
      console.log(x);
    });
  }

  submitForm(): void {
    this.feedBackSubmit.emit({
      ...this.feedbackForm.value,
      rating: this.rating,
    });

    this.feedbackForm.reset();
  }
}
