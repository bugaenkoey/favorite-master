import { INailServise } from "./service/INailServise";

/**
Снятие - 0.5 часа
Маникюр - 1 час
Гель лак - 2 часа
Коррекция - 3 часа
Наращивание - 3.5 часа
Выкладной френч - 4 часа
 */

export const NAILSERVICES: INailServise[] = [
    {id: 1,name: 'Снятие',description: 'Снятие', price: 50, duration: 0.5 },
    {id: 1,name: 'Маникюр',description: 'Маникюр', price: 100, duration: 1 },
    {id: 1,name: 'Гель лак',description: 'Гель лак', price: 200, duration: 2 },
    {id: 1,name: 'Коррекция',description: 'Коррекция', price: 300, duration: 3 },
    {id: 1,name: 'Наращивание',description: 'Наращивание', price: 350, duration: 3.5 },
    {id: 1,name: 'Выкладной френч',description: 'Выкладной френч', price: 400, duration: 4 },
];

export const GALLERY: string[] =[
   "https://www.instagram.com/p/CVDgtFkIBPF/",
   "https://www.instagram.com/p/CU5JoxOIeaM/",
   "https://www.instagram.com/p/CU15TszoUp/",
   "https://www.instagram.com/p/CU0JgjNoAlu/",
   "https://www.instagram.com/p/CUvQMwnI6ib/",
   "https://www.instagram.com/p/CUskxejIiU3/",
   "https://www.instagram.com/p/CULKokDoZWf/",
   "https://www.instagram.com/p/CT2SL79I6pW/"

]