import {v4 as uuidv4} from 'uuid';

const chillHop=()=>{
    return [
        {
            name:"Beyond Clouds",
            cover:"https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg ",
            artist:"Saib ",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=9297 ",
            color:["#FEFDCE","#351A1B"],
            id:uuidv4(),
            active: true,
        },
        {
            name:"Déjà Vu ",
            cover:"https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg ",
            artist:" Blue Wednesday, Shopan  ",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=11229 ",
            color:["#F2B4DB","#9884CF"],
            id:uuidv4(),
            active: false,
        },{
            name:"Today Feels Like Everyday ",
            cover:"https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg ",
            artist:"Mama Aiuto ",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=12128 ",
            color:["#4F2610","#201D1F"],
            id:uuidv4(),
            active: false,
         },
        //  {
        //     name:" ",
        //     cover:" ",
        //     artist:" ",
        //     audio:" ",
        //     color:" ",
        //     id:uuidv4(),
        //     active: true,
        // },{
        //     name:" ",
        //     cover:" ",
        //     artist:" ",
        //     audio:" ",
        //     color:" ",
        //     id:uuidv4(),
        //     active: true,
        // },{
        //     name:" ",
        //     cover:" ",
        //     artist:" ",
        //     audio:" ",
        //     color:" ",
        //     id:uuidv4(),
        //     active: true,
        // },
    ]
}

export default chillHop;