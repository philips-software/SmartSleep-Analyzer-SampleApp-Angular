import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {BodyMassIndexService} from './body-mass-index.service';
import {Question} from '../questions/questions.types';

@Injectable({
  providedIn: 'root'
})
export class BodyMassIndexStore {

  /* -- CONSTRUCTOR -- */

  /**
   * Inject any class dependencies that will be used in the class
   * @param _bodyMassIndexService
   */
  constructor(
    private _bodyMassIndexService: BodyMassIndexService
  ) {}

  /* -- EVENTS -- */

  /**
   * Create subjects to act as event emitters - Subject extends Observable
   */

  private _postAnswersEvent = new Subject();
  private _questionsUpdatedEvent = new Subject();

  /* -- PROPERTIES -- */

  /**
   * Create public properties of the event emitter for other components to subscribe to
   */

  public postAnswersEvent$ = this._postAnswersEvent.asObservable();
  public questionsUpdatedEvent$ = this._questionsUpdatedEvent.asObservable();

  /**
   * Create properties on the class - stores are singletons so
   * these properties will be available for life of the app
   */

  private _bmiCalculation: number;
  private _questions: Question[];

  /* -- GETTERS -- */

  /**
   * Use getters to expose private class properties to other classes
   */

  public get bmiCalculation(): number {
    return this._bmiCalculation;
  }

  public get questions(): Question[] {
    return this._questions;
  }

  /* -- PUBLIC METHODS -- */

  /**
   * Get list of questions
   *
   * retrieveBodyMassIndexQuestions returns an Observable from BodyMassIndexServices
   * that this method can subscribe to
   *
   * Once the Observable resolves, the method sets the property to the class and
   * fires an event to alert listening components who can then query property with getter
   */
  public retrieveBodyMassIndexQuestions(): void {
    this._bodyMassIndexService.retrieveBodyMassIndexQuestions().subscribe(
      response => {
        this._questions = response;
        this._questionsUpdatedEvent.next();
      }
    );
  }

  /**
   * Submit answer list
   *
   * postBodyMassIndexAnswers returns an Observable from BodyMassIndexServices
   * that this method can subscribe to
   *
   * Once the Observable resolves, the method sets the property to the class and
   * fires an event to alert listening components who can then query property with getter
   */
  public postBodyMassIndexAnswers(body: {}): void {
    this._bodyMassIndexService.postBodyMassIndexAnswers(body).subscribe(
      response => {
        this._bmiCalculation = response.bmi;
        this._postAnswersEvent.next();
      }
    );
  }

}
