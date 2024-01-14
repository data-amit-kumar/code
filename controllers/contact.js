const fs= require('fs');

exports.getContact= (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','/views/contact.html'));
};

exports.postContact=(req,res,next)=>{
    const a= req.body.Name;
    const b=req.body.Contact;
    const data= `${a}:${b}`;
    fs.appendFile('contact.txt',data + '\n', (err)=>{
        if(err) throw err;
    });
    res.redirect('/');
};