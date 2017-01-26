

export class Player{

    constructor(
        public $key:number,
        public name:string,
        public age:string
    ){}

    // static fromJsonList(array): Player[] {
    //     return array.map(Player.fromJson);
    // }


    // static fromJson($key, name, age):Player {
    //     return new Player(
    //         $key,
    //         name,
    //         age
    //     )
    // }

}