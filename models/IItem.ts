import IExercicio from "./IExercicio";

interface IItem{
    id: number
    nome: string
    exercicios: Array<IExercicio>
}

export default IItem;