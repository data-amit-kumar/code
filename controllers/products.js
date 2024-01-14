const fs= require('fs');
const path=require('path');

exports.getAddProduct= (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
};

exports.postAddProduct= (req,res,next)=>{
    const n = req.body.title;
    fs.appendFile('product.txt', n + '\n',(err)=>{
        if(err) throw err;
    });
    res.redirect('/');
};

exports.getAddProductd=(req, res, next) => {
    fs.readFile('product.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            data = 'No Data exists';
        }

        fs.readFile(path.join(__dirname, '../', 'views', 'shop.html'), 'utf8', (err, htmlData) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error reading HTML file.');
            } else {
                const updatedHtmlData = htmlData.replace('<!-- PRODUCT_DATA_PLACEHOLDER -->', data);
                res.send(updatedHtmlData);
            }
        });
    });
};