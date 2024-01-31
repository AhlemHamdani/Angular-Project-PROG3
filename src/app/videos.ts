import { Avis } from "./avis"
import { Auteur } from "./auteur"


export interface Videos {

    nom: string,
    description: string,
    code: string,
    image: string,
    auteur: Auteur,
    date_pub : string,
    duree : number,
    nombre_vues: number,
    score: number,
    sous_titres: string,
    avis?: Avis,

}
