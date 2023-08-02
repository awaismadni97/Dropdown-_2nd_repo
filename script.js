const obj ={
    name: 'Car',
    model: 'Honda CIVIC',
    color: 'Black'
}

const arr= Object.keys(obj);
console.log(arr);

arr.forEach((key)=>{
    const li = document.createElement('li');
    li.innerHTML=key;
    document.getElementById('dropdown').append(li);
});