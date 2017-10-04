/* tslint:disable */

declare var Object: any;
export interface ExpenceInterface {
  "name": string;
  "id"?: number;
}

export class Expence implements ExpenceInterface {
  "name": string;
  "id": number;
  constructor(data?: ExpenceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Expence`.
   */
  public static getModelName() {
    return "Expence";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Expence for dynamic purposes.
  **/
  public static factory(data: ExpenceInterface): Expence{
    return new Expence(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Expence',
      plural: 'expences',
      path: 'expences',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
