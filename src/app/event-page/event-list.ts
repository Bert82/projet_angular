import { Event } from "../event-page/event-page.component";
  
export const Evenement: Event[] = [
    {
        id: 1,
        name: "Treck du Mont Blanc",
        distance: 175 ,
        lieu: "Chamonix",
        picture: "/assets/img/trek.jpg",
        types: ["Treck"],
        created: new Date()
    },
    {
        id: 2,
        name: "Bivouac en Ardennes",
        distance: 60,
        lieu: "Ardennes",
        picture: "/assets/img/rando.jpg",
        types: ["Rando"],
        created: new Date()
    },
    {
        id: 3,
        name: "Marathon  de Paris",
        distance: 42,
        lieu: "Paris",
        picture: "/assets/img/course.png",
        types: ["Matethon"],
        created: new Date()
    },
   
   
];