class myItem {
    constructor(name, score) {
        this.name = name
        this.score = score
    }

    ToString() {
        return `名前は${this.name} スコアは${this.score}`
    }
}

const man1 = new myItem("Taro", 95)
const man2 = new myItem("Jiro", 82)
const myarray = [man1, man2]

for(let i=0; i<myarray.length; i++)
{
    console.log(myarray[i].ToString())
}