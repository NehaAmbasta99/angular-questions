export class User {
    constructor(
    public username:string,
    public password:string,
    public confirmPassword:string,
    public email:string,
    public gender:string,
    public location:string,
    public hobbies:string[]
    ){
    }
}
