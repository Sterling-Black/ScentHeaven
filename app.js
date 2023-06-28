// require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const multer = require('multer');
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate =  require("mongoose-findorcreate");


const app = express();

app.use(express.static("public"));

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/img')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()+'.jpg')
    }
});
var upload = multer({storage: storage});

const userSchema = mongoose.Schema({
    email: String,
    name: String,
    password: String,
    googleId: String,
    // facebookId: String,
    phone: Number,
    orders: Number,
});

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    color: String,
    image: String,
});

const orderSchema = mongoose.Schema({
    customerName: String,
    customerPhone: Number,
    parfumName: String,
    image: String,
    quantity: Number,
    price: Number,
    status:  Boolean,//true=complete and false=pending
    day: String,
    month: String,
});

app.use(session({
    cookie: { maxAge: 86400000 },
    secret: "ThisIsMyLittleSecret",
    saveUninitialized: true,
    resave: false
}));
  
app.use(passport.initialize());
app.use(passport.session());

mongoose.set('strictQuery', false);

mongoose.connect((process.env.MONGODB_URL||'mongodb://127.0.0.1/parfum'),{useNewUrlParser: true});

const Product = mongoose.model("Product", productSchema);
const Order = mongoose.model("Order", orderSchema);


userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
const User =  mongoose.model("User",userSchema);


passport.use(User.createStrategy());


passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.id,
        username: user.username,
        picture: user.picture
      });
    });
});
  
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});


passport.use(new GoogleStrategy({
    clientID: "process.env.CLIENT_ID",
    clientSecret: "process.env.CLIENT_SECRET",
    callbackURL: "https://localhost:3000/auth/google/welcome",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    const email = profile.emails[0].value;
    const name = profile.displayName;
    User.findOrCreate({ googleId: profile.id ,name: name, email: email}, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
);

app.get("/auth/google/parfum", 
  passport.authenticate("google", { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});


app.get("/",async (req,res)=>{
    
    const foundPrdts = await Product.find({});
    const online = req.isAuthenticated()?true:false;

    if(req.isAuthenticated()){
        console.log("connected");
    }else{
        console.log("non connected");
    }

    res.render("home",{
        prdts: foundPrdts,
        online: online
    });

});

app.get("/shop",async (req,res)=>{

    const foundPrdts = await Product.find({});
    const online = req.isAuthenticated()?true:false;

    if(req.isAuthenticated()){
        console.log("connected");
    }else{
        console.log("non connected");
    }

    res.render("shop",{
        prdts: foundPrdts,
        online: online
    });

});

app.get("/signin", (req,res)=>{
    res.render("signin");
});

app.get("/signup", (req,res)=>{
    res.render("signup");
});

app.get("/cart", async(req,res)=>{
    const foundPrdts = await Product.find({});

    if(req.isAuthenticated()){
        res.render("cart",{
            prdts: foundPrdts
        });
    }else{
        res.redirect("/signin");
    }
});

app.get("/checkout", async(req,res)=>{
    const foundPrdts = await Product.find({});

    if(req.isAuthenticated()){
        res.render("checkout",{
            prdts: foundPrdts
        });
    }else{
        res.redirect("/signin");
    }
})

app.get("/contact", (req,res)=>{
    res.render("contact");
});

app.post("/signin", (req,res)=>{

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, (err)=>{
        if(err){
            console.log(err);
            res.render("/signin",{msg: err});
        }else{

            passport.authenticate("local")(req, res, ()=>{
                res.redirect("/");
            });
        }
    });

});

app.post("/pass-order",async(req,res)=>{

    const date = new Date();
    const options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    };
    
    const month = date.toLocaleString('en-US',{ month: 'long'});
    const formattedDate = date.toLocaleDateString('en-GB', options);

    const { user:{id},  body:{ productsId}} = req;

    const prdtsId = JSON.parse(productsId);

    const itemAcc = [];

    const itemsId = [];

    const {phone,username} = await User.findById(id);


    prdtsId.forEach((id)=>{
        if(itemAcc.includes(id)){
            itemsId[itemAcc.indexOf(id)].count++;
        }else{
            itemAcc.push(id);
            itemsId.push({
                id: id,
                count: 1,
            });
        }
    });



    itemsId.forEach(async({id, count})=>{

        const foundPrdt = await Product.findById(id);

        const {image, price, name} = foundPrdt;

        const newOrder = Order({
            customerName: username,
            customerPhone: phone,
            parfumName: name,
            image: image,
            quantity: count,
            price: price*count,
            status:  false,//true=complete and false=pendin
            day: formattedDate,
            month: month
        });

        newOrder.save();
    });

    res.redirect('/');
    
});



app.post("/signup",async(req,res)=>{

    // console.log(req.body);
    const {phone, password} = req.body;

    const checkUser = await User.findOne({username: req.body.username});
    
    if(!checkUser){
        User.register({username: req.body.username, phone: phone}, password, (err, user)=>{
            if(err){
                console.log(err);
                res.render("/signup",{msg: err});
            }else{
                passport.authenticate("local")(req, res, ()=>{
                    res.redirect("/");
                });
            }
        });
    }

});

// Admin Side

app.get("/admin",(req,res)=>{
    res.redirect("/admin/dashboard");
});


app.get("/admin/dashboard",async (req,res)=>{
    
    if(req.isAuthenticated() && req.user.username == process.env.ADMIN_USERNAME){

        const foundOrders = await Order.find({});
    
        const acc = [];
        const itemsOrdered = [];
    
        let totalOrders = 0;
        let totalPayments = 0;
        let totalProfit = 0;
    
        foundOrders.forEach((order,index)=>{
    
            const {parfumName, quantity} = order;
            const {status, price} = order; 
    
            if(acc.includes(parfumName)){
                itemsOrdered[acc.indexOf(parfumName)].quantity += quantity;
            }else{
                acc.push(parfumName);
                itemsOrdered.push({
                    name: parfumName,
                    quantity: quantity, 
                });
            }
    
            if(status){//has being paid 
                totalProfit += price; 
                totalPayments++; 
    
            }else{//not yet paid(currently an Order) 
                
                totalOrders++ 
            } 
    
        });
    
        itemsOrdered.sort((a,b) => b.quantity - a.quantity);
    
    
    
        const [mostOrdered] = itemsOrdered.length>0?await Product.find({name: itemsOrdered[0].name}):[''];
        const [secondOrdered] = itemsOrdered.length>1?await Product.find({name: itemsOrdered[1].name}):[''];
        const [thirdOrdered] = itemsOrdered.length>2?await Product.find({name: itemsOrdered[2].name}):[''];
    
        const date = new Date();
        const month = date.toLocaleString('en-US',{ month: 'long'});
    
        const thisMonthOrders = await Order.find({month: month});
        let monthPrice = 0;
    
        thisMonthOrders.forEach((mOrders)=>{
            monthPrice += mOrders.price;
        });
        
    
        res.render("admin/dashboard",{
            active: 1,
            foundOrders,
            itemsOrdered,
            thisMonthOrders,
            monthPrice,
            top3Items: [mostOrdered,secondOrdered,thirdOrdered],
            totalOrders,
            totalPayments,
            totalProfit,
            thisMonth: month
        });

    }else{
        res.redirect('/');
    }


});


app.get("/admin/products",async(req,res)=>{

    if(req.isAuthenticated() && req.user.username == process.env.ADMIN_USERNAME){
        const foundPrdts = await Product.find({});

        res.render("admin/product",{
            foundPrdts: foundPrdts,
            active: 2
        });
    }else{
        res.redirect('/');
    }
})
app.get("/admin/orders",async (req,res)=>{

    if(req.isAuthenticated() && req.user.username == process.env.ADMIN_USERNAME){
        const foundOrders = await Order.find({});
    
        res.render("admin/orders",{
            foundOrders: foundOrders,
            active: 3
        });
    }else{
        res.redirect('/');
    }
})
app.get("/admin/payment",async (req,res)=>{

    if(req.isAuthenticated() && req.user.username == process.env.ADMIN_USERNAME){
        const foundOrders = await Order.find({});
    
        res.render("admin/payment",{
            foundOrders: foundOrders,
            active: 4
        });
    }else{
        res.redirect('/');
    }
});



app.post("/change-status",async (req,res)=>{

    if(req.isAuthenticated() && req.user.username == process.env.ADMIN_USERNAME){
        const date = new Date();
        const options = {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        };
        const month = date.toLocaleString('en-US',{ month: 'long'});
        const formattedDate = date.toLocaleDateString('en-GB', options);
    
        const paidOrders = JSON.parse(req.body.paidOrders);
    
        // console.log(paidOrders);
    
        paidOrders.forEach(async ({id,status})=>{
            const foundOrder = await Order.findById(id);
            foundOrder.status = true;
            foundOrder.day = formattedDate;
            foundOrder.month = month;
            foundOrder.save();
        });
        
        res.redirect("/admin/orders");
    }else{
        res.redirect('/');
    }

    
    
});

app.post("/add",upload.single('image'), async (req,res,next)=>{

    if(req.isAuthenticated() && req.user.username == process.env.ADMIN_USERNAME){
        console.log(req.file.path,"yo\n\n");
    
        const image = req.file.path.replace("public\\img\\","/img/");
    
    
    
    
        const prdt = new Product({
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            color: req.body.color,
            image: image
        });
    
        await prdt.save();
    
        res.redirect("/admin/products");
    }else{
        res.redirect('/');
    }


});

app.post("/update",upload.single('image'),async(req,res,next)=>{

    if(req.isAuthenticated() && req.user.username == process.env.ADMIN_USERNAME){
        const {name, price, quantity, color} = req.body;
        const image = req.file.path.replace("public\\img\\","/img/");
    
        console.log(image);
    
    
        const foundPrdt = await Product.findById(req.body.id);
    
        foundPrdt.name = name?name:foundPrdt.name;
        foundPrdt.price = price?price:foundPrdt.price;
        foundPrdt.quantity = quantity?quantity:foundPrdt.quantity;
        foundPrdt.color = color?color:foundPrdt.color;
        foundPrdt.image = image?image:foundPrdt.image;
    
        await foundPrdt.save();
    
        res.redirect("/admin/products");
    }else{
        res.redirect('/');
    }
});

const port = process.env.PORT||3000;

app.listen(port,()=>{
    console.log("Server started on port "+port);
});