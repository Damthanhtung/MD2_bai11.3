function subString (phoneNumber: string[]){
    let vietTel: string[] = [];
    let vinaPhone :string[] = [];
    let mobiPhone : string[] = [];
    let arr :any[] = [];
    for (let i of phoneNumber) {
        if (i.substring(0,3)==='032'||
            i.substring(0,3)==='033'||
            i.substring(0,3)==='034'||
            i.substring(0,3)==='035'||
            i.substring(0,3)==='036'||
            i.substring(0,3)==='037'||
            i.substring(0,3)==='038'||
            i.substring(0,3)==='039') vietTel.push(i);
        if (i.substring(0,3)==='090'||
            i.substring(0,3)==='093'||
            i.substring(0,3)==='089') mobiPhone.push(i);
        if (i.substring(0,3)==='081'||
            i.substring(0,3)==='082'||
            i.substring(0,3)==='056'||
            i.substring(0,3)==='058') vinaPhone.push(i)

    }
    arr.push(vietTel);
    arr.push(mobiPhone);
    arr.push(vinaPhone);
    return arr;

}
console.log(subString(['0352402626' + ' Đây là số vietel','0903198199' + ' Đây là số mobiphone','0585199198' + ' Đây là số vinaphone']))
