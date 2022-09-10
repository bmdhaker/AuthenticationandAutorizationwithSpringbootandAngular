import { Gouvernorat } from './gouvernorat';
import { Solde } from './solde';
export class CentreRechargeform {
  id: number;
  libelle: string;
  telephone: string;
  login: string;
  password: string;
  soldeInitial: Solde;
  gouvernorat: Gouvernorat;
}