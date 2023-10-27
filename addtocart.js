const product=[
    {
        id:0,
        image:'airpods.jpg',
        title:'AIRPODS',
        price: 999,
    },
    {
        id:0,
        image:'bag.jpg',
        title:'SCHOOL BAGS',
        price: 399,
    },
    {
        id:0,
        image:'bottle.jpg',
        title:'WATTER BOTTLES',
        price: 250,
    },
    {
        id:0,
        image:'dress.jpg',
        title:'WESTERN WEAR',
        price: 650,
    },
    {
        id:0,
        image:'watch.webp',
        title:'HEADSET',
        price: 700,
    },
    {
        id:0,
        image:'mens.jpg',
        title:'MENS WEAR',
        price: 650,
    },
    {
        id:0,
        image:'phone.jpg',
        title:'MOBILE PHONES',
        price: 15999,
    },
    {
        id:0,
        image:'shoe.jpg',
        title:'shoe',
        price: 500,
    }
    
];
const categories=[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item)=>
    {
        var{image,title,price}=item;
        return(
            `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>`+
                    "<button onclick='addtocart("+(i++)+")'> Add to cart </button>"+
                    `</div>
                    </div>`
        )
    }).join('')
var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}
function displaycart(a){
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your cart is empty";
        document.getElementById("total").innerHTML="$ "+0+".00";
    }
    else{
        document.getElementById('cartItem').innerHTML=cart.map((items)=>
        {
            var {image, title, price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}></img>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                "<i class='fa fa-trash-o' onclick='delElement("+(j++) +")'></i></div>"

                
            );

        }).join('');
        
    }
}