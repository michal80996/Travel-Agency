export class Jewelry{
    constructor(
public code:number,
public name:string,
public categories:string,
public material:listMaterial,
public img:string,
public color={}) 
{
this.color={'gold':this.material=="gold",'silver':this.material=="silver",'bronze':this.material=="bronze"}
    }
}
export enum listMaterial{
    gold="gold",
    silver="silver",
    bronze="bronze"
}

