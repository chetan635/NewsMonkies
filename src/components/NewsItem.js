import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        // for getting the title and dexsc
        let {title , description ,imageUrl,newsUrl,author,date,source} = this.props


        return (
            <div>
                <div className="card my-3" style={{ borderRadius:"10px"}}>
                 
                    <p class="card-text mx-3 my-2"><strong style={{color:"#7B0000"}}>By {!author?"Unknown":author}</strong></p>
                    {/* <span class="badge bg-warning" style={{color:'black'}}>{source}</span> */}
                    <span class="position-absolute top-0  translate-middle badge rounded-pill bg-warning " style={{color:'black',left:"85%",zIndex:1}}>
                        {source}
                        <span class="visually-hidden">unread messages</span>
                    </span>
               
                    <img style={{height:"250px"}} src={imageUrl?imageUrl:"https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description!==null?description.slice(1,90):"Nothing" + "..."}</p>
                        
                        <p class="card-text"><small class="">{new Date(date).toUTCString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-danger">Read More</a>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
