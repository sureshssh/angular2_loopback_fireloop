/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Note } from '../../models/Note';
import { Expence } from '../../models/Expence';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Note: Note,
    Expence: Expence,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
