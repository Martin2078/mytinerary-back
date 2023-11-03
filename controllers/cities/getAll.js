import City from "../../models/City.js";

export default async(req,res)=>{
    try {
        
        let queries={}
        let pagination={page:1,limit:12}
        let next=false
        let prev=false
        if(req.query.text){
            queries.cityName = new RegExp("^"+(req.query.text).trim(),'i') 
        }
        if(req.query.page){
            pagination.page=req.query.page
        }

    let cities= await City.find(queries).sort({popularity:1})
    .skip(pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0)
    .limit(pagination.limit>0 ? pagination.limit : 0)
    
    
    let amountCities = await City.find(queries)
    amountCities=amountCities.length
    amountCities=(amountCities/pagination.limit)
    let maxPages=Math.ceil(amountCities)
    if (maxPages>pagination.page) {
        next=true
    }
    if (pagination.page>1) {
        prev=true
    }

    return res.json({
        success:true,
        response:{cities,
        next,
        prev,
        maxPages},
        message: "all cities"
    })   

    } catch (error) {
        return res.json({
            success:false,
            message:"error getting cities"
        })
    }
}

