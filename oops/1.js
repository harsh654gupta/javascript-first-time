function user(name,id)
{
    this.name=name;
    this.id=id;

     this.print=function ()
    {
        console.log(this);
    }

}
const u=new user("harsh",42);
//u.print();
const h={
    name:"harsh",
    roll:42
}
h={
    name:"yadav",
    roll:45
}
console.log(h);
// h.name="krishna";
// console.log(h)