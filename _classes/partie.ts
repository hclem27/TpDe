export class Partie{
    private _nbTours: number;
    constructor(_value: number)
    {
        this._nbTours = this._nbTours;
    }
    initialiserPartie(): void{
        console.log("La partie peut commencer")
    }
    lancer():number{
        return Math.floor(Math.random())
    }
    afficherScore(): void{
        const Result = Math.floor(Math.random())
        console.log("Votre resultat est le suivant", Result)
    }
}