const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("The server is running!!");
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.post('/signup',async(req,res)=>{
    const user  = {email,password};
    user= req.body;
    await user.save(); //Saving the data initially in the database using post.

    return res.status(201).json({message:"User Created successfully!"})
})
app.put('/update-user/:id', async(req,res)=>{
    const user = {email,password}  
    await user.save();  //again taking input to gain access to the attributes of databases i.e database is not accessible for this assessment.

    const User = await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
    await User.save();

    if(User.email==user.email){
        const newPassword = req.body;
        User.email=user.email
        User.password = newPassword;
    }

    if(!email){
        return res.status(400).json({error:"Email not found"});
    }

    return res.status(201).json("Updated user: ",User);
})

app.delete('/delete-user/:id',async(req,res)=>{
    const user = {email,password}  
    await user.save(); //again taking input to gain access to the attributes of databases i.e database is not accessible for this assessment.

    const User  = await user.findByIdAndDelete(req.params.id);
    await User.save();
    if(!email){
        return res.status(400).json({error:"Email not found"});
    }

    return res.status(201).json("Deleted the user successfully: ", User)
})
