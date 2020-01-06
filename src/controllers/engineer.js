const model = require('../models/engineerModel')

module.exports={
    search: (req,res) =>{
        const str={
            name: req.query.name
        } 
        model.searchEngineerName(str)
            .then(result => res.json({
                success: true,
                message: 'Data found',
                data: result
            }))   
            .catch(err => res.json({
                success: false,
                message: 'Data not found',
                data: {}
            }))
    },
    
    combination: (req, res) =>{
        let page= parseInt(req.query.page) || 1
        let limit= parseInt(req.query.limit) || 10
        let sortby= req.query.sortby || 'id'
        let search= req.query.search || ''
        let order= req.query.order || 'ASC'
        model.getDataCombin(page,limit,sortby,search,order)
            .then(result => res.json({
                success: true,
                message: 'Data found',
                sort_by: sortby,
                data: result
            }))
            .catch(err => res.json({
                success: false,
                message: 'Data not found',
                data: {}
            }))
    }    
}


