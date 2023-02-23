const Cards = require('../database/workout')


exports.getAllWorkouts = ((req, res) => {
    Cards.find((err, docs) => {
        if(err) throw new Error(err);
        res.send({ status: "OK", data: docs});
        
    });  
});

exports.getOneWorkouts = ((req, res) => {
    Cards.find({_id:req.params._id}, function(docs, err){
        if(!err){
            res.send({ status: "OK", data: docs});
        } else {
            res.send(err);
        }
    })    
});

exports.createNewWorkouts = ((req, res) => {
    Cards.create(req.body, function(docs){
        docs = {
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
        }
        console.log(docs)
        if(
           !docs.title   ||
           !docs.card_type   ||
           !docs.attribute   ||
           !docs.types   ||
           !docs.level   ||
           !docs.atk   ||
           !docs.def   ||
           !docs.passcode   ||
           !docs.statuses   ||
           !docs.card_description   

        ) {
            res.status(400).send({ status: "FAILED", data: { error: "One of the following keys is missing or is empty in request body: 'title', 'card_type', 'attribute', 'type,  'level', 'atk', 'def', 'passcode', 'statuses', 'card_description' "}});   
        } else {
            res.status(201).send({ status: `CARD added with passcode: ${docs.passcode}`, data: docs}); 
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
            res.status(201).send({ status: `Card modified with ID: ${req.params._id}`});
        } else {
            res.send(err);
        }
    })    
});

exports.deleteOneWorkouts = ((req, res) => {
    Cards.findOneAndDelete({_id:req.body._id}, function(docs, err){
        if(!err){
            res.status(200).send({ status: `Card deleted  with ID: ${req.body._id}`});
        } else {
            res.send(err);
        }
    })    
});