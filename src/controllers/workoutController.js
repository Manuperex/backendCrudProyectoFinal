const Cards = require('../database/workout')


exports.getAllWorkouts = ((req, res) => {
    Cards.find((err, docs) => {
        if(err) throw new Error(err);
        console.log(docs)
        res.json(docs);
        
    });  
});

exports.getOneWorkouts = ((req, res) => {
    Cards.find({_id:req.params._id}, function(docs, err){
        if(!err){
            res.send(docs);
        } else {
            res.send(err);
        }
    })    
});

exports.createNewWorkouts = ((req, res) => {
    Cards.create(req.body, function(docs, err){
        if(!err){
            res.send(docs);
        } else {
            res.send(err);
        }
    })    
});
exports.updateOneWorkouts = ((req, res) => {
    Cards.updateOne({_id:req.params._id},{
        title: req.body.title,
        card_type: req.body.card_type,
        attribute: req.body.attribute,
        types: req.body.types,
        level: req.body.level,
        atk: req.body.atk,
        def: req.body.def,
        passcode: req.body.passcode,
        statuses: req.body.statuses,
        card_description: req.body.card_description
    }, (err) => {
        if(!err){
            res.send('Card Update');
        } else {
            res.send(err);
        }
    })    
});

exports.deleteOneWorkouts = ((req, res) => {
    Cards.findOneAndDelete({_id:req.body._id}, function(docs, err){
        if(!err){
            res.send(docs);
        } else {
            res.send(err);
        }
    })    
});