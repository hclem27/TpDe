export class De{
    private _value: number;
    constructor(_value: number)
    {
        this._value = _value;
    }
    lancer():number{
        return Math.floor(Math.random()) * (this._value)
    }
}