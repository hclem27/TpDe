import { Gobelet } from "./gobelet";

export class Joueur{
    private _Nom: string;
    private _Score: number = 0;
    score: any;

    constructor(_Nom: string)
    {
        this._Nom = this._Nom;
    }
    joueur(gobelet:Gobelet): void{
        gobelet.lancer();
    }
    afficherScore(): void{
        console.log()
    }
}