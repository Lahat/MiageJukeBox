/**
 * Created by Geoffrey on 09/11/2014.
 */

/// <reference path="../headers/Data.d.ts"/>

class DatabaseEmulator {
    private model : DataStore.DataModel;

    constructor(){
        this.model = new DataStore.DataModel();
    }

    getTracks( callback : Function): void{
        this.model.getTracks(callback);
    }
}