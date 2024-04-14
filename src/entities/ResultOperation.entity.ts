import { BiseccionAndFalseDTO } from "./BiseccionAndFalse.entity";
import { SecanteDTO } from "./Secante.entity";

export interface ResultOperationDTO {
  biseccion: BiseccionAndFalseDTO[];
  falsaPosicion: BiseccionAndFalseDTO[];
  secante: SecanteDTO[];
}
