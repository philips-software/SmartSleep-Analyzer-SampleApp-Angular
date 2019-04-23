import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {BodyMassIndexStore} from '../../resources/body-mass-index/body-mass-index.store';
import {Question} from '../../resources/questions/questions.types';

@Component({
  selector: 'app-body-mass-index',
  templateUrl: './body-mass-index.component.html',
  styleUrls: ['./body-mass-index.component.css']
})
export class BodyMassIndexComponent implements OnInit {

  /* -- CONSTRUCTOR -- */

  /**
   * Inject any class dependencies that will be used in the class
   * @param _bodyMassIndexServices
   */

  constructor(
    private _bodyMassIndexStore: BodyMassIndexStore
  ) {}

  /* -- PROPERTIES -- */

  /**
   * Create properties on the class - these properties will
   * be available for life of the component
   *
   * Any public properties are available in the view
   */

  public bmiCalculation = '--';
  public form: FormGroup;
  public loading = true;
  public questions: Question[] = [];
  public submitting = false;

  /* -- PUBLIC METHODS -- */

  /**
   * ngOnInit is an Angular lifecycle method
   *
   * Subscribe to events and perform any logic that should happen
   * when the component loads
   */
  public ngOnInit(): void {
    // once the answers are posted and response is returned, execute callback
    this._bodyMassIndexStore.postAnswersEvent$.subscribe(() => this._getBmiCalculation());

    // once the questions are retrieve and response is returned, execute callback
    this._bodyMassIndexStore.questionsUpdatedEvent$.subscribe(() => this._getQuestions());

    // when component loads, retrieve questions
    this._bodyMassIndexStore.retrieveBodyMassIndexQuestions();
  }

  /**
   * Submit form
   */
  public onSubmit(): void {
    this.submitting = true;
    this._bodyMassIndexStore.postBodyMassIndexAnswers(this.form.value);
  }

  /* -- PRIVATE METHODS -- */

  /**
   * Retrieve bmiCalculation and set on class property
   * @private
   */
  private _getBmiCalculation(): void {
    this.submitting = false;
    this.bmiCalculation = (Math.round(this._bodyMassIndexStore.bmiCalculation * 10) / 10) + '%';
  }

  /**
   * Retrieve questions and set on class property and create the form
   * @private
   */
  private _getQuestions(): void {
    this.questions = this._bodyMassIndexStore.questions;
    this._createForm();
  }

  /**
   * Create reactive form elements using Angular's ReactiveFormsModule
   * @private
   */
  private _createForm(): void {
    const controlObject = {};

    // loop through questions and create a FormControl for each element and add required validation
    // FormControl's are mapped to the view by adding their key (controlObject[question.id]) to
    // the [formControlName] directive: example - <input [formControlName]="question.id">
    this.questions.forEach(
      question => controlObject[question.id] = new FormControl('', Validators.required)
    );

    // create a FormGroup to track the form in the view
    this.form = new FormGroup(controlObject, { updateOn: 'change' });

    // loading is set to false to stop the spinner and show the form
    this.loading = false;
  }

}
